import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_natureza_ar_livre: Record<string, PerguntaTermometro[]> = {
  "sub_18_0": [ // Praia e Verão
    { id: "tm_nal_p_01", texto: "Qual a percentagem (0-100%) do meu corpo que eu obrigo a estar coberta de protetor solar?", min: 0, max: 100, unidade: "%" },
    { id: "tm_nal_p_02", texto: "Qual o Fator de Proteção Solar (SPF) mínimo que eu aceito colocar no primeiro dia de praia?", min: 10, max: 50, unidade: "Fator (SPF)" },
    { id: "tm_nal_p_03", texto: "Quantos minutos aguento 'a torrar' ao sol na toalha antes de ter de ir à água ou para a sombra?", min: 1, max: 120, unidade: "Minutos" },
    { id: "tm_nal_p_04", texto: "Qual a temperatura mínima da água (em graus) que eu exijo para conseguir dar o mergulho inteiro?", min: 15, max: 30, unidade: "Graus" },
    { id: "tm_nal_p_05", texto: "Numa escala de 0 a 10, quão picuinhas ou chato(a) sou quando me atiram areia para a toalha?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_nal_p_06", texto: "Até quantos quilómetros aceito conduzir/viajar apenas para ir passar a tarde a uma praia boa?", min: 5, max: 200, unidade: "km" },
    { id: "tm_nal_p_07", texto: "Qual a probabilidade (0-100%) de eu ouvir um vendedor e comprar uma Bola de Berlim no areal?", min: 0, max: 100, unidade: "%" },
    { id: "tm_nal_p_08", texto: "Quantas horas ideais passo na praia até o meu corpo pedir para ir embora tomar banho?", min: 1, max: 10, unidade: "Horas" },
    { id: "tm_nal_p_09", texto: "Numa escala de 0 a 10, qual o meu pavor ou medo irracional de pisar alforrecas ou peixes na água?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_nal_p_10", texto: "Quantos chapéus, bonés ou óculos de sol tenho perdidos ou arruinados por idas à praia?", min: 0, max: 20, unidade: "Acessórios" },
    { id: "tm_nal_p_11", texto: "Até quantos euros aceito gastar por dia, em média, na esplanada ou bar da praia a petiscar?", min: 5, max: 100, unidade: "Euros" },
    { id: "tm_nal_p_12", texto: "Qual a percentagem (0-100%) de vezes em que adormeço e acordo suado e confuso na toalha?", min: 0, max: 100, unidade: "%" },
    { id: "tm_nal_p_13", texto: "Quantos dias ando vermelho que nem um tomate/lagosta porque não coloquei o creme direito?", min: 0, max: 14, unidade: "Dias" },
    { id: "tm_nal_p_14", texto: "Numa escala de 0 a 10, quão insuportável eu acho os dias de praia com vento e areia a bater nas pernas?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_nal_p_15", texto: "Quantos saltos e corridinhas dou no areal escaldante para não queimar os pés sem chinelos?", min: 1, max: 50, unidade: "Saltos" },
    { id: "tm_nal_p_16", texto: "Quantas horas de digestão exijo esperar religiosamente antes de me meter dentro de água?", min: 0, max: 4, unidade: "Horas" },
    { id: "tm_nal_p_17", texto: "Qual a probabilidade (0-100%) de eu preferir uma praia fluvial isolada em vez da confusão do mar?", min: 0, max: 100, unidade: "%" },
    { id: "tm_nal_p_18", texto: "Quantos livros ou revistas eu levo para a praia e trago de volta sem ler uma única página?", min: 0, max: 5, unidade: "Livros/Revistas" },
    { id: "tm_nal_p_19", texto: "Numa escala de 0 a 10, quão irritante acho a malta que mete as colunas portáteis a dar música altíssima?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_nal_p_20", texto: "Quantas vezes por tarde sou eu a pessoa designada para 'ficar nas toalhas a guardar os telemóveis'?", min: 0, max: 10, unidade: "Vezes" }
  ],
  "sub_18_1": [ // Campo e Montanha
    { id: "tm_nal_c_01", texto: "Qual a probabilidade (0-100%) de eu cancelar um fim de semana num parque de campismo por causa de melgas e insetos?", min: 0, max: 100, unidade: "%" },
    { id: "tm_nal_c_02", texto: "Numa escala de 0 a 10, quão apavorado(a) eu ficaria se me cruzasse com uma cobra num trilho no meio do monte?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_nal_c_03", texto: "Quantos quilómetros a pé de caminhada (trilho da natureza) aguento fazer sem começar a reclamar de dores?", min: 1, max: 40, unidade: "km" },
    { id: "tm_nal_c_04", texto: "Quantas picadas de mosquito sou capaz de apanhar numa única noite a dormir de janela aberta no campo?", min: 0, max: 50, unidade: "Picadas" },
    { id: "tm_nal_c_05", texto: "Qual a percentagem (0-100%) do meu amor pelo 'ar puro e verde' do campo em comparação ao betão da cidade?", min: 0, max: 100, unidade: "%" },
    { id: "tm_nal_c_06", texto: "Quantos dias aguentaria a acampar no meio do mato sem direito a um banho de água quente na casa de banho?", min: 0, max: 14, unidade: "Dias" },
    { id: "tm_nal_c_07", texto: "A partir de quantas horas sem sinal (Internet 5G) no telemóvel na serra é que eu começo a ficar inquieto(a)?", min: 1, max: 48, unidade: "Horas" },
    { id: "tm_nal_c_08", texto: "Numa escala de 0 a 100%, qual seria a minha taxa de sobrevivência caso me perdesse numa floresta durante uma noite inteira?", min: 0, max: 100, unidade: "%" },
    { id: "tm_nal_c_09", texto: "Quantos espirros por minuto sou capaz de dar na Primavera quando o nível de pólen (alergias) está no máximo?", min: 0, max: 20, unidade: "Espirros" },
    { id: "tm_nal_c_10", texto: "Quantos euros calculo já ter gasto em equipamento de campismo/caminhada que usei apenas 1 ou 2 vezes?", min: 0, max: 1000, unidade: "Euros" },
    { id: "tm_nal_c_11", texto: "Numa escala de 0 a 10, qual o meu nível de pânico se ouvir um cão de guarda solto a ladrar no meio de uma aldeia deserta?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_nal_c_12", texto: "Qual a probabilidade (0-100%) de eu saber acender uma fogueira de raiz usando apenas paus, pedras e coisas locais?", min: 0, max: 100, unidade: "%" },
    { id: "tm_nal_c_13", texto: "Quantos dias seriam o meu 'retiro ideal' isolado(a) numa cabana a ler, com lareira acesa e zero pessoas à volta?", min: 1, max: 30, unidade: "Dias" },
    { id: "tm_nal_c_14", texto: "Numa escala de 0 a 10, quão miserável fica o meu corpo a dormir no chão rijo ou num colchão fino de uma tenda?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_nal_c_15", texto: "Quantas centenas de fotografias idênticas tiro a paisagens, rios ou cascatas que depois nunca mais abro para ver?", min: 0, max: 500, unidade: "Fotos" },
    { id: "tm_nal_c_16", texto: "Qual a percentagem (0-100%) de paz mental inatingível que eu sinto apenas ao ouvir o barulho do vento nas copas das árvores?", min: 0, max: 100, unidade: "%" },
    { id: "tm_nal_c_17", texto: "Quantas peças de fruta ou amoras do mato eu sou capaz de colher e comer logo, ignorando os conselhos de higiene?", min: 0, max: 50, unidade: "Frutas/Amoras" },
    { id: "tm_nal_c_18", texto: "Quantas horas de carro para o interior (serra) faria num piscar de olhos só para fugir de problemas da cidade?", min: 1, max: 10, unidade: "Horas" },
    { id: "tm_nal_c_19", texto: "Qual a probabilidade (0-100%) de eu me perder no mato e virar na bifurcação errada mesmo com um mapa ou GPS na mão?", min: 0, max: 100, unidade: "%" },
    { id: "tm_nal_c_20", texto: "Quantas vezes por ano juro pelas unhas de Cristo que 'o que eu preciso é de comprar uma casinha de pedra e ir viver para a aldeia'?", min: 0, max: 50, unidade: "Vezes" }
  ]
};
