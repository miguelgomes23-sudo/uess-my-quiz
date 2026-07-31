import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_saude_bem_estar: Record<string, PerguntaTermometro[]> = {
  "sub_17_0": [ // Cuidados Médicos
    { id: "tm_sbe_c_01", texto: "Quantas horas aguento sofrer em silêncio com dores antes de finalmente ceder e tomar um comprimido (Ben-u-ron/Brufen)?", min: 1, max: 48, unidade: "Horas" },
    { id: "tm_sbe_c_02", texto: "Numa escala de 0 a 100%, o quão hipocondríaco(a) fico depois de pesquisar qualquer sintoma simples no 'Dr. Google'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_sbe_c_03", texto: "Quantos dias sou capaz de adiar a marcação de uma consulta no dentista mesmo sentindo uma dor incómoda?", min: 1, max: 365, unidade: "Dias" },
    { id: "tm_sbe_c_04", texto: "Qual é o nível máximo de horas que aceito passar na sala de espera das Urgências antes de me querer ir embora de raiva?", min: 1, max: 12, unidade: "Horas" },
    { id: "tm_sbe_c_05", texto: "Quantas vezes por ano sou apanhado(a) por uma valente constipação ou gripe no inverno?", min: 0, max: 10, unidade: "Vezes" },
    { id: "tm_sbe_c_06", texto: "Numa escala de 0 a 10, quão 'mariquinhas' ou bebé eu fico quando a febre chega aos 38 graus?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_sbe_c_07", texto: "Qual a percentagem (0-100%) da caixa de primeiros socorros lá de casa que deve estar fora do prazo de validade?", min: 0, max: 100, unidade: "%" },
    { id: "tm_sbe_c_08", texto: "Quantos batimentos por minuto (BPM) atinge o meu coração por causa de ansiedade só na sala de espera de tirar sangue?", min: 60, max: 180, unidade: "BPM" },
    { id: "tm_sbe_c_09", texto: "A que idade fiz a minha primeira cirurgia ou levei pontos a sério no hospital (se nunca fez, marcar 0)?", min: 0, max: 50, unidade: "Anos" },
    { id: "tm_sbe_c_10", texto: "Numa escala de 0 a 10, o quão fanático(a) e crente eu sou em mezinhas, chás caseiros e xaropes da avó?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_sbe_c_11", texto: "Quantas vezes ao dia costumo reclamar da minha 'dor na lombar/costas' (o clássico peso da idade)?", min: 0, max: 20, unidade: "Vezes" },
    { id: "tm_sbe_c_12", texto: "Qual a probabilidade (0-100%) de eu mentir ao médico quando ele pergunta se bebo/fumo ou faço exercício?", min: 0, max: 100, unidade: "%" },
    { id: "tm_sbe_c_13", texto: "Quantos litros de água as pessoas acham que eu bebo num dia, face ao que eu realmente bebo (apenas o real)?", min: 0, max: 5, unidade: "Litros" },
    { id: "tm_sbe_c_14", texto: "Numa escala de 0 a 10, o quão propenso sou a inventar uma dor súbita só para não ir trabalhar/estudar?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_sbe_c_15", texto: "Quantos meses ignoro as queixas visuais antes de ir finalmente a uma ótica ver as dioptrias?", min: 0, max: 60, unidade: "Meses" },
    { id: "tm_sbe_c_16", texto: "Até que valor (em euros) considero as taxas moderadoras ou o dentista privado um autêntico roubo à mão armada?", min: 20, max: 500, unidade: "Euros" },
    { id: "tm_sbe_c_17", texto: "Qual a percentagem de vezes em que não sigo a receita dos antibióticos até ao fim porque 'já me sinto melhor'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_sbe_c_18", texto: "Quantos dias preciso de dieta 'chá e tostas secas' para recuperar o estômago de uma intoxicação do sushi?", min: 1, max: 7, unidade: "Dias" },
    { id: "tm_sbe_c_19", texto: "Numa escala de 0 a 10, o quão corajoso(a) sou ao ver agulhas e sangue sem virar a cara para a parede?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_sbe_c_20", texto: "Quantas vezes já jurei a pés juntos no hospital que 'nunca mais repito' o erro que me levou lá (ex: beber, cair)?", min: 0, max: 10, unidade: "Vezes" }
  ],
  "sub_17_1": [ // Saúde Mental e Ansiedade
    { id: "tm_sbe_m_01", texto: "Numa escala de 0 a 100%, qual o nível de ansiedade que me ataca quando o telemóvel toca com número desconhecido?", min: 0, max: 100, unidade: "%" },
    { id: "tm_sbe_m_02", texto: "Quantas horas passo acordado(a) no escuro, a 'overthinkar' (pensar demasiado) nos erros de há 5 anos?", min: 0, max: 8, unidade: "Horas/Noite" },
    { id: "tm_sbe_m_03", texto: "Qual a percentagem do meu tempo em que respondo 'Tudo bem, e contigo?' e na verdade estou exausto mentalmente?", min: 0, max: 100, unidade: "%" },
    { id: "tm_sbe_m_04", texto: "Quantos dias de completo silêncio e isolamento (bateria social vazia) preciso depois de um evento muito stressante?", min: 0, max: 7, unidade: "Dias" },
    { id: "tm_sbe_m_05", texto: "Numa escala de 0 a 10, o quão paralisado(a) eu fico em situações de falar em público ou expor ideias a muita gente?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_sbe_m_06", texto: "Quantas vezes por dia a minha cabeça cria cenários falsos, catastróficos e dramáticos que nunca vão acontecer?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_sbe_m_07", texto: "A partir de quantas mensagens/emails por responder começo a sentir-me sufocado(a) pelo mundo lá fora?", min: 1, max: 100, unidade: "Mensagens" },
    { id: "tm_sbe_m_08", texto: "Qual a probabilidade (0-100%) de eu descarregar as minhas frustrações ou nervos numa arrumação furiosa de casa?", min: 0, max: 100, unidade: "%" },
    { id: "tm_sbe_m_09", texto: "Quantas compras online impulsivas faço por mês numa tentativa de compensar os meus dias de tristeza (Retail Therapy)?", min: 0, max: 20, unidade: "Compras" },
    { id: "tm_sbe_m_10", texto: "Numa escala de 0 a 10, quão bom(a) eu sou a esconder os meus tiques de ansiedade (mexer anéis, roer unhas) dos outros?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_sbe_m_11", texto: "Quantas vezes por ano penso seriamente na hipótese de largar as redes sociais todas e ir viver para uma floresta?", min: 0, max: 365, unidade: "Vezes" },
    { id: "tm_sbe_m_12", texto: "Qual a percentagem (0-100%) de vezes que fujo ou evito totalmente um conflito apenas para proteger a minha paz mental?", min: 0, max: 100, unidade: "%" },
    { id: "tm_sbe_m_13", texto: "Quantos euros consideraria pagar de bom grado, por mês, por uma excelente terapia ou psicólogo?", min: 20, max: 500, unidade: "Euros" },
    { id: "tm_sbe_m_14", texto: "Numa escala de 0 a 10, o quão sensível e propenso(a) sou a chorar a ver anúncios de televisão tristes ou publicidades emotivas?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_sbe_m_15", texto: "Quantos dias da semana admito que sofro do famoso 'Síndrome do Impostor' no trabalho ou nos estudos?", min: 0, max: 7, unidade: "Dias" },
    { id: "tm_sbe_m_16", texto: "Qual a probabilidade (0-100%) de eu ter cancelado um plano nas últimas semanas porque disse que estava doente, mas era só exaustão?", min: 0, max: 100, unidade: "%" },
    { id: "tm_sbe_m_17", texto: "Quantos minutos (ou horas) gasto debaixo do chuveiro quente só para sentir que os problemas estão a escorrer?", min: 5, max: 60, unidade: "Minutos" },
    { id: "tm_sbe_m_18", texto: "Numa escala de 0 a 10, qual o meu grau de dependência num café ou num doce quando sinto que vou 'rebentar' de stress?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_sbe_m_19", texto: "Quantas pessoas restritas e exclusivas têm permissão absoluta e acesso direto ao meu lado mais frágil e mentalmente fraco?", min: 0, max: 10, unidade: "Pessoas" },
    { id: "tm_sbe_m_20", texto: "Qual a percentagem (0-100%) da minha vida que baseio em ler livros de autoajuda ou citações inspiradoras do Pinterest?", min: 0, max: 100, unidade: "%" }
  ]
};
