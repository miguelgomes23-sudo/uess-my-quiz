import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_dinheiro_compras: Record<string, PerguntaTermometro[]> = {
  "sub_10_0": [ // Hábitos de Consumo
    { id: "tm_dc_c_01", texto: "Qual foi o valor máximo (em euros) de uma compra completamente impulsiva que fiz num dia mau?", min: 10, max: 2000, unidade: "Euros" },
    { id: "tm_dc_c_02", texto: "Numa escala de 0 a 100%, qual é a minha capacidade de resistir a letreiros de 'Promoção / Saldos'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_c_03", texto: "Quantas encomendas da Shein/Temu/AliExpress (coisas baratas e inúteis) faço por ano?", min: 0, max: 50, unidade: "Encomendas" },
    { id: "tm_dc_c_04", texto: "Qual o valor médio mensal que torro impiedosamente em Uber Eats ou comida encomendada?", min: 0, max: 400, unidade: "Euros" },
    { id: "tm_dc_c_05", texto: "Quantos pares de sapatos/ténis tenho no armário e não calço há mais de 1 ano?", min: 0, max: 30, unidade: "Pares" },
    { id: "tm_dc_c_06", texto: "Numa escala de 0 a 10, o quão 'forreta' ou 'mão de vaca' sou com coisas para mim mesmo?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_c_07", texto: "Quantas peças de roupa comprei que ainda têm lá a etiqueta pendurada?", min: 0, max: 20, unidade: "Peças" },
    { id: "tm_dc_c_08", texto: "Qual a percentagem (0-100%) de vezes em que vou ao shopping 'só ver montras' e saio com sacos?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_c_09", texto: "Quantas subscrições (ginásio, apps, streaming) pago sem usar absolutamente nada?", min: 0, max: 10, unidade: "Subscrições" },
    { id: "tm_dc_c_10", texto: "Até que valor (em euros) considero um café ou lanche 'um roubo' e recuso-me a pagar?", min: 1, max: 20, unidade: "Euros" },
    { id: "tm_dc_c_11", texto: "Numa escala de 0 a 10, quão influenciado(a) sou por publicidades que vejo no Instagram?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_c_12", texto: "Quantos produtos tenho guardados nos carrinhos virtuais (ex: Amazon) que nunca chego a pagar?", min: 0, max: 100, unidade: "Produtos" },
    { id: "tm_dc_c_13", texto: "A partir de quantos cêntimos me recuso a comprar um saco de plástico no supermercado e levo a comida na mão?", min: 5, max: 50, unidade: "Cêntimos" },
    { id: "tm_dc_c_14", texto: "Quantas vezes por mês o meu cartão MBWay dá erro por 'falta de saldo' momentânea?", min: 0, max: 15, unidade: "Vezes" },
    { id: "tm_dc_c_15", texto: "Qual a percentagem de compras que faço em lojas em 2ª mão (ex: Vinted, OLX)?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_c_16", texto: "Numa escala de 0 a 10, quão perigoso é deixar-me sozinho(a) num corredor de chocolates no supermercado?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_c_17", texto: "Quantos euros a mais estou disposto a pagar pela comodidade (ex: apanhar Uber em vez de metro)?", min: 2, max: 50, unidade: "Euros" },
    { id: "tm_dc_c_18", texto: "Quantas vezes dou por mim a julgar mentalmente o preço de coisas em lojas mais caras?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_dc_c_19", texto: "Qual o valor (em euros) da prenda mais cara que já ofereci a alguém no Natal ou Anos?", min: 10, max: 1500, unidade: "Euros" },
    { id: "tm_dc_c_20", texto: "Numa escala de 0 a 100%, qual é o meu grau de arrependimento (peso na consciência) após esbanjar dinheiro?", min: 0, max: 100, unidade: "%" }
  ],
  "sub_10_1": [ // Poupança e Finanças
    { id: "tm_dc_p_01", texto: "Qual a percentagem (0-100%) exata do meu ordenado mensal que eu consigo efetivamente poupar?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_p_02", texto: "A quantos dias do final do mês é que a minha conta bancária começa a dar sinais críticos de alerta?", min: 1, max: 15, unidade: "Dias do fim do mês" },
    { id: "tm_dc_p_03", texto: "Numa escala de 0 a 10, quão organizado(a) eu sou com orçamentos e grelhas de Excel de despesas?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_p_04", texto: "Quantas moedas de 'trocos vermelhos' (cêntimos) andam espalhadas pelo meu carro/gavetas?", min: 0, max: 200, unidade: "Moedas" },
    { id: "tm_dc_p_05", texto: "Até quantos euros no máximo aceitaria emprestar a um bom amigo, sabendo que podia nunca os rever?", min: 10, max: 5000, unidade: "Euros" },
    { id: "tm_dc_p_06", texto: "Numa escala de 0 a 100%, o quão assustado(a) eu vivo com a inflação e a economia futura?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_p_07", texto: "Quantas vezes por ano espreito a aplicação do banco a tapar o ecrã com medo de ver o saldo?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_dc_p_08", texto: "Qual a percentagem das minhas poupanças que está investida (ex: Ações, Certificados) em vez de estar à ordem?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_p_09", texto: "Quantos meses de ordenado conseguiria sobreviver se hoje mesmo ficasse sem fonte de rendimento (fundo emergência)?", min: 0, max: 36, unidade: "Meses" },
    { id: "tm_dc_p_10", texto: "Numa escala de 0 a 10, quão chato(a) sou com apagar as luzes da casa para poupar eletricidade?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_p_11", texto: "A que idade me apercebi de quanto custava realmente ir ao supermercado encher o frigorífico?", min: 16, max: 35, unidade: "Anos" },
    { id: "tm_dc_p_12", texto: "Quantos euros considero ser um valor justo e aceitável para dar numa prenda de casamento de amigos?", min: 20, max: 300, unidade: "Euros" },
    { id: "tm_dc_p_13", texto: "Qual a probabilidade (0-100%) de eu dizer 'Eu não ligo a dinheiro, dinheiro não traz felicidade'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_p_14", texto: "Quantos anos acho que vou demorar (ou demorei) a conseguir dar entrada para uma casa própria?", min: 1, max: 40, unidade: "Anos" },
    { id: "tm_dc_p_15", texto: "Numa escala de 0 a 10, qual o meu nível de irritação ao pagar impostos/IUC/IRS?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_dc_p_16", texto: "Até que valor extra estaria disposto a pagar no supermercado pelas marcas originais em vez das linhas brancas?", min: 0, max: 50, unidade: "Euros" },
    { id: "tm_dc_p_17", texto: "Quantas vezes prometi que ia deixar de beber pequenos cafés e lanches na rua para poupar dinheiro e falhei?", min: 0, max: 100, unidade: "Vezes" },
    { id: "tm_dc_p_18", texto: "Numa escala de 0 a 100%, quão focado(a) estou em alcançar a tal independência financeira (FIRE)?", min: 0, max: 100, unidade: "%" },
    { id: "tm_dc_p_19", texto: "Quantas vezes por ano tento regatear um preço (ex: 'faz uma atenção sem fatura?') em garagens/oficinas?", min: 0, max: 10, unidade: "Vezes" },
    { id: "tm_dc_p_20", texto: "Se ganhasse 1 Milhão amanhã, qual a percentagem que eu gastaria em loucuras no primeiro mês?", min: 0, max: 100, unidade: "%" }
  ]
};
