import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_musica_concertos: Record<string, PerguntaTermometro[]> = {
  "sub_25_0": [ // Gostos e Playlists
    { id: "tm_mc_g_01", texto: "Qual a percentagem (0-100%) da minha playlist favorita que é composta por música assumidamente pirosa, pimba ou 'guilty pleasures'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_g_02", texto: "Quantas horas por dia passo, em média, com uns auscultadores/auriculares nos ouvidos a ignorar o mundo?", min: 0, max: 16, unidade: "Horas" },
    { id: "tm_mc_g_03", texto: "Numa escala de 0 a 10, o quão alto (e ensurdecedor) gosto de ter o som do rádio a bater quando vou a conduzir sozinho(a)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_mc_g_04", texto: "Quantas vezes consecutivas sou capaz de ouvir exatamente a mesma música em loop (repetição) quando fico viciado(a) nela?", min: 1, max: 50, unidade: "Vezes Seguidas" },
    { id: "tm_mc_g_05", texto: "Qual a probabilidade (0-100%) de eu mentir ou disfarçar os meus gostos musicais verdadeiros quando me dão o cabo AUX do carro?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_g_06", texto: "Quantas playlists diferentes e com nomes bizarros (ex: 'Para chorar no banho') eu criei no meu Spotify/Apple Music?", min: 1, max: 50, unidade: "Playlists" },
    { id: "tm_mc_g_07", texto: "Numa escala de 0 a 10, quão afinado(a) eu genuinamente acho que sou a cantar debaixo do chuveiro?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_mc_g_08", texto: "Qual a percentagem do meu cérebro que está permanentemente ocupada a tocar o refrão de uma música de um anúncio de TV irritante?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_g_09", texto: "Quantos artistas 'indie' ou 'desconhecidos' eu defendo acerrimamente antes de eles se tornarem muito comerciais e eu perder o interesse?", min: 0, max: 20, unidade: "Artistas" },
    { id: "tm_mc_g_10", texto: "A que idade os meus gostos musicais estagnaram (ex: continuar a achar que as bandas de 2008 é que eram boas)?", min: 12, max: 40, unidade: "Anos" },
    { id: "tm_mc_g_11", texto: "Numa escala de 0 a 100%, qual é o meu nível de repulsa imediata por Heavy Metal muito agressivo ou gritaria pesada?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_g_12", texto: "Quantos segundos demoro a mudar a rádio mal ouço os primeiros acordes da música comercial que está em todo o lado e eu odeio?", min: 1, max: 10, unidade: "Segundos" },
    { id: "tm_mc_g_13", texto: "Qual a probabilidade (0-100%) de o meu Spotify Wrapped anual me dar imensa vergonha de partilhar com o público do Instagram?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_g_14", texto: "Quantos instrumentos musicais falhados tenho por casa porque jurei que ia aprender a tocar e desisti no terceiro acorde?", min: 0, max: 5, unidade: "Instrumentos" },
    { id: "tm_mc_g_15", texto: "Numa escala de 0 a 10, o quanto sofro a ouvir as músicas de Natal em loop nos shoppings a partir de meados de Novembro?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_mc_g_16", texto: "Quantas músicas da Eurovisão de anos passados moram ativamente no meu telemóvel para sessões de ginásio ou limpeza?", min: 0, max: 30, unidade: "Músicas" },
    { id: "tm_mc_g_17", texto: "Qual a percentagem de vezes em que julgo severamente alguém após ela me revelar qual é a sua banda favorita de todos os tempos?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_g_18", texto: "Quantas canções deprimentes integram a minha lista dedicada exclusivamente aos momentos em que quero ser miserável deitado(a) na cama?", min: 0, max: 100, unidade: "Canções Tristes" },
    { id: "tm_mc_g_19", texto: "Numa escala de 0 a 10, quão insuportável eu fico quando sei factos triviais de uma banda e quero demonstrar a toda a gente que os sei?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_mc_g_20", texto: "Qual a probabilidade (0-100%) de eu dar o meu melhor concerto de 'Air Guitar' (bateria e guitarra invisíveis) quando estou num semáforo de trânsito?", min: 0, max: 100, unidade: "%" }
  ],
  "sub_25_1": [ // Ao Vivo e Festivais
    { id: "tm_mc_v_01", texto: "Qual o montante máximo absoluto (em euros) que eu seria capaz de pagar para ver o meu ídolo musical atuar ao vivo na fila da frente?", min: 50, max: 2000, unidade: "Euros" },
    { id: "tm_mc_v_02", texto: "Quantas horas estou disposto(a) a cozer ao sol à porta de um pavilhão (na fila) para garantir o lugar encostado(a) à grade do palco?", min: 0, max: 24, unidade: "Horas" },
    { id: "tm_mc_v_03", texto: "Numa escala de 0 a 100%, o quanto me irritam os fãs que passam o concerto IN-TEI-RO a filmar com o ecrã do telemóvel à minha frente?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_v_04", texto: "Quantos copos de cerveja aguada (a preços ridículos) compro habitualmente no recinto de um grande festival de verão?", min: 0, max: 15, unidade: "Copos de Cerveja" },
    { id: "tm_mc_v_05", texto: "Qual a percentagem (0-100%) de cansaço extremo e dores de costas com que chego ao momento exato em que a banda principal finalmente entra no palco?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_v_06", texto: "Quantas vezes a minha bexiga decide pedir-me ativamente para ir a uma casa de banho portátil nojenta num festival ao ar livre?", min: 0, max: 10, unidade: "Idas ao WC" },
    { id: "tm_mc_v_07", texto: "Numa escala de 0 a 10, quão bom(a) eu sou a abrir caminho 'à queima' ou a dar cotoveladas pela multidão para conseguir chegar mais à frente?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_mc_v_08", texto: "Qual a probabilidade (0-100%) de eu perder ativamente a voz no dia seguinte por causa dos berros desafinados que dei durante os refrões?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_v_09", texto: "Quantas pulseiras de tecido de festivais passados fui capaz de acumular no meu pulso de forma duvidosamente higiénica?", min: 0, max: 15, unidade: "Pulseiras" },
    { id: "tm_mc_v_10", texto: "Numa escala de 0 a 10, o quão embaraçoso eu acho entrar nas famosas 'Rodas' (Moshpits) de empurrões no meio do público de rock?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_mc_v_11", texto: "Quantos euros calculo que esbanjo por cada evento num pedaço de pano ou t-shirt oficial de merchandising da banda estampada a pressa?", min: 0, max: 100, unidade: "Euros em Merch" },
    { id: "tm_mc_v_12", texto: "A que percentagem sinto um pânico fóbico da multidão a apertar-me no peito se estiver rodeado de pessoas altas e suadas nos quatro lados?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_v_13", texto: "Quantas vezes me apetece atirar objetos à malta que lança copos de plástico e líquidos misteriosos pelo ar a meio do concerto?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_mc_v_14", texto: "Numa escala de 0 a 10, o quão depressivo(a) eu me sinto na manhã seguinte ao saber que o concerto por que esperei meses acabou?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_mc_v_15", texto: "Quantas fotografias péssimas e tremidas, cheias de luzes brancas sem jeito, eu guardo no meu telemóvel da perspetiva de concertos?", min: 0, max: 200, unidade: "Fotos Tremidas" },
    { id: "tm_mc_v_16", texto: "Qual a probabilidade (0-100%) de eu concordar e aceitar acampar no pó numa tenda de campismo para ver uma banda três dias?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_v_17", texto: "Quantas músicas novas afirmo 'conhecer' ao vivo, mas passo apenas a mastigar os lábios fingindo a letra aos amigos que sabem?", min: 0, max: 20, unidade: "Músicas Fingidas" },
    { id: "tm_mc_v_18", texto: "Numa escala de 0 a 100%, qual o peso das saudades que eu sinto do conforto do meu sofá durante os intervalos frios e ventosos dos palcos em que estou a assistir?", min: 0, max: 100, unidade: "%" },
    { id: "tm_mc_v_19", texto: "Quantas e inusitadas desculpas elaboradas ou de saúde falsas chego a formular na minha cabeça no mesmo dia para tentar faltar e cancelar a minha ida ao recinto por simples pura preguiça?", min: 0, max: 10, unidade: "Desculpas" },
    { id: "tm_mc_v_20", texto: "A quantos quilómetros de distância do recinto ou estádio admito aceitar fazer a enorme e penosa caminhada final para arranjar um TVDE ou carro sem trânsito bloqueado?", min: 1, max: 10, unidade: "Quilómetros (km)" }
  ]
};
