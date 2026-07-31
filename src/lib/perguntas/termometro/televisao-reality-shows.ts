import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_televisao_reality_shows: Record<string, PerguntaTermometro[]> = {
  "sub_28_0": [ // Cultura Televisiva
    { id: "tm_tv_c_01", texto: "Quantas horas por dia passo com a televisão ligada na sala, mesmo que apenas a servir de 'ruído de fundo'?", min: 0, max: 24, unidade: "Horas" },
    { id: "tm_tv_c_02", texto: "Numa escala de 0 a 100%, quão agarrado(a) eu cheguei a ser a novelas portuguesas ou brasileiras à noite?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tv_c_03", texto: "Qual o número máximo na barra de volume da TV que aceito antes de considerar que está a fazer tremer as paredes?", min: 10, max: 100, unidade: "Volume" },
    { id: "tm_tv_c_04", texto: "Quantos episódios do Preço Certo (ou concursos similares) consigo ver seguidos antes de enjoar a cantoria?", min: 0, max: 10, unidade: "Episódios" },
    { id: "tm_tv_c_05", texto: "Qual a probabilidade (0-100%) de eu adormecer ferrado no sofá 10 minutos após obrigar todos a meterem no filme que eu queria ver?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tv_c_06", texto: "Numa escala de 0 a 10, quão insuportáveis eu acho os blocos de publicidade de 20 minutos dos canais abertos?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tv_c_07", texto: "Quantas vezes por semana janto com o prato à frente da TV a ver as notícias ou séries em vez de ir para a mesa da cozinha?", min: 0, max: 7, unidade: "Vezes" },
    { id: "tm_tv_c_08", texto: "Qual a percentagem (0-100%) de veracidade e confiança que eu dou às 'Notícias de Última Hora' dos blocos informativos diários?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tv_c_09", texto: "Quantas séries diferentes na Netflix/HBO/Disney eu afirmo estar 'a ver neste momento' mas cujos nomes já nem me lembro?", min: 1, max: 20, unidade: "Séries em Pausa" },
    { id: "tm_tv_c_10", texto: "Numa escala de 0 a 10, o quão rápido eu critico e embirro com os comentadores de desporto / bola aos domingos à noite?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tv_c_11", texto: "Até quantos euros aceitaria pagar mensais por pacotes de TV e Streaming juntos antes de cancelar tudo e ler um livro?", min: 10, max: 150, unidade: "Euros" },
    { id: "tm_tv_c_12", texto: "Qual a probabilidade (0-100%) de eu mandar vir e falar ativamente com as pessoas que aparecem no ecrã como se me ouvissem?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tv_c_13", texto: "Quantas temporadas inteiras de uma série eu conseguiria 'maratonar' num único fim de semana chuvoso se não tivesse obrigações?", min: 1, max: 10, unidade: "Temporadas" },
    { id: "tm_tv_c_14", texto: "Numa escala de 0 a 10, quão agarrado(a) ao telemóvel a fazer scroll eu estou enquanto digo que 'estou a ver TV' com o parceiro?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tv_c_15", texto: "Quantos anos passaram desde a última vez que liguei para um programa (tipo 760) para tentar ganhar dinheiro ou o carro?", min: 0, max: 50, unidade: "Anos" },
    { id: "tm_tv_c_16", texto: "Qual a percentagem (0-100%) de paciência que tenho para ver séries dobradas em português em vez do áudio original legendado?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tv_c_17", texto: "Quantos comandos estão estrategicamente distribuídos no meu sofá e na mesa de centro só para controlar a TV e a Box?", min: 1, max: 6, unidade: "Comandos" },
    { id: "tm_tv_c_18", texto: "Numa escala de 0 a 10, quão fã e espectador(a) assíduo(a) eu era de séries infanto-juvenis como 'Morangos com Açúcar' no meu tempo?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tv_c_19", texto: "Quantos programas de culinária e de renovação de casas sou capaz de ver por mês no cabo (24 Kitchen / Casa e Cozinha)?", min: 0, max: 100, unidade: "Programas" },
    { id: "tm_tv_c_20", texto: "A que idade eu finalmente aderi e decidi pagar do meu bolso a primeira subscrição de Streaming em vez de roubar as passwords aos ex?", min: 18, max: 50, unidade: "Anos" }
  ],
  "sub_28_1": [ // Reality Shows e Polémicas
    { id: "tm_tv_r_01", texto: "Numa escala de 0 a 100%, quão embaraçoso é o meu grau de vício assumido por Reality Shows tipo Casa dos Segredos ou Big Brother?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tv_r_02", texto: "Quantos milhares de euros pediria, no mínimo, para me fecharem numa casa vigiada por câmaras durante 3 meses na TV aberta?", min: 10, max: 1000, unidade: "Milhares" },
    { id: "tm_tv_r_03", texto: "Qual a probabilidade (0-100%) de eu desatar a insultar um concorrente na TV e jurar ódio de morte às atitudes dele lá dentro?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tv_r_04", texto: "Quantos dias da semana admito sintonizar o 'Canal 24 Horas' (TVI Reality) só para coscuvilhar as conversas e intrigas noturnas?", min: 0, max: 7, unidade: "Dias" },
    { id: "tm_tv_r_05", texto: "Numa escala de 0 a 10, quão depressa eu daria um estrondo de escândalo se me removessem o tabaco/comida e me pusessem tarefas punitivas?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tv_r_06", texto: "Quantas chamadas de telefone pago eu juro, sob tortura, já ter feito para tentar salvar ou expulsar algum concorrente odiado/adorado?", min: 0, max: 100, unidade: "Votos" },
    { id: "tm_tv_r_07", texto: "Qual a percentagem (0-100%) de vezes que eu finjo perante pessoas intelectuais que 'não vejo essas lixeiras da TV' e afinal vejo tudo?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tv_r_08", texto: "Quantas galas de domingo à noite eu exijo ver religiosamente até à 1h da manhã sacrificando as horas de sono de segunda-feira?", min: 0, max: 20, unidade: "Galas" },
    { id: "tm_tv_r_09", texto: "Numa escala de 0 a 10, quão bom 'jogador' ou 'falso/manipulador' eu conseguiria ser numa casa daquelas sem que os outros topassem?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tv_r_10", texto: "Qual a probabilidade (0-100%) de eu me inscrever num programa do género 'Casados à Primeira Vista' num momento de puro desespero na vida?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tv_r_11", texto: "Quantos minutos de emissão aguento sem me rir de um casal fabricado debaixo dos cobertores a sussurrar sem se ouvir nada?", min: 0, max: 60, unidade: "Minutos" },
    { id: "tm_tv_r_12", texto: "Numa escala de 0 a 100%, quanto do drama nesses Reality Shows eu acho que é totalmente guionado e pedido no ouvido pela produção?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tv_r_13", texto: "Quantas discussões parvas eu já tive com amigos, mãe ou parceiro(a) por não concordarmos sobre quem tem razão nas barracas do programa?", min: 0, max: 50, unidade: "Discussões" },
    { id: "tm_tv_r_14", texto: "Numa escala de 0 a 10, quão agressivo eu acho o bullying gratuito que se faz a alguns concorrentes nestes formatos pelos painéis de comentadores?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tv_r_15", texto: "Quantos seguidores/seguidoras do Instagram dos ex-concorrentes (após eles saírem) eu cusco ativamente para ver onde gastam o prémio?", min: 0, max: 100, unidade: "Contas Cuspidas" },
    { id: "tm_tv_r_16", texto: "Qual a percentagem (0-100%) da minha vontade real de que houvesse pugilato (pancada a sério) na casa quando as coisas aquecem na cadeira quente?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tv_r_17", texto: "Quantos episódios de Reality Shows focados em comida (como Pesadelo na Cozinha) eu vejo e dou por mim a gritar pela sujidade que passa no ecrã?", min: 0, max: 50, unidade: "Episódios" },
    { id: "tm_tv_r_18", texto: "Numa escala de 0 a 10, quão ridículos e azeiteiros considero os reality shows estrangeiros de engate em ilhas ou vivendas em biquini?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tv_r_19", texto: "Quantos bordões e expressões infames (ex: 'Isto agora é bater punho') eu acabei por incorporar ironicamente no meu vocabulário diário?", min: 0, max: 20, unidade: "Expressões" },
    { id: "tm_tv_r_20", texto: "Qual a probabilidade (0-100%) de eu desistir do meu emprego caso participasse e me tornasse uma micro-celebridade de Instagram vendendo gomas e chás para emagrecer?", min: 0, max: 100, unidade: "%" }
  ]
};
