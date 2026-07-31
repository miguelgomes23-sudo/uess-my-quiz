import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_trabalho_carreira: Record<string, PerguntaTermometro[]> = {
  "sub_5_0": [ // Vida no Escritório
    { id: "tm_tc_e_01", texto: "Quantos cafés bebo, em média, durante um dia intenso de trabalho?", min: 0, max: 10, unidade: "Cafés" },
    { id: "tm_tc_e_02", texto: "Numa escala de 0 a 100, qual é a minha taxa real de produtividade antes das 10h da manhã?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tc_e_03", texto: "Quantos minutos aguento olhar para o PC antes de pegar no telemóvel para 'pausar'?", min: 1, max: 120, unidade: "Minutos" },
    { id: "tm_tc_e_04", texto: "Quantos dias por semana eu gostava realmente de estar em Teletrabalho?", min: 0, max: 7, unidade: "Dias" },
    { id: "tm_tc_e_05", texto: "Quantos minutos de atraso considero perfeitamente aceitáveis a chegar ao escritório?", min: 0, max: 30, unidade: "Minutos" },
    { id: "tm_tc_e_06", texto: "Numa escala de 0 a 10, qual o meu nível de paciência para reuniões que podiam ser um e-mail?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tc_e_07", texto: "Quantas vezes por dia vou à casa de banho só para fugir do posto de trabalho?", min: 0, max: 15, unidade: "Vezes" },
    { id: "tm_tc_e_08", texto: "Numa escala de 0 a 100%, qual é o meu nível de simpatia para com o(a) meu chefe?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tc_e_09", texto: "Quantos alarmes do telemóvel ponho a adiar (Snooze) antes de me levantar para o trabalho?", min: 0, max: 15, unidade: "Alarmes" },
    { id: "tm_tc_e_10", texto: "Em que percentagem dos dias eu disfarço e saio 5 minutos mais cedo do trabalho?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tc_e_11", texto: "Quantas fofocas/cusquices ouço e participo numa semana normal de trabalho?", min: 0, max: 30, unidade: "Fofocas" },
    { id: "tm_tc_e_12", texto: "Quantos e-mails tenho por ler/fechar agora mesmo na minha caixa de entrada profissional?", min: 0, max: 999, unidade: "E-mails" },
    { id: "tm_tc_e_13", texto: "Numa escala de 0 a 10, quão bom(a) eu sou a fingir que estou ocupado(a) quando não estou?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tc_e_14", texto: "Quantas vezes por mês levo almoço (marmita) de casa em vez de ir comer fora?", min: 0, max: 31, unidade: "Vezes" },
    { id: "tm_tc_e_15", texto: "Qual a percentagem (0-100) do meu ordenado que acho que o Estado não devia roubar nos impostos?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tc_e_16", texto: "Numa escala de 0 a 10, qual a minha vontade de participar em 'Team Buildings' e jantares de empresa?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tc_e_17", texto: "Quantas vezes por dia penso seriamente em atirar o computador pela janela fora?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_tc_e_18", texto: "Em quantos minutos despacho a minha refeição na hora de almoço para poder descansar?", min: 5, max: 60, unidade: "Minutos" },
    { id: "tm_tc_e_19", texto: "Numa escala de 0 a 10, o quão indispensável eu me acho na minha empresa?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tc_e_20", texto: "Quantas horas da minha jornada de trabalho rendem mesmo trabalho sério?", min: 1, max: 12, unidade: "Horas" }
  ],
  "sub_5_1": [ // Carreira e Ambições
    { id: "tm_tc_c_01", texto: "A que idade exata eu gostaria de poder reformar-me para o resto da vida?", min: 30, max: 80, unidade: "Anos" },
    { id: "tm_tc_c_02", texto: "Qual seria o ordenado líquido ideal (em milhares) por mês para eu estar feliz e nunca me queixar?", min: 1, max: 50, unidade: "Mil €" },
    { id: "tm_tc_c_03", texto: "Numa escala de 0 a 10, quão disposto(a) estou a emigrar pelo dobro do ordenado?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tc_c_04", texto: "Quantas vezes na vida já ponderei largar a minha área e abrir um café ou bar na praia?", min: 0, max: 100, unidade: "Vezes" },
    { id: "tm_tc_c_05", texto: "Qual a probabilidade (em %) de eu aceitar ser o CEO/Chefe Máximo do meu local de trabalho?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tc_c_06", texto: "Até que idade eu acredito que estarei a atingir o auge absoluto da minha carreira profissional?", min: 20, max: 70, unidade: "Anos" },
    { id: "tm_tc_c_07", texto: "Numa escala de 0 a 10, o quanto o 'stress' do trabalho me afeta e impede de dormir à noite?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tc_c_08", texto: "Quantas horas seguidas seria capaz de fazer num único turno sem fechar os olhos, pelo valor certo?", min: 8, max: 48, unidade: "Horas" },
    { id: "tm_tc_c_09", texto: "Se pudesse voltar atrás, a que idade acho que teria escolhido um curso ou profissão diferente?", min: 15, max: 40, unidade: "Anos" },
    { id: "tm_tc_c_10", texto: "Qual é a percentagem da minha motivação atual que advém puramente de 'preciso de dinheiro'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tc_c_11", texto: "Numa escala de 0 a 10, qual o meu talento inato para ser o meu próprio patrão (Empreendedorismo)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tc_c_12", texto: "Quantos anos seguidos aguentaria fazer rigorosamente o mesmo trabalho sem promoções nem bónus?", min: 1, max: 40, unidade: "Anos" },
    { id: "tm_tc_c_13", texto: "Qual a percentagem da minha vida pessoal e familiar que eu sacrificaria por uma ascensão meteórica?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tc_c_14", texto: "Quantas entrevistas de emprego já fiz na vida até chegar onde estou hoje?", min: 1, max: 50, unidade: "Entrevistas" },
    { id: "tm_tc_c_15", texto: "Numa escala de 0 a 10, o quão bem eu acho que lido com críticas negativas ao meu trabalho?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tc_c_16", texto: "Quantos dias das minhas férias uso para continuar ligado(a) e a responder a coisas de trabalho?", min: 0, max: 30, unidade: "Dias" },
    { id: "tm_tc_c_17", texto: "Até quantos quilómetros da minha casa aceitaria conduzir todos os dias para um emprego incrível?", min: 5, max: 200, unidade: "km" },
    { id: "tm_tc_c_18", texto: "Numa escala de 0 a 10, quão competitivo(a) eu sou em relação aos meus colegas de profissão?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_tc_c_19", texto: "Qual a probabilidade (0-100%) de eu mentir ou exagerar o meu currículo hoje em dia?", min: 0, max: 100, unidade: "%" },
    { id: "tm_tc_c_20", texto: "Quantos milhões na conta do banco seriam precisos para eu nunca mais fazer um currículo na vida?", min: 1, max: 100, unidade: "Milhões" }
  ]
};
