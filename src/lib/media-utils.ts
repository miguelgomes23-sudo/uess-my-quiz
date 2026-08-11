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