import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_desporto_fitness: Record<string, PerguntaTermometro[]> = {
  "sub_8_0": [ // Exercício e Ginásio
    { id: "tm_df_g_01", texto: "Quantos meses de mensalidade de ginásio já paguei no total da vida sem lá ter posto os pés?", min: 0, max: 60, unidade: "Meses" },
    { id: "tm_df_g_02", texto: "Numa escala de 0 a 100%, qual é o meu nível de preguiça física profunda num domingo de inverno?", min: 0, max: 100, unidade: "%" },
    { id: "tm_df_g_03", texto: "Quantos minutos exatos aguento a correr na passadeira antes de implorar por ar e desistir?", min: 1, max: 60, unidade: "Minutos" },
    { id: "tm_df_g_04", texto: "Qual o peso máximo (em kg) que considero confortável levantar ou puxar na máquina de ginásio?", min: 5, max: 150, unidade: "kg" },
    { id: "tm_df_g_05", texto: "Quantas flexões seguidas com boa postura acredito conseguir fazer neste momento?", min: 0, max: 100, unidade: "Flexões" },
    { id: "tm_df_g_06", texto: "Numa escala de 0 a 10, o quão obsecado(a) eu sou com o aspeto da roupa desportiva (outfit de ginásio)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_df_g_07", texto: "Quantos dias duram as dores agudas no meu corpo após um primeiro treino depois de meses parado(a)?", min: 1, max: 7, unidade: "Dias" },
    { id: "tm_df_g_08", texto: "Qual a percentagem (0-100%) de vezes que eu uso a desculpa 'Não tenho tempo' para não ir treinar?", min: 0, max: 100, unidade: "%" },
    { id: "tm_df_g_09", texto: "Quantas vezes por ano tomo a decisão firme de que 'É desta que fico fit para o verão'?", min: 1, max: 5, unidade: "Vezes" },
    { id: "tm_df_g_10", texto: "Numa escala de 0 a 10, o quão intimidado(a) me sinto na zona dos pesos livres rodeado de malta musculada?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_df_g_11", texto: "Quantos litros de suor (metaforicamente) deixo na passadeira a cada ida de esforço a sério?", min: 1, max: 10, unidade: "Litros" },
    { id: "tm_df_g_12", texto: "Qual a probabilidade (0-100%) de eu destruir um treino impecável comendo fast-food na hora a seguir?", min: 0, max: 100, unidade: "%" },
    { id: "tm_df_g_13", texto: "Quantos segundos aguento na prancha (plank) abdominal antes do meu corpo começar a tremer como varas verdes?", min: 10, max: 300, unidade: "Segundos" },
    { id: "tm_df_g_14", texto: "Numa escala de 0 a 10, o quão mentiroso(a) sou sobre a quantidade de calorias que o meu relógio diz que queimei?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_df_g_15", texto: "Quantas t-shirts e leggings perfeitamente novas comprei como incentivo ao treino e que usei para ir dormir?", min: 0, max: 20, unidade: "Peças" },
    { id: "tm_df_g_16", texto: "Qual a percentagem da motivação do meu treino que vem apenas da música aos berros nos auscultadores?", min: 0, max: 100, unidade: "%" },
    { id: "tm_df_g_17", texto: "Quantas vezes por semana, no cenário dos meus sonhos, eu conseguiria ir treinar sem desculpas?", min: 0, max: 7, unidade: "Vezes" },
    { id: "tm_df_g_18", texto: "Numa escala de 0 a 10, o quão ridículo(a) acho que fico a fazer aulas de grupo como Zumba ou Step?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_df_g_19", texto: "Quantos quilos gostava secretamente de perder (ou ganhar) para ter o corpo exato que quero?", min: 0, max: 30, unidade: "kg" },
    { id: "tm_df_g_20", texto: "Até que degrau/lance de escadas no prédio eu começo a respirar de boca aberta de cansaço?", min: 1, max: 15, unidade: "Andares" }
  ],
  "sub_8_1": [ // Fã e Clubes
    { id: "tm_df_f_01", texto: "Numa escala de 0 a 100%, qual é o meu nível de fanatismo doentio pelo meu clube do coração?", min: 0, max: 100, unidade: "%" },
    { id: "tm_df_f_02", texto: "Quantos euros seria capaz de dar, numa loucura, por um bilhete para uma final europeia da minha equipa?", min: 50, max: 2000, unidade: "Euros" },
    { id: "tm_df_f_03", texto: "Quantas asneiras, insultos e palavrões saem da minha boca por minuto quando o árbitro falha contra nós?", min: 0, max: 20, unidade: "Insultos" },
    { id: "tm_df_f_04", texto: "Qual a percentagem (0-100%) da minha alegria semanal que depende de a bola entrar ou não entrar na baliza?", min: 0, max: 100, unidade: "%" },
    { id: "tm_df_f_05", texto: "Quantas camisolas, cachecóis ou casacos oficiais do meu clube ou desporto favorito eu possuo?", min: 0, max: 50, unidade: "Artigos" },
    { id: "tm_df_f_06", texto: "Numa escala de 0 a 10, quão insuportável eu sou de aturar na segunda-feira quando o meu clube perde um clássico?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_df_f_07", texto: "Quantos jogos por época eu tento sempre ir ver ao estádio / pavilhão se tiver oportunidade?", min: 0, max: 40, unidade: "Jogos" },
    { id: "tm_df_f_08", texto: "Qual a probabilidade (0-100%) de eu bloquear amigos no WhatsApp por causa de picardias doentes de futebol?", min: 0, max: 100, unidade: "%" },
    { id: "tm_df_f_09", texto: "Quantos desportos diferentes acompanho com genuíno interesse na televisão além do futebol?", min: 0, max: 10, unidade: "Desportos" },
    { id: "tm_df_f_10", texto: "Numa escala de 0 a 10, qual a minha irritação com os comentadores imparciais ou programas desportivos da TV?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_df_f_11", texto: "Quantas vezes por época juro pela minha saúde 'Nunca mais vejo um jogo desta miséria de equipa!'?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_df_f_12", texto: "A que batimento cardíaco por minuto o meu coração chega aos 90 minutos quando o jogo está empatado?", min: 60, max: 180, unidade: "BPM" },
    { id: "tm_df_f_13", texto: "Qual a percentagem da teoria de que o 'Árbitro/VAR nos roubou' em que eu acredito sempre no calor do momento?", min: 0, max: 100, unidade: "%" },
    { id: "tm_df_f_14", texto: "Numa escala de 0 a 10, quão bom(a) treinador(a) de bancada eu me considero (se me dessem a equipa ganhava)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_df_f_15", texto: "Quantas cervejas e bifanas/petiscos acompanham obrigatoriamente uma ida à tasca para ver a bola?", min: 0, max: 15, unidade: "Bebidas/Doses" },
    { id: "tm_df_f_16", texto: "A que quilómetros de distância viajava de carro só para ver um jogo importante fora de casa?", min: 0, max: 3000, unidade: "km" },
    { id: "tm_df_f_17", texto: "Qual a probabilidade (0-100%) de eu ter rituais estritos de superstição, como sentar no mesmo lugar ou a usar mesma t-shirt?", min: 0, max: 100, unidade: "%" },
    { id: "tm_df_f_18", texto: "Quantas vezes num mês vou ver os resumos e os golos no YouTube para me deleitar com uma vitória?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_df_f_19", texto: "Numa escala de 0 a 10, o quão 'treinador tático' eu serei com os meus futuros filhos a jogar no parque?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_df_f_20", texto: "A que idade comecei verdadeiramente a compreender e a gostar das regras do meu desporto de eleição?", min: 4, max: 30, unidade: "Anos" }
  ]
};
