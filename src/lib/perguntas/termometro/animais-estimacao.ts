import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_animais_estimacao: Record<string, PerguntaTermometro[]> = {
  "sub_13_0": [ // Cães e Gatos
    { id: "tm_ae_c_01", texto: "Qual a percentagem (0-100%) de fotografias no rolo do meu telemóvel que são apenas do meu animal de estimação?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ae_c_02", texto: "Numa escala de 0 a 10, o quão 'maluquinho(a)' das vozes finas eu fico a falar com um cão ou gato?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ae_c_03", texto: "Quantos euros torro, num mês normal, em brinquedos e mimos completamente desnecessários para o bicho?", min: 0, max: 200, unidade: "Euros" },
    { id: "tm_ae_c_04", texto: "Quantas vezes o meu animal já partiu ou destruiu algo caro (sapatos, comandos) de grande valor?", min: 0, max: 20, unidade: "Vezes" },
    { id: "tm_ae_c_05", texto: "Numa escala de 0 a 100%, qual é o meu nível de nojo ou aversão a limpar os 'presentes' (necessidades) lá de casa?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ae_c_06", texto: "Quantas horas por noite aceito dividir o meu espaço vital (e a cama) para o animal dormir encostado a mim?", min: 0, max: 12, unidade: "Horas" },
    { id: "tm_ae_c_07", texto: "Qual a percentagem de vezes em que cedo a dar-lhes comida minha da mesa por estarem com ar de coitados?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ae_c_08", texto: "Quantas vezes por ano lavo / dou banho ativamente ao meu animal em vez de ir ao veterinário?", min: 0, max: 24, unidade: "Vezes" },
    { id: "tm_ae_c_09", texto: "Numa escala de 0 a 10, quão histérico(a) e preocupado(a) fico quando ele tosse ou espirra de forma estranha?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ae_c_10", texto: "Qual o limite de animais (cães e gatos juntos) que eu aceitaria ter numa casa e cuidar confortavelmente?", min: 1, max: 10, unidade: "Animais" },
    { id: "tm_ae_c_11", texto: "Quantos rolos adesivos tira-pêlos consumo por mês para conseguir andar minimamente apresentável na rua?", min: 0, max: 10, unidade: "Rolos" },
    { id: "tm_ae_c_12", texto: "Numa escala de 0 a 10, quão ofendido(a) fico se uma visita lá em casa disser que não gosta muito de animais?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ae_c_13", texto: "Quantas vezes por semana arranjo uma 'conversa séria' na sala a desabafar os meus problemas ao bicho?", min: 0, max: 14, unidade: "Vezes" },
    { id: "tm_ae_c_14", texto: "Qual a probabilidade (0-100%) de eu faltar a um evento ou compromisso só porque o animal estava muito 'carente'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ae_c_15", texto: "A que idade os meus pais deixaram finalmente que eu tivesse o meu primeiro animal de estimação em criança?", min: 1, max: 25, unidade: "Anos" },
    { id: "tm_ae_c_16", texto: "Numa escala de 0 a 10, quão tolerante sou aos pêlos misturados na minha roupa ou na mobília?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ae_c_17", texto: "Quantas alcunhas, além do nome oficial, eu inventei e uso para chamar o meu animal em casa?", min: 1, max: 15, unidade: "Alcunhas" },
    { id: "tm_ae_c_18", texto: "Qual a percentagem do meu tempo livre ao telemóvel que passo a ver vídeos engraçados de cães e gatos?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ae_c_19", texto: "Numa escala de 0 a 10, quão bom(a) e forte me considero a dar um comprimido que ele não quer engolir?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ae_c_20", texto: "Até que idade de longevidade rezo todos os dias para que o meu parceiro de 4 patas consiga viver saudavelmente?", min: 10, max: 25, unidade: "Anos" }
  ],
  "sub_13_1": [ // Outros Bichos e Fobias
    { id: "tm_ae_o_01", texto: "Numa escala de 0 a 100%, qual o meu nível de pânico ou aversão extrema (fobia) a aranhas?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ae_o_02", texto: "Quantos metros de distância considero seguros de manter se avistar uma cobra no mato?", min: 1, max: 100, unidade: "Metros" },
    { id: "tm_ae_o_03", texto: "Numa escala de 0 a 10, o quão fofos, e não nojentos, eu acho ratos de estimação (hamsters / porquinhos da índia)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ae_o_04", texto: "Qual a probabilidade (0-100%) de eu gritar se um pombo ou gaivota voar demasiado perto da minha cabeça?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ae_o_05", texto: "Quantas abelhas a entrar no carro em andamento são precisas para me fazer encostar imediatamente na berma?", min: 1, max: 10, unidade: "Abelhas" },
    { id: "tm_ae_o_06", texto: "A que idade fui pela primeira (ou única) vez visitar um Jardim Zoológico na vida?", min: 3, max: 40, unidade: "Anos" },
    { id: "tm_ae_o_07", texto: "Numa escala de 0 a 100%, quão fã sou eu de ver documentários narrados no canal da National Geographic?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ae_o_08", texto: "Quantos mosquitos a zumbir à noite no quarto eu caço ativamente antes de voltar a tentar dormir?", min: 0, max: 15, unidade: "Mosquitos" },
    { id: "tm_ae_o_09", texto: "Qual a probabilidade (0-100%) de me atirar ao chão se uma barata voadora vier na minha direção?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ae_o_10", texto: "Numa escala de 0 a 10, o quão confortável estaria eu a fazer festas a um cavalo num campo aberto?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ae_o_11", texto: "Quantas vezes já fui picado por abelhas/vespas ou alforrecas na minha vida inteira?", min: 0, max: 20, unidade: "Picadas" },
    { id: "tm_ae_o_12", texto: "Se as regras permitissem, qual o limite de dinheiro (em milhares) que daria para ter um macaco inteligente em casa?", min: 0, max: 100, unidade: "Milhares" },
    { id: "tm_ae_o_13", texto: "Numa escala de 0 a 10, quão assustado(a) eu ficaria ao nadar em águas escuras no mar e não ver o fundo?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ae_o_14", texto: "Qual a percentagem de animais 'de capoeira' (galinhas, porcos, vacas) com que lido na boa se for a uma quinta?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ae_o_15", texto: "A que idade me apercebi de onde vinha a carne que eu comia (vacas, porcos) e fiquei ligeiramente em choque?", min: 3, max: 15, unidade: "Anos" },
    { id: "tm_ae_o_16", texto: "Quantas espécies de peixes diferentes aguento ter num aquário antes de achar que dá muito trabalho?", min: 0, max: 20, unidade: "Espécies" },
    { id: "tm_ae_o_17", texto: "Numa escala de 0 a 10, o quanto detesto aquelas melgas e carraças que mordem nas idas ao campo?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ae_o_18", texto: "Qual a percentagem (0-100%) da culpa que o ser humano tem sobre a extinção total da fauna selvagem?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ae_o_19", texto: "Quantas vezes por verão tenho de fugir e abandonar toalhas/lanches para as gaivotas não os comerem na praia?", min: 0, max: 10, unidade: "Vezes" },
    { id: "tm_ae_o_20", texto: "Numa escala de 0 a 10, quão corajoso(a) sou a agarrar num escaravelho da batata ou louva-a-deus com as mãos?", min: 0, max: 10, unidade: "Escala" }
  ]
};
