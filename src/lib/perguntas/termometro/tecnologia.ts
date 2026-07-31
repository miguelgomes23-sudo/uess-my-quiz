import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_tecnologia: Record<string, PerguntaTermometro[]> = {
  "sub_9_0": [ // Vida Digital
    { id: "tm_t_v_01", texto: "Quantas horas diárias de tempo de ecrã (Screen Time) o meu telemóvel regista, em média?", min: 1, max: 18, unidade: "Horas" },
    { id: "tm_t_v_02", texto: "A que percentagem (0-100%) de bateria o meu coração começa a bater mais rápido com ansiedade?", min: 1, max: 50, unidade: "%" },
    { id: "tm_t_v_03", texto: "Quantas notificações/balões vermelhos não lidos tenho neste momento no ícone do email?", min: 0, max: 9999, unidade: "Emails" },
    { id: "tm_t_v_04", texto: "Numa escala de 0 a 10, o quão rápido eu respondo a uma mensagem do WhatsApp?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_t_v_05", texto: "Quantas fotografias tenho guardadas no rolo da câmara (galeria) neste exato momento (em milhares)?", min: 1, max: 100, unidade: "Milhares" },
    { id: "tm_t_v_06", texto: "Qual é o tempo máximo em minutos que aguento ver um vídeo do YouTube sem fazer fast-forward?", min: 1, max: 60, unidade: "Minutos" },
    { id: "tm_t_v_07", texto: "Numa escala de 0 a 100%, quão viciado(a) eu estou em fazer scroll no TikTok ou Reels antes de dormir?", min: 0, max: 100, unidade: "%" },
    { id: "tm_t_v_08", texto: "Quantos alarmes tenho configurados (mesmo os desativados) no meu telemóvel?", min: 1, max: 50, unidade: "Alarmes" },
    { id: "tm_t_v_09", texto: "Quantas vezes por dia abro o Instagram, fecho-o, e volto a abri-lo 5 segundos depois?", min: 0, max: 30, unidade: "Vezes" },
    { id: "tm_t_v_10", texto: "Qual a probabilidade (0-100%) de eu mandar um áudio em vez de escrever um texto comprido?", min: 0, max: 100, unidade: "%" },
    { id: "tm_t_v_11", texto: "Quantos grupos do WhatsApp tenho ativamente silenciados para sempre?", min: 0, max: 50, unidade: "Grupos" },
    { id: "tm_t_v_12", texto: "Numa escala de 0 a 10, quão bom(a) eu sou a 'stalkear' e descobrir a vida de alguém nas redes sociais?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_t_v_13", texto: "Quantas horas aguentaria com o telemóvel totalmente sem bateria e sem carregador perto?", min: 1, max: 48, unidade: "Horas" },
    { id: "tm_t_v_14", texto: "A partir de que minuto um áudio de WhatsApp deixa de ser tolerável e passa a ser um podcast inaceitável?", min: 1, max: 10, unidade: "Minutos" },
    { id: "tm_t_v_15", texto: "Quantos separadores/abas tenho abertos no browser do meu telemóvel agora mesmo?", min: 1, max: 500, unidade: "Abas" },
    { id: "tm_t_v_16", texto: "Numa escala de 0 a 10, o quão embaraçoso seria o meu histórico de pesquisas do Google se vazasse?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_t_v_17", texto: "Quantas vezes por ano troco a fotografia de perfil nas minhas redes sociais?", min: 0, max: 12, unidade: "Vezes" },
    { id: "tm_t_v_18", texto: "Qual a percentagem (0-100%) da minha paciência para chamadas de vídeo não planeadas?", min: 0, max: 100, unidade: "%" },
    { id: "tm_t_v_19", texto: "Quantas subscrições (apps, nuvem, etc.) ando a pagar no telemóvel sem dar quase uso nenhum?", min: 0, max: 10, unidade: "Subscrições" },
    { id: "tm_t_v_20", texto: "Numa escala de 0 a 10, o quão dependente sou do GPS do telemóvel para ir a qualquer lado?", min: 0, max: 10, unidade: "Escala" }
  ],
  "sub_9_1": [ // Gadgets e Aparelhos
    { id: "tm_t_g_01", texto: "Quantos ecrãs de telemóvel já parti (rachados ou destruídos) na minha vida toda?", min: 0, max: 20, unidade: "Ecrãs" },
    { id: "tm_t_g_02", texto: "Até que valor máximo (em euros) considero razoável pagar por um telemóvel novo topo de gama?", min: 200, max: 2000, unidade: "Euros" },
    { id: "tm_t_g_03", texto: "Numa escala de 0 a 100%, qual é o meu nível de cuidado para não deixar cair os meus gadgets?", min: 0, max: 100, unidade: "%" },
    { id: "tm_t_g_04", texto: "Quantos fios/cabos usb e carregadores que não faço ideia de onde são tenho numa gaveta em casa?", min: 0, max: 50, unidade: "Cabos" },
    { id: "tm_t_g_05", texto: "A cada quantos anos costumo comprar ou trocar de telemóvel?", min: 1, max: 10, unidade: "Anos" },
    { id: "tm_t_g_06", texto: "Numa escala de 0 a 10, quão picuinhas sou com a marca da tecnologia que uso (ex: fanático pela Apple)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_t_g_07", texto: "Quantas horas passo por dia a usar uns auriculares/fones nos ouvidos?", min: 0, max: 16, unidade: "Horas" },
    { id: "tm_t_g_08", texto: "Qual a probabilidade (0-100%) de eu ter as luzes RGB todas ligadas no meu teclado/setup neste momento?", min: 0, max: 100, unidade: "%" },
    { id: "tm_t_g_09", texto: "Quantas vezes por semana a minha internet fixa ou router de casa falha ou me irrita?", min: 0, max: 20, unidade: "Vezes" },
    { id: "tm_t_g_10", texto: "Qual o valor (em euros) do gadget mais inútil que comprei e nunca uso (ex: drone barato, etc.)?", min: 0, max: 1000, unidade: "Euros" },
    { id: "tm_t_g_11", texto: "Numa escala de 0 a 10, qual é a minha habilidade técnica para montar/arranjar computadores?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_t_g_12", texto: "Quantos dispositivos inteligentes (smart TV, lâmpadas, colunas) tenho ligados à internet em casa?", min: 1, max: 50, unidade: "Aparelhos" },
    { id: "tm_t_g_13", texto: "Quantos minutos aguento com um computador lento antes de começar a barafustar com o ecrã?", min: 1, max: 15, unidade: "Minutos" },
    { id: "tm_t_g_14", texto: "Qual a percentagem de confiança que tenho nos aspiradores robôs para limparem o chão bem limpo?", min: 0, max: 100, unidade: "%" },
    { id: "tm_t_g_15", texto: "Quantos meses um telemóvel novo dura imaculado até lhe fazer o primeiro risco?", min: 1, max: 24, unidade: "Meses" },
    { id: "tm_t_g_16", texto: "Numa escala de 0 a 10, o quão dependente me tornei da Airfryer (fritadeira a ar)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_t_g_17", texto: "Quantas pens USB ou discos externos eu tenho espalhados pela casa com fotos que nunca mais vi?", min: 0, max: 20, unidade: "Pens/Discos" },
    { id: "tm_t_g_18", texto: "Qual a probabilidade (0-100%) de eu ter a tampa da webcam do portátil tapada com fita/papel?", min: 0, max: 100, unidade: "%" },
    { id: "tm_t_g_19", texto: "Quantos comandos de televisão/box tenho perdidos ou enfiados no fundo do sofá?", min: 0, max: 5, unidade: "Comandos" },
    { id: "tm_t_g_20", texto: "Até que temperatura (graus) deixo o portátil aquecer no meu colo antes de perceber que me está a queimar?", min: 30, max: 80, unidade: "Graus" }
  ]
};
