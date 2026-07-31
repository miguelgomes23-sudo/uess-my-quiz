export type ModoSugestao =
  | "classico"
  | "facto_fake"
  | "este_aquele"
  | "lacuna"
  | "top3"
  | "termometro";

export type TemaSugestao = "aleatorio" | "amor" | "segredos" | "passatempos";

export type PerguntasSugeridas = Record<
  ModoSugestao,
  Record<TemaSugestao, string[]>
>;

export const perguntasSugeridas: PerguntasSugeridas = {
  classico: {
    aleatorio: [
      "Qual é a minha comida de conforto quando estou mal-disposto?",
      "Que música eu ponho quando quero parecer cool mas não estou nada cool?",
      "Qual é o meu maior red flag que eu próprio ignoro?",
    ],
    amor: [
      "Qual foi a minha primeira reação quando alguém me disse 'gosto de ti'?",
      "Que gesto romântico me deixa completamente derretido?",
      "Qual é o meu dealbreaker numa relação, mesmo que eu finja que não?",
    ],
    segredos: [
      "Qual é a coisa mais embaraçosa que eu já fiz para impressionar alguém?",
      "Que segredo eu guardo só porque tenho vergonha de admitir?",
      "Qual é a mentira branca que eu conto com mais naturalidade?",
    ],
    passatempos: [
      "O que eu faço quando digo 'só mais cinco minutos' e passam duas horas?",
      "Qual é o meu passatempo que mais me acalma depois de um dia caótico?",
      "Que hobby eu comecei entusiasmado e abandonei em três dias?",
    ],
  },
  facto_fake: {
    aleatorio: [
      "Eu já dancei sozinho em casa como se estivesse num concerto sold out.",
      "Eu nunca menti sobre ter visto um filme só para parecer culto.",
      "Eu consigo passar um dia inteiro sem olhar para o telemóvel.",
    ],
    amor: [
      "Eu já stalkeei o perfil de alguém antes do primeiro encontro.",
      "Eu nunca chorei com um filme romântico e depois neguei tudo.",
      "Eu já enviei uma mensagem de amor e arrepender-me três segundos depois.",
    ],
    segredos: [
      "Eu já li mensagens de outra pessoa sem essa pessoa saber.",
      "Eu nunca finji estar doente para cancelar planos.",
      "Eu já apaguei uma publicação porque não teve likes suficientes.",
    ],
    passatempos: [
      "Eu já passei a noite inteira a ver vídeos de um hobby que nunca pratiquei.",
      "Eu nunca comprei material de um passatempo e usei só uma vez.",
      "Eu já menti sobre o meu nível num desporto para entrar num jogo.",
    ],
  },
  este_aquele: {
    aleatorio: [
      "O que me define mais num domingo preguiçoso?",
      "O que eu escolheria se tivesse de viver num sítio para sempre?",
      "O que me tira mais facilmente do sério?",
    ],
    amor: [
      "O que eu prefiro numa relação: estabilidade ou borboletas no estômago?",
      "O que me conquista mais depressa: palavras bonitas ou gestos consistentes?",
      "O que eu escolheria num date: jantar romântico ou aventura improvisada?",
    ],
    segredos: [
      "O que eu escondo mais facilmente: ciúmes ou insegurança?",
      "O que me deixa mais exposto: ser vulnerável ou pedir desculpa?",
      "O que eu prefiro que ninguém descubra: o passado ou os meus medos?",
    ],
    passatempos: [
      "O que eu prefiro num hobby: competir ou relaxar?",
      "O que me prende mais a um passatempo: desafio ou comunidade?",
      "O que eu escolheria para passatempo ideal: criatividade ou adrenalina?",
    ],
  },
  lacuna: {
    aleatorio: [
      "A minha maior mania é ___.",
      "Se me conheces bem, sabes que eu nunca recuso ___.",
      "O meu guilty pleasure absoluto chama-se ___.",
    ],
    amor: [
      "Quando estou apaixonado, fico especialmente vulnerável a ___.",
      "A coisa que mais me faz sentir amado é ___.",
      "O meu maior medo numa relação chama-se ___.",
    ],
    segredos: [
      "Nunca contei a ninguém que eu secretamente adoro ___.",
      "A coisa mais vergonhosa no meu histórico de mensagens envolve ___.",
      "Se abrissem o meu diário, encontrariam páginas sobre ___.",
    ],
    passatempos: [
      "Quando tenho tempo livre, perco-me sempre em ___.",
      "O passatempo que mais me define sem eu admitir chama-se ___.",
      "Se me oferecessem aulas de ___, eu aceitava logo.",
    ],
  },
  top3: {
    aleatorio: [
      "Quais são as três coisas que eu levaria para uma ilha deserta?",
      "Quais são os três sítios onde eu mais me vejo feliz?",
      "Quais são as três coisas que me fazem rir à bruta?",
    ],
    amor: [
      "Quais são as três qualidades que mais valorizo num parceiro?",
      "Quais são os três momentos românticos que eu nunca esqueceria?",
      "Quais são as três coisas que eu faço quando estou perdidamente apaixonado?",
    ],
    segredos: [
      "Quais são os três segredos que poucas pessoas sabem sobre mim?",
      "Quais são as três coisas de que tenho mais vergonha?",
      "Quais são os três erros que eu repeti mais do que devia?",
    ],
    passatempos: [
      "Quais são os meus três passatempos favoritos de sempre?",
      "Quais são as três coisas que eu quero aprender a fazer?",
      "Quais são os três programas ou atividades que me desligam do mundo?",
    ],
  },
  termometro: {
    aleatorio: [
      "A percentagem de probabilidade de eu cancelar planos de última hora.",
      "Quanto eu gasto em impulsos por mês, em percentagem do orçamento.",
      "A percentagem de vezes que digo 'já vou' e demoro mais 20 minutos.",
    ],
    amor: [
      "A percentagem de mensagens românticas que eu releio mais do que uma vez.",
      "Quanto eu sou ciumento, numa escala de 0 a 100.",
      "A percentagem de encontros em que eu finjo estar relaxado mas estou nervoso.",
    ],
    segredos: [
      "A percentagem de segredos que eu conto depois de duas bebidas.",
      "Quanto eu escondo do que realmente penso, numa escala de 0 a 100.",
      "A percentagem de vezes que digo 'está tudo bem' quando não está.",
    ],
    passatempos: [
      "A percentagem do meu tempo livre que dedico ao meu hobby favorito.",
      "Quanto eu sou competitivo quando jogo, numa escala de 0 a 100.",
      "A percentagem de projetos de passatempo que eu começo e nunca acabo.",
    ],
  },
};

export const TEMAS_SUGESTAO: TemaSugestao[] = [
  "aleatorio",
  "amor",
  "segredos",
  "passatempos",
];

export const TEMAS_SUGESTAO_LABELS: Record<TemaSugestao, string> = {
  aleatorio: "Aleatório",
  amor: "Amor",
  segredos: "Segredos",
  passatempos: "Passatempos",
};

export const FALLBACK_SUGESTAO =
  "Ainda sem sugestões para este tema, tenta ser criativo!";
