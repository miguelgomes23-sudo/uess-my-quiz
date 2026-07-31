import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_estudos_escola: Record<string, PerguntaTermometro[]> = {
  "sub_29_0": [ // Aulas e Professores
    { id: "tm_ee_a_01", texto: "Quantas faltas injustificadas (as famosas 'baldas') cheguei a acumular num único ano escolar durante a minha juventude?", min: 0, max: 50, unidade: "Faltas" },
    { id: "tm_ee_a_02", texto: "Numa escala de 0 a 100%, qual era a minha atenção real e dedicação a tirar apontamentos perfeitos na primeira fila da sala?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ee_a_03", texto: "Quantas vezes fui mandado(a) sair da sala de aula para a rua pelo professor devido a mau comportamento ou conversa paralela?", min: 0, max: 50, unidade: "Vezes Expulso" },
    { id: "tm_ee_a_04", texto: "Qual a idade e o ano em que chumbei/retive o ano pela primeira (ou única) vez, marcando 0 se passei sempre impune?", min: 0, max: 25, unidade: "Anos de Idade" },
    { id: "tm_ee_a_05", texto: "Numa escala de 0 a 10, o quão bajulador e 'graxista' do professor eu era para me safar a notas que estavam no fio da navalha?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ee_a_06", texto: "Quantos TPC's (Trabalhos de Casa) fingi que o 'cão comeu', 'ficou em cima da mesa' ou copiei do caderno do amigo 5 minutos antes da aula?", min: 0, max: 200, unidade: "TPCs Copiados" },
    { id: "tm_ee_a_07", texto: "Qual a probabilidade (0-100%) de o meu nome ter sido motivo das mais extensas reclamações dadas aos meus pais em reuniões de encarregados de educação?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ee_a_08", texto: "Quantos aviões de papel atirados, bolas de cuspo e bilhetinhos escritos rodaram pelo meu eixo de influência no fundo da sala?", min: 0, max: 1000, unidade: "Objetos Atirados" },
    { id: "tm_ee_a_09", texto: "Numa escala de 0 a 10, quão pavorosa e infernal era a sensação de ouvir a campainha a tocar mas o professor dizer 'Eu é que dou a ordem de saída'?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ee_a_10", texto: "Quantas idas furtivas à casa de banho só para ir dar uma volta pelos corredores da escola e espairecer pedi aos professores?", min: 0, max: 100, unidade: "Idas Falsas ao WC" },
    { id: "tm_ee_a_11", texto: "Qual a percentagem (0-100%) de vezes em que em trabalhos de grupo eu atirava todo o trabalho braçal para o colega que formatava no final?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ee_a_12", texto: "Quantos anos sofri estoicamente e odiei ativamente disciplinas com números absolutos tipo Álgebras ou Físicas difíceis sem entender boi?", min: 0, max: 15, unidade: "Anos de Sofrimento" },
    { id: "tm_ee_a_13", texto: "Numa escala de 0 a 10, quão popular eu me achava nos intervalos grandes na zona do bar ou a comer sandes sentado(a) num pilar de cimento?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ee_a_14", texto: "Quantas desculpas de 'esqueceu-se-me o equipamento em casa' dei nas manhãs geladas de Educação Física porque as cambalhotas me irritavam?", min: 0, max: 50, unidade: "Desculpas Falsas" },
    { id: "tm_ee_a_15", texto: "Qual a probabilidade (0-100%) de eu ter partilhado o lanche do outro e comido os douradinhos que a mãe do colega mandou no seu tupperware?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ee_a_16", texto: "Quantas lendas, mitos e cusquices sobre as vidas privadas e matrimoniais dos professores partilhei com convicção e fervor na reprografia?", min: 0, max: 50, unidade: "Cusquices" },
    { id: "tm_ee_a_17", texto: "Numa escala de 0 a 10, qual o nível de terror cego de ser chamado ao quadro negro para solucionar um exercício cujas matérias estudei há exatos zero minutos?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ee_a_18", texto: "Quantos anos precisei até aceitar e ceder na minha alma que afinal os professores até tinham alguma razão nas coisas chatas que nos ensinavam para a vida?", min: 10, max: 40, unidade: "Anos de Teimosia" },
    { id: "tm_ee_a_19", texto: "Qual a percentagem do peso na mochila nas costas que derivava ativamente de calhamaços de 10 kg de manuais escolares maltratados nas bordas?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ee_a_20", texto: "Quantos toques de telemóvel e politones eu esqueci ativos nas bolsas resultando na apreensão momentânea do aparelho para o gavetão do professor da turma?", min: 0, max: 15, unidade: "Telemóveis Apanhados" }
  ],
  "sub_29_1": [ // Testes e Exames
    { id: "tm_ee_t_01", texto: "Qual a pior percentagem/nota (0-100%) vergonhosa que eu cravei com o sangue da humilhação no papel dum teste final crucial na minha carreira académica?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ee_t_02", texto: "Quantas cábulas criativas em dobras da régua, interior de estojos, mangas e canetas produzi magistralmente na calada da noite do estudo?", min: 0, max: 200, unidade: "Cábulas Feitas" },
    { id: "tm_ee_t_03", texto: "Numa escala de 0 a 10, qual o peso de ansiedade na entrega dos pautados das notas se afixados no vidro opaco nos corredores frios em modo letreiro?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ee_t_04", texto: "Quantas red bulls, cafés pretos duplos e substâncias cafeinadas entornei noites inteiras da véspera na maratona da matéria ignorada de um semestre na faculdade?", min: 0, max: 50, unidade: "Bebidas de Noite" },
    { id: "tm_ee_t_05", texto: "Qual a probabilidade (0-100%) de eu mentir ou omitir notas na mesa de jantar escondendo aos meus progenitores que na verdade aquilo tinha sido o descalabro total?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ee_t_06", texto: "Quantos minutos aguentava a olhar cego para a primeira questão do Exame Nacional onde não batia bota com a perdigota sobre as minhas memórias de revisões?", min: 1, max: 60, unidade: "Minutos de Pânico" },
    { id: "tm_ee_t_07", texto: "Numa escala de 0 a 10, o quão 'enche chouriços' eu era nas perguntas de resposta aberta debitando palha, léxicos vastos e adjetivos floridos que nada diziam de foco?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ee_t_08", texto: "Quantas cruzes a 'olho', escolhas C múltiplas ao calhas e métodos da canção 'Pim-pam-pum' atirei em tabelas cegas na salvação à rasquinha do meu currículo letivo?", min: 0, max: 500, unidade: "Cruzes ao Calhas" },
    { id: "tm_ee_t_09", texto: "Qual a percentagem (0-100%) em que o meu marcador/sublinhador amarelo e laranja manchava a página inteira dos resumos de tal maneira que a técnica de destaque resultava nula?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ee_t_10", texto: "Quantas borrachas assassinas rasgaram o meu papel do teste criando uma mancha negra pavorosa num texto a caneta no pânico de reescrever no minuto final do soar do toque?", min: 0, max: 50, unidade: "Borrachas da Morte" },
    { id: "tm_ee_t_11", texto: "Numa escala de 0 a 10, quão letal e criminoso era o ódio perante aquele cromo que dizia no corredor de peito inchado 'correu-me tudo mal!' e depois espelhava o belo 19 ou a nota topo?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ee_t_12", texto: "Quantas calculadoras da turma ou material emprestado como corretor ou fita esgotada pedi na hora de aperto da prova de 90 minutos?", min: 0, max: 100, unidade: "Empréstimos" },
    { id: "tm_ee_t_13", texto: "Qual a probabilidade (0-100%) de adormecer ativamente ou choramingar de tédio sobre o pesado calhamaço que tentava rever e forçar no cérebro por osmose e magia de encosto?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ee_t_14", texto: "Quantos testes afirmo, juro e aposto a saúde que o professor tinha tirado cotações ao calhas apenas por ter lido ou somado as minhas alíneas em erro claro de matemática dele?", min: 0, max: 20, unidade: "Erros do Professor" },
    { id: "tm_ee_t_15", texto: "Numa escala de 0 a 10, quão trágico e gaguejante ficavam as minhas respostas nas pavorosas avaliações e temidas arguições orais cara a cara com tribunais de professores em sala surda?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_ee_t_16", texto: "A que percentagem baseava o meu êxito de sorte em superstições no próprio dia, como o amuleto da caneta talismã e vestir meias rasgadas de exames do passado favoráveis a dar boa pinga?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ee_t_17", texto: "Quantas páginas rascunho amachucadas em nervos entupi para os cantos suados da carteira durante exatas duas horas de matemática sem nunca usar nas linhas corretas?", min: 0, max: 100, unidade: "Folhas de Rascunho" },
    { id: "tm_ee_t_18", texto: "Numa escala de 0 a 100%, quão frequente os conselhos irreais 'estuda todos os dias 1h que não custa' falharam e me ditaram o embate no estudo só da última jornada em depressão?", min: 0, max: 100, unidade: "%" },
    { id: "tm_ee_t_19", texto: "Quantos murmúrios suados ou sussurros de SOS e acenos furtivos remeti ativamente pelas orelhas no colega do lado nas mesas acopladas na fita para saber se a 4.a era a resposta 'D'?", min: 0, max: 500, unidade: "Sussurros" },
    { id: "tm_ee_t_20", texto: "No veredicto, a que idade abençoada fechei o último caderno escolar de testes letivos pesados ou jurei fechar as cortinas com a frase fúnebre 'Nunca mais na vida volto a estudar matérias fechadas numa sala destas!'?", min: 18, max: 40, unidade: "Anos de Idade" }
  ]
};
