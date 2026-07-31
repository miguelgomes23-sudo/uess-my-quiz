import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_moda_estilo: Record<string, PerguntaTermometro[]> = {
  "sub_15_0": [ // Estilo Pessoal
    { id: "tm_me_e_01", texto: "Quantos minutos passo de manhã a olhar para o armário a dizer 'não tenho nada para vestir'?", min: 1, max: 60, unidade: "Minutos" },
    { id: "tm_me_e_02", texto: "Qual a percentagem (0-100%) do meu guarda-roupa que é composto por cores neutras (preto, branco, cinza)?", min: 0, max: 100, unidade: "%" },
    { id: "tm_me_e_03", texto: "Numa escala de 0 a 10, o quão dependente sou de calças de fato de treino mal chego a casa?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_me_e_04", texto: "Quantos pares de sapatos ou ténis eu efetivamente uso no meu dia a dia (rodízio)?", min: 1, max: 15, unidade: "Pares" },
    { id: "tm_me_e_05", texto: "Qual a probabilidade (0-100%) de eu sair de casa de pijama para ir apenas ao café ou deitar o lixo?", min: 0, max: 100, unidade: "%" },
    { id: "tm_me_e_06", texto: "Numa escala de 0 a 10, quão importante é para mim estar sempre 'combinado(a)' dos pés à cabeça?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_me_e_07", texto: "Quantas peças de roupa idênticas (mesmo modelo, cores diferentes) chego a comprar se gostar muito delas?", min: 1, max: 10, unidade: "Peças" },
    { id: "tm_me_e_08", texto: "Qual a percentagem da minha roupa que tem padrões super extravagantes ou flores gigantes?", min: 0, max: 100, unidade: "%" },
    { id: "tm_me_e_09", texto: "Quantos acessórios (anéis, colares, relógios, pulseiras) costumo usar de uma só vez?", min: 0, max: 20, unidade: "Acessórios" },
    { id: "tm_me_e_10", texto: "Numa escala de 0 a 10, quão desconfortável estou disposto(a) a ficar só para usar um outfit incrível?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_me_e_11", texto: "Quantas vezes por mês dou por mim a julgar mentalmente as escolhas de moda de alguém na rua?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_me_e_12", texto: "Qual é o número máximo de anos que consigo guardar uma t-shirt velha e esburacada porque 'é de estimação'?", min: 1, max: 25, unidade: "Anos" },
    { id: "tm_me_e_13", texto: "Numa escala de 0 a 100%, qual a minha aversão a usar camisas ou roupa que tenha de ser engomada?", min: 0, max: 100, unidade: "%" },
    { id: "tm_me_e_14", texto: "Quantos centímetros de altura considero ser o limite máximo para um salto alto que eu consiga aguentar (ou que aceite na parceira)?", min: 0, max: 18, unidade: "Centímetros" },
    { id: "tm_me_e_15", texto: "Qual a percentagem do meu armário que está dedicada exclusivamente a roupa de ginásio/desporto?", min: 0, max: 100, unidade: "%" },
    { id: "tm_me_e_16", texto: "Quantas meias perfeitamente fofas ou com bonecos estúpidos escondo por baixo dos sapatos de trabalho?", min: 0, max: 30, unidade: "Pares" },
    { id: "tm_me_e_17", texto: "Numa escala de 0 a 10, o quão obcecado(a) sou em manter os meus ténis brancos perfeitamente imaculados?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_me_e_18", texto: "Qual é a probabilidade (0-100%) de eu trocar 3 vezes de roupa antes de finalmente sair de casa?", min: 0, max: 100, unidade: "%" },
    { id: "tm_me_e_19", texto: "Quantas vezes por semana passo frio ou calor só porque confiei num casaco (ou falta dele) errado?", min: 0, max: 7, unidade: "Vezes" },
    { id: "tm_me_e_20", texto: "Numa escala de 0 a 10, o quanto me irritam os logótipos gigantes de marcas estampados no peito das camisolas?", min: 0, max: 10, unidade: "Escala" }
  ],
  "sub_15_1": [ // Compras de Roupa
    { id: "tm_me_c_01", texto: "Qual o valor máximo (em euros) que eu aceitaria pagar, sem peso na consciência, por um bom casaco de inverno?", min: 30, max: 500, unidade: "Euros" },
    { id: "tm_me_c_02", texto: "Quantas peças de roupa comprei online este ano que chegaram, não serviram, e deixei passar o prazo de devolução?", min: 0, max: 20, unidade: "Peças" },
    { id: "tm_me_c_03", texto: "Numa escala de 0 a 100%, qual é o meu nível de pânico ou ódio a provar roupa nos provadores do shopping?", min: 0, max: 100, unidade: "%" },
    { id: "tm_me_c_04", texto: "Quantos euros limite deito à rua por uns ténis ou sapatos novos que eu queria muito?", min: 20, max: 1000, unidade: "Euros" },
    { id: "tm_me_c_05", texto: "Qual a percentagem (0-100%) de vezes que eu compro coisas nos saldos só porque estavam absurdamente baratas?", min: 0, max: 100, unidade: "%" },
    { id: "tm_me_c_06", texto: "Quantas lojas sou capaz de correr num sábado à tarde antes de ficar farto(a) e querer ir embora?", min: 1, max: 20, unidade: "Lojas" },
    { id: "tm_me_c_07", texto: "Numa escala de 0 a 10, o quão bom(a) caçador(a) de promoções escondidas ou roupa em 2ª mão (Vinted) eu sou?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_me_c_08", texto: "Quantas t-shirts brancas ou pretas básicas idênticas eu vou acumulando ao longo do ano?", min: 0, max: 30, unidade: "T-Shirts" },
    { id: "tm_me_c_09", texto: "Até quantos euros aceito pagar por uma peça de roupa interior (soutien ou boxers) de muita qualidade?", min: 5, max: 100, unidade: "Euros" },
    { id: "tm_me_c_10", texto: "Qual a probabilidade (0-100%) de eu mentir aos meus pais/parceiro sobre o preço real de uma peça cara que comprei?", min: 0, max: 100, unidade: "%" },
    { id: "tm_me_c_11", texto: "Quantas horas perco, em média, a navegar em sites de roupa a meter coisas no carrinho que não vou comprar?", min: 0, max: 15, unidade: "Horas/Mês" },
    { id: "tm_me_c_12", texto: "Numa escala de 0 a 10, quão julgador(a) sou em relação aos preços ridículos de marcas de luxo (ex: Gucci, Balenciaga)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_me_c_13", texto: "Quantos pares de calças de ganga (Jeans) provo numa loja até encontrar o modelo perfeito que me sirva bem?", min: 1, max: 15, unidade: "Pares" },
    { id: "tm_me_c_14", texto: "Qual a percentagem do meu armário que foi comprada nas típicas lojas fast-fashion (Zara, H&M, Pull&Bear)?", min: 0, max: 100, unidade: "%" },
    { id: "tm_me_c_15", texto: "Quantas doações ou sacos de roupa dou a instituições/amigos quando faço uma 'limpeza de armário' anual?", min: 0, max: 10, unidade: "Sacos" },
    { id: "tm_me_c_16", texto: "Numa escala de 0 a 10, o quão importado(a) eu sou com o facto de uma roupa ser de 'marca' visível?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_me_c_17", texto: "Até que tamanho (letras ou números) admito comprar uma peça que é demasiado grande só porque gosto do estilo 'Oversize'?", min: 1, max: 4, unidade: "Tamanhos acima" },
    { id: "tm_me_c_18", texto: "Qual a percentagem (0-100%) das minhas roupas que necessitam de cuidados especiais e lavagens à mão que eu ignoro?", min: 0, max: 100, unidade: "%" },
    { id: "tm_me_c_19", texto: "Quantos dias aguento ver uma peça que gostei numa montra antes de perder a cabeça e ir lá comprá-la?", min: 0, max: 30, unidade: "Dias" },
    { id: "tm_me_c_20", texto: "Numa escala de 0 a 10, quão frustrante é para mim quando o meu tamanho esgota sempre primeiro nos saldos?", min: 0, max: 10, unidade: "Escala" }
  ]
};
