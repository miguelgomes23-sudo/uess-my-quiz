import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_dilemas_cenarios: Record<string, PerguntaTermometro[]> = {
  "sub_14_0": [ // Decisões Difíceis
    { id: "tm_dc_d_01", texto: "Quantos milhões de euros seriam necessários para eu aceitar cortar o meu dedo mindinho com um alicate?", min: 1, max: 100, unidade: "Milhões" },
    { id: "tm_dc_d_02", texto: "Numa escala de 0 a 100%, qual a probabilidade de eu sobreviver sozinho(a) e com recursos no meio da Amazónia?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_d_03", texto: "Quantos anos de vida seria eu capaz de abdicar hoje em troca de nunca mais ter de me preocupar com dinheiro?", min: 0, max: 30, unidade: "Anos" },
    { id: "tm_dc_d_04", texto: "Se a internet e a tecnologia acabassem de vez, quantos dias eu sobreviveria antes de dar em maluco?", min: 1, max: 100, unidade: "Dias" },
    { id: "tm_dc_d_05", texto: "Numa escala de 0 a 10, quão bem o meu lado moral aceitaria o cargo de 'Ditador Mundial' se me fosse oferecido?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_d_06", texto: "Quantas pessoas eu teria de sacrificar ativamente na linha de um comboio se fosse a única forma de salvar a minha família?", min: 0, max: 100, unidade: "Pessoas" },
    { id: "tm_dc_d_07", texto: "Qual a percentagem (0-100%) da minha vida e privacidade que eu trocaria por ser a celebridade mais famosa do planeta?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_d_08", texto: "Quantos meses de isolamento absoluto aceitaria viver numa cabana (só com comida) em troca de um prémio chorudo?", min: 1, max: 60, unidade: "Meses" },
    { id: "tm_dc_d_09", texto: "Numa escala de 0 a 10, quão propenso(a) eu seria a roubar pão para comer se a fome fosse o limite extremo?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_d_10", texto: "Até que ano do passado ou do futuro eu escolheria viajar (numa máquina do tempo) se só tivesse bilhete de ida?", min: 1000, max: 3000, unidade: "Ano D.C." },
    { id: "tm_dc_d_11", texto: "Quantos quilómetros a pé estava disposto(a) a caminhar no meio do deserto para encontrar água para os meus?", min: 10, max: 500, unidade: "km" },
    { id: "tm_dc_d_12", texto: "Qual a probabilidade (0-100%) de eu trair um colega e mentir para garantir um aumento salarial do triplo na empresa?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_d_13", texto: "Numa escala de 0 a 10, o quão rápido o meu lado pacifista cederia se eu tivesse de liderar um exército num cerco bélico?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_d_14", texto: "Quantos dias aguentaria num bunker nuclear de 10 metros quadrados a comer comida enlatada militar?", min: 1, max: 365, unidade: "Dias" },
    { id: "tm_dc_d_15", texto: "Qual a percentagem (0-100%) da minha confiança que daria a uma IA (Inteligência Artificial) se ela tomasse as decisões mundiais?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_d_16", texto: "Numa escala de 0 a 10, quão fácil seria para mim adotar outra identidade e recomeçar a vida do zero noutro país sem ninguém?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_d_17", texto: "Quantas horas seguidas seria capaz de mentir no tribunal debaixo de fogo cruzado sem me descair numa única palavra?", min: 1, max: 24, unidade: "Horas" },
    { id: "tm_dc_d_18", texto: "Qual a probabilidade (0-100%) de eu escolher nunca mais poder ouvir música na vida em vez de ficar permanentemente cego?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_d_19", texto: "A que percentagem eu aceitaria vender a minha alma ao diabo apenas para garantir sucesso absoluto na minha carreira e vida?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_d_20", texto: "Quantas amizades antigas eu seria capaz de deitar ao lixo por um segredo negro que não pudesse mesmo partilhar com eles?", min: 1, max: 20, unidade: "Amigos" }
  ],
  "sub_14_1": [ // Situações Absurdas
    { id: "tm_dc_s_01", texto: "Numa escala de 0 a 10, qual o meu nível atual de crença na existência de civilizações extraterrestres que nos visitam?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_s_02", texto: "Quantos milhões de euros pedia para entrar num reality show e ser transmitido para o país 24h por dia na sanita?", min: 1, max: 100, unidade: "Milhões" },
    { id: "tm_dc_s_03", texto: "Qual a probabilidade (0-100%) de eu gritar a plenos pulmões se vir um vulto num corredor escuro da minha própria casa?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_s_04", texto: "Quantos cêntimos ou euros eu precisaria de encontrar na rua diariamente para abandonar o meu emprego atual?", min: 10, max: 500, unidade: "Euros diários" },
    { id: "tm_dc_s_05", texto: "Numa escala de 0 a 100%, o quão estragada ficava a minha sanidade mental se descobrisse que a Terra era plana?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_s_06", texto: "Se a minha vida fosse um musical da Disney, a que número/ano atingia a fase mais deprimente e das músicas lentas?", min: 10, max: 60, unidade: "Anos" },
    { id: "tm_dc_s_07", texto: "Qual a probabilidade (0-100%) de eu conseguir convencer a polícia de que um saco de droga suspeito no porta-bagagens 'não era meu'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_s_08", texto: "Quantas semanas achava piada e não pirava o cabeção se ganhasse o superpoder de ler a mente de quem me passa na rua?", min: 1, max: 52, unidade: "Semanas" },
    { id: "tm_dc_s_09", texto: "Numa escala de 0 a 10, quão bem o meu estômago lidaria com a missão obrigatória de comer um sapo vivo cru?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_s_10", texto: "Quantos degraus eu desceria a rebolar num lance de escadas gigante, com muita gente a ver, se isso me valesse um bom prémio?", min: 5, max: 100, unidade: "Degraus" },
    { id: "tm_dc_s_11", texto: "Qual a probabilidade (0-100%) de eu dar uso ao botão do pânico 'nuclear' vermelho se eu fosse o Presidente que o tivesse à frente?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_s_12", texto: "Quantas horas aguentava fechado(a) num caixão confortável e com oxigénio debaixo da terra, só a título de 'experiência macabra'?", min: 1, max: 48, unidade: "Horas" },
    { id: "tm_dc_s_13", texto: "Numa escala de 0 a 10, quão épica e teatral seria a minha reação a descobrir que a minha avó é a chefe da máfia russa secreta?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_s_14", texto: "Quantos anos eu aguentaria num casamento de conveniência que desse muito dinheiro e conforto, mas amor absolutamente nulo?", min: 1, max: 50, unidade: "Anos" },
    { id: "tm_dc_s_15", texto: "Qual a percentagem (0-100%) de certeza que tenho em que 'Os governos mundiais já conhecem a cura para o cancro, mas escondem-na'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_s_16", texto: "Numa escala de 0 a 10, quão hilariante e pouco produtivo eu serei num dia do Apocalipse se disserem que temos 24h?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_s_17", texto: "Quantas chamadas telefónicas (por causa de scams e indianos) atendo num dia antes de os mandar para aquele sítio e rir?", min: 1, max: 20, unidade: "Chamadas" },
    { id: "tm_dc_s_18", texto: "Qual a probabilidade (0-100%) de me apanharem num vídeo a correr nu(a) pela rua depois de eu perder uma aposta com o pessoal?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_s_19", texto: "Quantas chapadas nas trombas, com força total, precisava de levar até o meu cérebro concordar em participar no Jogos da Fome?", min: 1, max: 100, unidade: "Chapadas" },
    { id: "tm_dc_s_20", texto: "A que percentagem os teus amigos apostariam na minha sobrevivência num jogo de esconde-esconde (escondidas) contra o FBI numa cidade inteira?", min: 0, max: 100, unidade: "%" }
  ]
};
