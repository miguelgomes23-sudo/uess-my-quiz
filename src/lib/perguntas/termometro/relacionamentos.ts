import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_relacionamentos: Record<string, PerguntaTermometro[]> = {
  "sub_2_0": [ // Romance e Casal
    { id: "tm_r_c_01", texto: "Numa escala de 0 a 10, o quão fofo(a) e romântico(a) eu considero ser no dia a dia de um namoro?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_r_c_02", texto: "Quantos encontros (dates) acho que são precisos para assumir que a relação é 'séria'?", min: 1, max: 20, unidade: "Dates" },
    { id: "tm_r_c_03", texto: "Qual a percentagem de vezes em que o meu orgulho cede e sou eu a pedir desculpa primeiro numa briga?", min: 0, max: 100, unidade: "%" },
    { id: "tm_r_c_04", texto: "Quantos meses de relação acho ser o limite máximo aceitável antes de ir conhecer os sogros?", min: 1, max: 12, unidade: "Meses" },
    { id: "tm_r_c_05", texto: "Numa escala de 0 a 10, qual é o meu verdadeiro e sombrio grau de ciúmes quando gosto de alguém?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_r_c_06", texto: "Quantos dias aguento ativamente a amuar sem dirigir a palavra à cara-metade após um choque de feitios?", min: 0, max: 15, unidade: "Dias" },
    { id: "tm_r_c_07", texto: "A que idade considero que atingimos a maturidade ideal para dar o nó e casar (se for o caso)?", min: 20, max: 45, unidade: "Anos" },
    { id: "tm_r_c_08", texto: "Quantas vezes por semana seria o meu número perfeito e ideal para ter momentos de intimidade?", min: 1, max: 15, unidade: "Vezes" },
    { id: "tm_r_c_09", texto: "Numa escala de 0 a 100%, quão possessivo(a) e do estilo 'chiclete/grude' eu gosto de ser a dois?", min: 0, max: 100, unidade: "%" },
    { id: "tm_r_c_10", texto: "Quantos minutos demoro a começar a imaginar cenários se a outra pessoa virar o ecrã do telemóvel para baixo?", min: 1, max: 60, unidade: "Minutos" },
    { id: "tm_r_c_11", texto: "Quantas mensagens mando num dia a perguntar 'O que é que estás a fazer?' só porque estou aborrecido(a)?", min: 0, max: 30, unidade: "Mensagens" },
    { id: "tm_r_c_12", texto: "Qual a probabilidade (0-100%) de eu criar um autêntico drama de novela no meio da rua por um mal-entendido?", min: 0, max: 100, unidade: "%" },
    { id: "tm_r_c_13", texto: "Qual é a diferença máxima de idades (em anos, mais velho ou novo) que eu aceitaria numa relação amorosa?", min: 1, max: 20, unidade: "Anos" },
    { id: "tm_r_c_14", texto: "Numa escala de 0 a 10, o quão bem eu considero ter talento e paciência para lidar com os meus sogros?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_r_c_15", texto: "Quantos filhos, biologicamente ou de coração, sempre imaginei ter ao construir a minha família de sonho?", min: 0, max: 6, unidade: "Filhos" },
    { id: "tm_r_c_16", texto: "Até quantos euros eu perdoaria numa extravagância/luxo que o parceiro comprasse escondido sem me dizer nada?", min: 10, max: 5000, unidade: "Euros" },
    { id: "tm_r_c_17", texto: "Numa escala de 0 a 100%, qual é o meu nível voluntário de partilha e entreajuda nas limpezas lá de casa?", min: 0, max: 100, unidade: "%" },
    { id: "tm_r_c_18", texto: "Quantas horas da noite aguento dormir enrolado(a) em 'conchinha' antes de me fartar e empurrar a pessoa para ter espaço?", min: 0, max: 10, unidade: "Horas" },
    { id: "tm_r_c_19", texto: "Qual a percentagem (0-100%) do dinheiro lá de casa que eu acho que devia pertencer a uma conta junta intocável?", min: 0, max: 100, unidade: "%" },
    { id: "tm_r_c_20", texto: "Para registo histórico, quantos anos e meses completos durou a minha relação amorosa mais longa até ao momento?", min: 0, max: 30, unidade: "Anos" }
  ],
  "sub_2_1": [ // Amizades e Social
    { id: "tm_r_a_01", texto: "Numa escala de 0 a 10, quão super sociável eu sou obrigado a ir a uma festa onde só conheço o aniversariante?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_r_a_02", texto: "Quantos 'melhores amigos' verdadeiros a quem conto a vida toda considero que tenho neste mundo?", min: 0, max: 10, unidade: "Amigos" },
    { id: "tm_r_a_03", texto: "Qual a probabilidade (0-100%) de eu cancelar um café/jantar no próprio dia apenas porque me deu preguiça de sair?", min: 0, max: 100, unidade: "%" },
    { id: "tm_r_a_04", texto: "Quantas horas seguidas sou capaz de estar agarrado(a) ao telefone com um amigo a debater os problemas dele?", min: 1, max: 8, unidade: "Horas" },
    { id: "tm_r_a_05", texto: "Numa escala de 0 a 10, quão brando(a) e rápido(a) sou a perdoar uma falha de um amigo que me desiludiu?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_r_a_06", texto: "Quantas vezes por ano tento planear viagens ou jantares de grupo que nunca acabam por sair da conversa do chat?", min: 1, max: 20, unidade: "Vezes" },
    { id: "tm_r_a_07", texto: "Qual a percentagem (0-100%) da minha paciência quando um amigo me envia áudios de WhatsApp com mais de 3 minutos?", min: 0, max: 100, unidade: "%" },
    { id: "tm_r_a_08", texto: "Quantos euros do meu suado dinheiro estou disposto(a) a emprestar a um grande amigo em apuros sem exigir assinaturas?", min: 10, max: 2000, unidade: "Euros" },
    { id: "tm_r_a_09", texto: "Numa escala de 0 a 10, quão bom 'cofre' eu sou a guardar segredos da 'Máfia' que os meus amigos me confiam?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_r_a_10", texto: "A partir de quantos minutos exatos de atraso a um café combinado eu começo a ficar a ferver de raiva por dentro?", min: 5, max: 60, unidade: "Minutos" },
    { id: "tm_r_a_11", texto: "Quantos amigos meus têm acesso direto ou sabem de cor o padrão/password de desbloqueio do meu telemóvel?", min: 0, max: 5, unidade: "Amigos" },
    { id: "tm_r_a_12", texto: "Qual o meu nível de ansiedade disparada (0-100%) quando vejo 'Foi adicionado(a) a um novo grupo de WhatsApp'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_r_a_13", texto: "Quantas vezes na vida já precisei do ombro dos meus amigos e desatei a chorar à frente deles por um desgosto?", min: 0, max: 30, unidade: "Vezes" },
    { id: "tm_r_a_14", texto: "Numa escala de 0 a 10, o quão mediador e diplomata (tipo ONU) eu sou quando dois amigos do grupo se chateiam?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_r_a_15", texto: "A partir de que hora exata da madrugada é que considero que as conversas no bar começam a ficar super intensas e filosóficas?", min: 0, max: 4, unidade: "Horas da Manhã" },
    { id: "tm_r_a_16", texto: "Quantas fotografias de grupo exigimos repetir até acharmos que há uma 'perfeita' para partilhar no Instagram?", min: 1, max: 30, unidade: "Fotos" },
    { id: "tm_r_a_17", texto: "Qual a percentagem (0-100%) da fatura do jantar de grupo que eu prefiro assumir e pagar logo só para evitar a confusão do MBWay?", min: 0, max: 100, unidade: "%" },
    { id: "tm_r_a_18", texto: "Quantas vezes por mês partilho um vídeo no grupo e digo 'Literalmente nós neste fim de semana'?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_r_a_19", texto: "Numa escala de 0 a 10, quão secretamente ofendido(a) e ciumento(a) eu fico quando a malta do grupo vai jantar fora sem mim?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_r_a_20", texto: "Quantos anos de longevidade tem a amizade mais antiga que consegui preservar desde que me lembro de existir?", min: 1, max: 40, unidade: "Anos" }
  ]
};
