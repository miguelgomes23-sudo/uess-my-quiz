import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_vida_pessoal: Record<string, PerguntaTermometro[]> = {
  "sub_0_0": [ // Rotinas
    { id: "tm_vp_r_01", texto: "Numa escala de 0 a 10, quão mal-humorado(a) eu acordo de manhã?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vp_r_02", texto: "Quantos alarmes preciso de meter no telemóvel para me conseguir levantar?", min: 1, max: 15, unidade: "Alarmes" },
    { id: "tm_vp_r_03", texto: "Quantos minutos demoro, em média, a tomar o meu banho?", min: 5, max: 60, unidade: "Minutos" },
    { id: "tm_vp_r_04", texto: "Qual é a percentagem do dia em que estou ativamente a procrastinar?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vp_r_05", texto: "Quantas horas de sono por noite preciso para ser um humano funcional?", min: 4, max: 12, unidade: "Horas" },
    { id: "tm_vp_r_06", texto: "Quantas vezes olho para o telemóvel na primeira hora depois de acordar?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_vp_r_07", texto: "Quantos minutos de atraso costumo ter quando combino algo com amigos?", min: 0, max: 60, unidade: "Minutos" },
    { id: "tm_vp_r_08", texto: "A que horas exatas da noite considero que já é 'tarde demais' para sair de casa?", min: 20, max: 24, unidade: "Horas" },
    { id: "tm_vp_r_09", texto: "Numa escala de 0 a 100, quão focado(a) sou a arrumar o meu quarto/casa?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vp_r_10", texto: "Quantos dias da semana eu consigo deitar-me antes da meia-noite?", min: 0, max: 7, unidade: "Dias" },
    { id: "tm_vp_r_11", texto: "Quantas séries costumo ter a decorrer (a ver) em simultâneo?", min: 1, max: 10, unidade: "Séries" },
    { id: "tm_vp_r_12", texto: "Qual o número máximo de dias que aguento estar sem lavar o cabelo?", min: 1, max: 7, unidade: "Dias" },
    { id: "tm_vp_r_13", texto: "Quantos minutos passo ativamente sentado(a) na sanita a fazer scroll no telemóvel?", min: 5, max: 45, unidade: "Minutos" },
    { id: "tm_vp_r_14", texto: "Numa escala de 0 a 10, o quão rápido eu respondo a mensagens no WhatsApp?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vp_r_15", texto: "Quantos episódios de uma série sou capaz de ver de enfiada num domingo?", min: 1, max: 15, unidade: "Episódios" },
    { id: "tm_vp_r_16", texto: "Quantas horas por semana perco no TikTok ou no Instagram Reels?", min: 1, max: 30, unidade: "Horas" },
    { id: "tm_vp_r_17", texto: "A partir de que hora da tarde a minha bateria social morre completamente?", min: 15, max: 23, unidade: "Horas" },
    { id: "tm_vp_r_18", texto: "Quantas abas do browser (Chrome/Safari) costumo ter abertas ao mesmo tempo?", min: 1, max: 100, unidade: "Abas" },
    { id: "tm_vp_r_19", texto: "Numa escala de 0 a 100%, qual é a minha tolerância a planos cancelados à última hora?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vp_r_20", texto: "Quantas vezes por dia eu suspiro fundo e penso 'que cansaço'?", min: 1, max: 50, unidade: "Vezes" }
  ],
  "sub_0_1": [ // Manias e Hábitos
    { id: "tm_vp_m_01", texto: "Numa escala de 0 a 10, o quão hipocondríaco(a) eu sou perante uma dor de cabeça?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vp_m_02", texto: "Quantos tiques nervosos (ex: mexer o pé, roer unhas) as pessoas reparam em mim?", min: 0, max: 10, unidade: "Tiques" },
    { id: "tm_vp_m_03", texto: "Qual a percentagem da minha roupa que é estritamente preta ou cinzenta?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vp_m_04", texto: "Quantas vezes por dia verifico se tranquei a porta ou fechei o carro?", min: 0, max: 10, unidade: "Vezes" },
    { id: "tm_vp_m_05", texto: "Numa escala de 0 a 10, o quão picuinhas eu sou a dividir a conta num restaurante?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vp_m_06", texto: "Quantas vezes altero a posição da almofada antes de adormecer?", min: 1, max: 20, unidade: "Vezes" },
    { id: "tm_vp_m_07", texto: "Qual a probabilidade (0-100%) de eu guardar caixas de cartão 'porque podem ser precisas'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vp_m_08", texto: "Quantas meias sem par tenho neste exato momento na gaveta?", min: 0, max: 30, unidade: "Meias" },
    { id: "tm_vp_m_09", texto: "Numa escala de 0 a 10, o quão perfeccionista sou a estender a roupa?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vp_m_10", texto: "Quantos dias da semana eu falo sozinho(a) a fazer tarefas domésticas?", min: 0, max: 7, unidade: "Dias" },
    { id: "tm_vp_m_11", texto: "Até quantos euros eu hesito antes de comprar uma coisa que quero muito?", min: 10, max: 500, unidade: "Euros" },
    { id: "tm_vp_m_12", texto: "Numa escala de 0 a 100%, o quão supersticioso(a) eu sou no dia a dia?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vp_m_13", texto: "Quantas vezes por dia reclamo em voz alta do calor/frio consoante a época?", min: 0, max: 30, unidade: "Vezes" },
    { id: "tm_vp_m_14", texto: "Qual é o nível máximo do volume da TV (número) que a minha mente tolera?", min: 10, max: 100, unidade: "Volume" },
    { id: "tm_vp_m_15", texto: "Quantas passwords diferentes utilizo rodando entre todas as minhas contas?", min: 1, max: 15, unidade: "Passwords" },
    { id: "tm_vp_m_16", texto: "Numa escala de 0 a 10, quão viciado(a) sou em pesquisar sintomas no Google?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_vp_m_17", texto: "Quantas vezes dou por mim a julgar mentalmente o outfit de desconhecidos na rua?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_vp_m_18", texto: "Quantos banhos de água quente tomo por semana só para 'pensar na vida'?", min: 0, max: 7, unidade: "Banhos" },
    { id: "tm_vp_m_19", texto: "Qual o meu nível de stress (0-100%) quando a bateria do telemóvel chega aos 10%?", min: 0, max: 100, unidade: "%" },
    { id: "tm_vp_m_20", texto: "Quantos dias aguento usar a mesma calça de ganga antes de a meter a lavar?", min: 1, max: 14, unidade: "Dias" }
  ]
};
