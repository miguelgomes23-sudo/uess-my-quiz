import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_viagens_ferias: Record<string, PerguntaTermometro[]> = {
  "sub_4_0": [ // Hábitos de Viagem
    { id: "tm_vf_h_01", texto: "Numa escala de 0 a 100, qual é o meu nível de stress a fazer a mala na véspera?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vf_h_02", texto: "Quantas horas de antecedência gosto de chegar ao aeroporto antes de um voo?", min: 1, max: 6, unidade: "Horas" },
    { id: "tm_vf_h_03", texto: "Numa viagem de 7 dias, quantos pares de cuecas/cuequinhas costumo meter na mala?", min: 7, max: 25, unidade: "Pares" },
    { id: "tm_vf_h_04", texto: "Qual a percentagem da mala que eu levo cheia de roupa que acabo por nunca vestir?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vf_h_05", texto: "Numa escala de 0 a 10, quão pontual eu sou para apanhar transportes em viagem?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vf_h_06", texto: "Quantos alarmes coloco para acordar no dia de apanhar o avião?", min: 1, max: 10, unidade: "Alarmes" },
    { id: "tm_vf_h_07", texto: "Quantos dias antes da viagem começo a olhar histericamente para as previsões do tempo?", min: 1, max: 30, unidade: "Dias" },
    { id: "tm_vf_h_08", texto: "Numa viagem com amigos, qual é o meu nível de paciência (0-100%) para atrasos do grupo?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vf_h_09", texto: "Quantas fotografias por dia costumo tirar com o telemóvel quando estou num sítio novo?", min: 0, max: 500, unidade: "Fotos" },
    { id: "tm_vf_h_10", texto: "A que velocidade em km/h começo a entrar em pânico se alguém for a conduzir?", min: 100, max: 250, unidade: "km/h" },
    { id: "tm_vf_h_11", texto: "Quantas vezes verifico se tenho o passaporte ou cartão de cidadão antes de sair de casa?", min: 1, max: 20, unidade: "Vezes" },
    { id: "tm_vf_h_12", texto: "Qual a percentagem de viagens que eu planeio ao milímetro (roteiros rígidos)?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vf_h_13", texto: "Numa viagem de carro de 3 horas, a partir de que minuto pergunto 'falta muito?'", min: 10, max: 180, unidade: "Minutos" },
    { id: "tm_vf_h_14", texto: "Qual o peso em kg da minha bagagem de porão, por norma?", min: 5, max: 30, unidade: "Kg" },
    { id: "tm_vf_h_15", texto: "Quantas horas aguento sentada(o) no mesmo sítio no avião sem me levantar?", min: 1, max: 15, unidade: "Horas" },
    { id: "tm_vf_h_16", texto: "Qual o máximo de dinheiro (em euros) que gasto em lembranças/ímans estúpidos?", min: 0, max: 150, unidade: "Euros" },
    { id: "tm_vf_h_17", texto: "Numa escala de 0 a 10, quão picuinhas sou com a limpeza das casas de banho do hotel?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vf_h_18", texto: "Quantas horas durmo, em média, na primeira noite num fuso horário diferente?", min: 0, max: 12, unidade: "Horas" },
    { id: "tm_vf_h_19", texto: "Quantos pares de calçado costumo levar, no total, para umas férias de 10 dias?", min: 1, max: 10, unidade: "Pares" },
    { id: "tm_vf_h_20", texto: "Numa escala de 0 a 100%, quanto é que a minha dieta vai à vida em viagem?", min: 0, max: 100, unidade: "%" }
  ],
  "sub_4_1": [ // Destinos e Aventuras
    { id: "tm_vf_d_01", texto: "Quantos países diferentes eu sonho ter visitado até ao fim da minha vida?", min: 1, max: 195, unidade: "Países" },
    { id: "tm_vf_d_02", texto: "Numa escala de 0 a 10, quão corajoso(a) sou para provar a comida de rua mais estranha?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vf_d_03", texto: "Qual é o número de dias ideal que acho perfeito para umas férias na praia?", min: 2, max: 30, unidade: "Dias" },
    { id: "tm_vf_d_04", texto: "Até que profundidade (em metros) no mar eu tenho coragem de mergulhar?", min: 0, max: 50, unidade: "Metros" },
    { id: "tm_vf_d_05", texto: "Qual a probabilidade (0-100%) de eu aceitar saltar de bungee jumping numas férias?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vf_d_06", texto: "Quantas horas aguento caminhar a pé por uma cidade turística num único dia?", min: 1, max: 16, unidade: "Horas" },
    { id: "tm_vf_d_07", texto: "Numa escala de 0 a 10, qual o meu amor por museus e monumentos muito antigos?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vf_d_08", texto: "Que idade adorava ter quando fizer aquela viagem de sonho 'uma vez na vida'?", min: 20, max: 80, unidade: "Anos" },
    { id: "tm_vf_d_09", texto: "Quantas vezes por ano eu faria viagens internacionais se o dinheiro não fosse problema?", min: 1, max: 50, unidade: "Viagens" },
    { id: "tm_vf_d_10", texto: "Qual o limite máximo de euros por noite que aceito pagar por um hotel incrível?", min: 50, max: 2000, unidade: "Euros" },
    { id: "tm_vf_d_11", texto: "Numa escala de 0 a 100%, o quão disposto(a) estaria a acampar numa floresta?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vf_d_12", texto: "Quantos graus celsius suporto no máximo antes de me recusar a sair do ar condicionado?", min: 25, max: 50, unidade: "Graus" },
    { id: "tm_vf_d_13", texto: "Quantos parques de diversões (tipo Disneyland) adorava conhecer na vida?", min: 0, max: 20, unidade: "Parques" },
    { id: "tm_vf_d_14", texto: "Numa escala de 0 a 10, quão bom(a) eu sou a ler mapas físicos ou orientar-me sem GPS?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vf_d_15", texto: "Quantos quilómetros por dia de viagem de carro acho razoável (Roadtrip)?", min: 50, max: 1000, unidade: "km" },
    { id: "tm_vf_d_16", texto: "Qual a percentagem das férias em que bebo bebidas alcoólicas antes das 15h da tarde?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vf_d_17", texto: "Quantas pessoas formam o meu grupo de viagem ideal?", min: 1, max: 15, unidade: "Pessoas" },
    { id: "tm_vf_d_18", texto: "Numa escala de 0 a 10, quanto é que odeio destinos com muita multidão/turistas?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vf_d_19", texto: "Quantos dias preciso de tirar de 'férias das férias' para descansar em casa quando chego?", min: 0, max: 7, unidade: "Dias" },
    { id: "tm_vf_d_20", texto: "Até quantos euros aceitaria pagar por um prato de comida espetacular nas férias?", min: 10, max: 300, unidade: "Euros" }
  ]
};
