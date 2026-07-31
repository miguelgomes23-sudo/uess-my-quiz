import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_beleza_cuidados: Record<string, PerguntaTermometro[]> = {
  "sub_24_0": [ // Rotinas e Cosméticos
    { id: "tm_bc_r_01", texto: "Quantos euros gasto num mês normal apenas em cremes, cosméticos ou produtos de higiene manhosos?", min: 0, max: 300, unidade: "Euros" },
    { id: "tm_bc_r_02", texto: "Numa escala de 0 a 10, o quão preguiçoso(a) sou para me desmaquilhar ou lavar bem a cara à noite?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_bc_r_03", texto: "Quantos minutos passo a admirar as minhas próprias imperfeições ao espelho de manhã?", min: 1, max: 30, unidade: "Minutos" },
    { id: "tm_bc_r_04", texto: "Qual a percentagem (0-100%) da minha rotina de 'skincare' (pele) que eu cumpro religiosamente todos os dias?", min: 0, max: 100, unidade: "%" },
    { id: "tm_bc_r_05", texto: "Quantos perfumes ou colónias diferentes tenho neste momento abertos na prateleira lá de casa?", min: 1, max: 20, unidade: "Perfumes" },
    { id: "tm_bc_r_06", texto: "Numa escala de 0 a 10, o quão compulsivo(a) eu sou a rebentar espinhas ou pontos negros, mesmo sabendo que faz mal?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_bc_r_07", texto: "Quantos minutos (no total) demoro a arranjar-me na casa de banho antes de um evento importante?", min: 10, max: 120, unidade: "Minutos" },
    { id: "tm_bc_r_08", texto: "Qual a probabilidade (0-100%) de eu usar os cremes caros que me ofereceram no Natal e não deixá-los ganhar pó?", min: 0, max: 100, unidade: "%" },
    { id: "tm_bc_r_09", texto: "Quantos frascos de produtos quase vazios, que já só deitam ar, eu insisto em manter no chuveiro?", min: 0, max: 15, unidade: "Frascos" },
    { id: "tm_bc_r_10", texto: "Numa escala de 0 a 100%, quão vulnerável eu sou a comprar o 'produto milagroso' que a influencer recomendou?", min: 0, max: 100, unidade: "%" },
    { id: "tm_bc_r_11", texto: "Quantas vezes por mês passo o fio dentário com o rigor e a dedicação que o meu dentista julga que eu passo?", min: 0, max: 31, unidade: "Vezes" },
    { id: "tm_bc_r_12", texto: "Qual a percentagem de vezes que uso protetor solar no rosto no inverno, tal como as regras de beleza mandam?", min: 0, max: 100, unidade: "%" },
    { id: "tm_bc_r_13", texto: "Quantos batons de cieiro (ou hidratantes labiais) tenho espalhados e perdidos pelas malas e casacos?", min: 0, max: 20, unidade: "Batons" },
    { id: "tm_bc_r_14", texto: "Numa escala de 0 a 10, quão vaidoso(a) eu fico e me olho nas montras quando o meu cabelo ou outfit estão perfeitos?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_bc_r_15", texto: "Até que valor máximo (em euros) consideraria justo dar por um perfume que cheirasse incrivelmente bem?", min: 20, max: 300, unidade: "Euros" },
    { id: "tm_bc_r_16", texto: "Quantas vezes por ano tento entrar na moda de fazer máscaras faciais de argila ou papel lá em casa?", min: 0, max: 20, unidade: "Vezes" },
    { id: "tm_bc_r_17", texto: "Qual a probabilidade (0-100%) de eu aplicar desodorizante duas vezes no mesmo dia só por paranóia?", min: 0, max: 100, unidade: "%" },
    { id: "tm_bc_r_18", texto: "Numa escala de 0 a 10, quão desesperante é para mim ter as unhas das mãos lascadas, roídas ou sujas?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_bc_r_19", texto: "Quantos produtos 'anti-idade' (para rugas) já comprei em segredo para combater o peso do tempo?", min: 0, max: 15, unidade: "Produtos" },
    { id: "tm_bc_r_20", texto: "Qual a percentagem do dia em que estou a encolher a barriga ativamente quando estou rodeado de pessoas?", min: 0, max: 100, unidade: "%" }
  ],
  "sub_24_1": [ // Cabelo e Corpo
    { id: "tm_bc_c_01", texto: "Quantos dias sou capaz de andar ativamente sem lavar o cabelo disfarçando com apanhados ou champô seco?", min: 1, max: 10, unidade: "Dias" },
    { id: "tm_bc_c_02", texto: "Numa escala de 0 a 10, qual o meu medo ou pavor do cabeleireiro cortar 'só 2 dedinhos' e deixar-me quase careca?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_bc_c_03", texto: "Quantos euros gasto em média cada vez que meto os pés num salão de cabeleireiro / barbeiro?", min: 5, max: 200, unidade: "Euros" },
    { id: "tm_bc_c_04", texto: "Qual a percentagem (0-100%) de arrependimento que sinto sempre que tento cortar a própria franja ou barba em casa?", min: 0, max: 100, unidade: "%" },
    { id: "tm_bc_c_05", texto: "Quantas tatuagens tenho efetivamente no meu corpo e/ou ambiciono seriamente vir a ter?", min: 0, max: 30, unidade: "Tatuagens" },
    { id: "tm_bc_c_06", texto: "Numa escala de 0 a 10, o quão sensível e chorão eu sou para suportar a dor da depilação a cera?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_bc_c_07", texto: "Quantos minutos (no total) gasto a tentar esticar, enrolar ou pentear o meu cabelo numa manhã normal?", min: 1, max: 60, unidade: "Minutos" },
    { id: "tm_bc_c_08", texto: "Qual a probabilidade (0-100%) de eu mentir ao cabeleireiro dizendo 'Adorei, está lindo!' enquanto choro por dentro?", min: 0, max: 100, unidade: "%" },
    { id: "tm_bc_c_09", texto: "Quantos penteados azeiteiros e vergonhosos eu ostentei ativamente nas minhas fotos do Hi5/Facebook aos 15 anos?", min: 1, max: 10, unidade: "Penteados" },
    { id: "tm_bc_c_10", texto: "Numa escala de 0 a 10, quão obcecado(a) eu sou com os famosos 'bad hair days' (dias em que o cabelo não obedece)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_bc_c_11", texto: "Quantos frascos de laca, gel, ou cera de cabelo gastei na minha fase adolescente para manter o cabelo espetado/armado?", min: 0, max: 50, unidade: "Frascos" },
    { id: "tm_bc_c_12", texto: "Qual a percentagem (0-100%) de hipóteses de eu arrancar o meu primeiro (ou próximo) cabelo branco com uma pinça se o vir no espelho?", min: 0, max: 100, unidade: "%" },
    { id: "tm_bc_c_13", texto: "Quantas semanas, no inverno e com frio, deixo a depilação (seja que zona for) ganhar vida própria antes de cuidar disso?", min: 1, max: 12, unidade: "Semanas" },
    { id: "tm_bc_c_14", texto: "Numa escala de 0 a 10, o quão insatisfeito(a) me sinto normalmente com o formato natural do meu corpo em fotos?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_bc_c_15", texto: "Quantos quilos de pura banha ou gordura eu removeria magicamente hoje se uma lipoaspiração fosse 100% grátis e indolor?", min: 0, max: 50, unidade: "kg" },
    { id: "tm_bc_c_16", texto: "Qual a probabilidade (0-100%) de eu já ter pintado o cabelo com cores esdrúxulas no passado de que agora me arrependo?", min: 0, max: 100, unidade: "%" },
    { id: "tm_bc_c_17", texto: "Quantas vezes toco no meu próprio cabelo (para enrolar, ajeitar franja, afastar da cara) durante 1 hora de conversa?", min: 0, max: 60, unidade: "Vezes" },
    { id: "tm_bc_c_18", texto: "Numa escala de 0 a 100%, qual é o meu grau de inveja perante pessoas que têm um bronzeado e tom de pele perfeitos o ano todo?", min: 0, max: 100, unidade: "%" },
    { id: "tm_bc_c_19", texto: "Quantas coisas estúpidas já experimentei para clarear os dentes, clarear a pele ou secar espinhas em casa (ex: pasta de dentes na cara)?", min: 0, max: 10, unidade: "Tentativas" },
    { id: "tm_bc_c_20", texto: "Qual o limite de meses que aguento sem mudar absolutamente nada no meu visual antes de sentir um tédio profundo?", min: 1, max: 60, unidade: "Meses" }
  ]
};
