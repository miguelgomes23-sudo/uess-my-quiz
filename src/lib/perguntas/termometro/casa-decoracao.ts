import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_casa_decoracao: Record<string, PerguntaTermometro[]> = {
  "sub_11_0": [ // Tarefas Domésticas
    { id: "tm_cd_t_01", texto: "Quantos dias seguidos a roupa é capaz de ganhar raízes no estendal antes de eu a apanhar?", min: 1, max: 20, unidade: "Dias" },
    { id: "tm_cd_t_02", texto: "Numa escala de 0 a 100%, qual é o meu nível de ódio profundo por ter de passar a ferro?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cd_t_03", texto: "Quantos minutos dedico por semana a limpar e desinfetar a casa de banho a fundo?", min: 0, max: 120, unidade: "Minutos" },
    { id: "tm_cd_t_04", texto: "Qual o número máximo de dias que a loiça aguenta suja no lava-loiça antes de ceder à pressão?", min: 0, max: 7, unidade: "Dias" },
    { id: "tm_cd_t_05", texto: "Numa escala de 0 a 10, quão chato(a) eu sou com a regra do 'Ninguém entra de sapatos da rua'?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cd_t_06", texto: "Quantas tarefas da casa tento empurrar para o meu parceiro(a)/família semanalmente?", min: 0, max: 20, unidade: "Tarefas" },
    { id: "tm_cd_t_07", texto: "A que percentagem (0-100%) da minha energia eu recorro ao aspirador robô em vez de varrer/aspirar à mão?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cd_t_08", texto: "Quantos sacos do lixo deixo acumular à porta antes de finalmente os levar à rua?", min: 1, max: 5, unidade: "Sacos" },
    { id: "tm_cd_t_09", texto: "Numa escala de 0 a 10, quão bom(a) eu sou a fazer pequenos arranjos (ex: mudar lâmpadas, usar fita-cola)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cd_t_10", texto: "Quantos meses ignoro as manchas nos vidros/janelas até decidir que não vejo a rua?", min: 1, max: 12, unidade: "Meses" },
    { id: "tm_cd_t_11", texto: "Qual a probabilidade (0-100%) de eu atirar tralha toda para dentro do armário a 5 min das visitas chegarem?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cd_t_12", texto: "Quantas gavetas 'da tralha' (aquelas onde se enfia cabos, pilhas, elásticos) existem na minha casa?", min: 1, max: 10, unidade: "Gavetas" },
    { id: "tm_cd_t_13", texto: "Numa escala de 0 a 10, o quão focado(a) eu fico em limpezas no domingo de manhã a ouvir música aos berros?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cd_t_14", texto: "Quantos eletrodomésticos da casa fazem barulhos suspeitos que eu ativamente finjo não ouvir?", min: 0, max: 5, unidade: "Aparelhos" },
    { id: "tm_cd_t_15", texto: "A percentagem da minha separação do lixo (reciclagem) que cumpro com todo o rigor?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cd_t_16", texto: "Quantas t-shirts dobradas pelo 'Método Marie Kondo' aguentam na gaveta antes de eu destruir a pilha?", min: 1, max: 30, unidade: "Dias" },
    { id: "tm_cd_t_17", texto: "Numa escala de 0 a 10, qual o nível de histeria quando vejo uma aranha/bicho no teto do quarto?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cd_t_18", texto: "Quantas horas aguento viver num caos de desarrumação antes de a minha cabeça bloquear totalmente?", min: 1, max: 72, unidade: "Horas" },
    { id: "tm_cd_t_19", texto: "Qual a percentagem (0-100%) de vezes em que mudo os lençóis de cama exatamente de semana a semana?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cd_t_20", texto: "Quantas vezes por ano tento descongelar ou limpar o frigorífico a fundo?", min: 0, max: 12, unidade: "Vezes" }
  ],
  "sub_11_1": [ // Estilo e Conforto
    { id: "tm_cd_e_01", texto: "Quantos euros (em centenas) já deixei em viagens compulsivas no IKEA num só ano?", min: 0, max: 20, unidade: "Centenas (€)" },
    { id: "tm_cd_e_02", texto: "Numa escala de 0 a 100%, qual é o meu nível de fanatismo por velas aromáticas ou ambientadores?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cd_e_03", texto: "Quantas almofadas no total existem espalhadas só em cima da minha cama?", min: 1, max: 15, unidade: "Almofadas" },
    { id: "tm_cd_e_04", texto: "Qual é o número exato de plantas vivas em minha casa que eu deixei morrer (secar) este ano?", min: 0, max: 30, unidade: "Plantas" },
    { id: "tm_cd_e_05", texto: "Numa escala de 0 a 10, o quão rigoroso(a) sou com o 'Estilo Minimalista' (sem tralha à vista)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cd_e_06", texto: "Quantos quadros ou molduras comprei e continuam encostados à parede sem nunca fazer o furo para os pendurar?", min: 0, max: 20, unidade: "Quadros" },
    { id: "tm_cd_e_07", texto: "Qual a percentagem (0-100%) do mobiliário de minha casa que foi montado e aparafusado por mim mesmo(a)?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cd_e_08", texto: "Quantas mantas super fofas e felpudas existem estrategicamente colocadas no meu sofá?", min: 0, max: 10, unidade: "Mantas" },
    { id: "tm_cd_e_09", texto: "Numa escala de 0 a 10, quão importado(a) eu sou com as tendências da Zara Home ou Gato Preto?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cd_e_10", texto: "A que nível de iluminação (0-100%) prefiro ter a casa à noite (0 = escuro/leds / 100 = hospital branco)?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cd_e_11", texto: "Quantas horas passo, num domingo perfeito, sem arredar pé do sofá a maratonar algo?", min: 1, max: 16, unidade: "Horas" },
    { id: "tm_cd_e_12", texto: "Qual a probabilidade (0-100%) de eu ter decorações pirosas com palavras (ex: 'Love', 'Family') nas paredes?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cd_e_13", texto: "Quantas horas aguento o barulho de obras de vizinhos no prédio antes de bater com a vassoura no teto?", min: 0, max: 12, unidade: "Horas" },
    { id: "tm_cd_e_14", texto: "Numa escala de 0 a 10, quão picuinhas sou com os vizinhos que fazem festas à noite?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cd_e_15", texto: "Quantas caixas de organização/arrumação (caixas de plástico/cestos) terei na minha casa inteira?", min: 1, max: 50, unidade: "Caixas" },
    { id: "tm_cd_e_16", texto: "Qual o valor limite (em euros) que daria de boa vontade por um sofá que fosse espetacularmente confortável?", min: 200, max: 5000, unidade: "Euros" },
    { id: "tm_cd_e_17", texto: "Quantas 'velharias' móveis de herança (da avó) me recuso a deitar fora por pena sentimental?", min: 0, max: 15, unidade: "Peças" },
    { id: "tm_cd_e_18", texto: "Numa escala de 0 a 100%, qual é a minha taxa de excitação e loucura por decorações e luzes de Natal?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cd_e_19", texto: "Quantos espaços 'cantinho do café' (ou chá/bar) organizados tenho montados na cozinha/sala?", min: 0, max: 3, unidade: "Zonas" },
    { id: "tm_cd_e_20", texto: "Quantos anos acho que vou demorar a terminar as remodelações teóricas que tenho na cabeça?", min: 1, max: 20, unidade: "Anos" }
  ]
};
