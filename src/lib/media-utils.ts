import { storage } from "@/lib/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Função profissional para comprimir imagens antes do upload
export const comprimirImagem = (file: File, maxWidth = 800, quality = 0.7): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const scaleSize = maxWidth / img.width;
        // Só reduz se a imagem for maior que o maxWidth
        const width = img.width > maxWidth ? maxWidth : img.width;
        const height = img.width > maxWidth ? img.height * scaleSize : img.height;

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error("Erro ao comprimir a imagem."));
        }, "image/jpeg", quality);
      };
    };
    reader.onerror = (error) => reject(error);
  });
};

// Função para fazer upload direto para o Firebase Storage
export const uploadMediaParaStorage = async (
  file: File | Blob, 
  pasta: "imagens" | "videos" | "audios",
  extensao: string
): Promise<string> => {
  const nomeFicheiro = `${crypto.randomUUID()}.${extensao}`;
  const caminho = `quizzes/${pasta}/${nomeFicheiro}`;
  const storageRef = ref(storage, caminho);

  const uploadTask = await uploadBytesResumable(storageRef, file);
  const downloadUrl = await getDownloadURL(uploadTask.ref);
  return downloadUrl;
};

// Nova função para cortar a imagem 1:1 e comprimir ao mesmo tempo
export const getCroppedImg = async (imageSrc: string, pixelCrop: any, maxWidth = 800): Promise<Blob> => {
  const image = new Image();
  image.src = imageSrc;
  await new Promise((resolve) => (image.onload = resolve));

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Sem contexto 2d");

  // Mantém a proporção mas limita o tamanho final para não gastar o Storage
  const scale = Math.min(1, maxWidth / pixelCrop.width);
  canvas.width = pixelCrop.width * scale;
  canvas.height = pixelCrop.height * scale;

  // Desenha apenas a zona cortada no Canvas
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    canvas.width,
    canvas.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Erro ao criar o Blob da imagem"));
    }, "image/jpeg", 0.8); // 80% de qualidade para poupar espaço
  });
};

// --- FUNÇÕES DE ÁUDIO ---

// Converte um Buffer de áudio recortado para um ficheiro WAV leve
function audioBufferToWavBlob(buffer: AudioBuffer): Blob {
  const numOfChan = buffer.numberOfChannels;
  const length = buffer.length * numOfChan * 2 + 44;
  const out = new ArrayBuffer(length);
  const view = new DataView(out);
  const channels = [];
  let sample = 0;
  let offset = 0;
  let pos = 0;

  const setUint16 = (data: number) => { view.setUint16(pos, data, true); pos += 2; };
  const setUint32 = (data: number) => { view.setUint32(pos, data, true); pos += 4; };

  setUint32(0x46464952); // "RIFF"
  setUint32(length - 8); // file length - 8
  setUint32(0x45564157); // "WAVE"
  setUint32(0x20746d66); // "fmt " chunk
  setUint32(16); // length = 16
  setUint16(1); // PCM (uncompressed)
  setUint16(numOfChan);
  setUint32(buffer.sampleRate);
  setUint32(buffer.sampleRate * 2 * numOfChan); // avg. bytes/sec
  setUint16(numOfChan * 2); // block-align
  setUint16(16); // 16-bit
  setUint32(0x61746164); // "data" - chunk
  setUint32(length - pos - 4); // chunk length

  for (let i = 0; i < buffer.numberOfChannels; i++) channels.push(buffer.getChannelData(i));

  while (pos < length) {
    for (let i = 0; i < numOfChan; i++) {
      sample = Math.max(-1, Math.min(1, channels[i][offset]));
      sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0;
      view.setInt16(pos, sample, true);
      pos += 2;
    }
    offset++;
  }
  return new Blob([out], { type: "audio/wav" });
}

// Corta o áudio exatamente entre o tempo inicial e o tempo final definido
export const recortarAudio = async (file: File, startTime: number, endTime: number): Promise<Blob> => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const arrayBuffer = await file.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  const sampleRate = audioBuffer.sampleRate;
  const startOffset = Math.floor(startTime * sampleRate);
  const endOffset = Math.floor(endTime * sampleRate);
  const length = endOffset - startOffset;

  const trimmedBuffer = audioContext.createBuffer(audioBuffer.numberOfChannels, length, sampleRate);

  for (let i = 0; i < audioBuffer.numberOfChannels; i++) {
    const channelData = audioBuffer.getChannelData(i);
    const trimmedData = trimmedBuffer.getChannelData(i);
    for (let j = 0; j < length; j++) {
      trimmedData[j] = channelData[startOffset + j];
    }
  }

  return audioBufferToWavBlob(trimmedBuffer);
};