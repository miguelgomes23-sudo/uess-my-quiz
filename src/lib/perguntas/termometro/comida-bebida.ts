import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_comida_bebida: Record<string, PerguntaTermometro[]> = {
  "sub_1_0": [ // Gastronomia à Mesa
    { id: "tm_cb_m_01", texto: "Quantos cafés bebo por dia, em média, para conseguir funcionar?", min: 0, max: 10, unidade: "Cafés" },
    { id: "tm_cb_m_02", texto: "Numa escala de 0 a 10, qual é o meu nível real de tolerância ao picante?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cb_m_03", texto: "Quantas colheres de açúcar (ou pacotes) coloco num simples café expresso?", min: 0, max: 4, unidade: "Colheres" },
    { id: "tm_cb_m_04", texto: "Qual a percentagem (0-100%) da minha alimentação semanal que considero ser 'saudável'?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cb_m_05", texto: "Quantos litros de água bebo verdadeiramente num dia normal?", min: 0, max: 5, unidade: "Litros" },
    { id: "tm_cb_m_06", texto: "Numa escala de 0 a 10, quão esquisito(a) ou 'espicilho' sou com as texturas da comida?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cb_m_07", texto: "Quantas vezes por semana costumo mandar vir comida a casa (UberEats/Glovo)?", min: 0, max: 14, unidade: "Vezes" },
    { id: "tm_cb_m_08", texto: "Quantos minutos demoro a despachar o almoço num dia de trabalho/aulas agitado?", min: 5, max: 60, unidade: "Minutos" },
    { id: "tm_cb_m_09", texto: "Numa escala de 0 a 100%, o quão frequente é eu roubar batatas fritas do prato dos outros?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cb_m_10", texto: "Até que hora da noite o meu estômago aguenta antes de me obrigar a ir buscar um snack?", min: 21, max: 24, unidade: "Horas" },
    { id: "tm_cb_m_11", texto: "Quantas peças de sushi sou capaz de devorar num rodízio de uma só vez?", min: 10, max: 80, unidade: "Peças" },
    { id: "tm_cb_m_12", texto: "Qual o valor máximo (em euros) que já paguei por uma única refeição só para mim?", min: 20, max: 300, unidade: "Euros" },
    { id: "tm_cb_m_13", texto: "Numa escala de 0 a 10, quão rápido eu como em comparação com as outras pessoas na mesa?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cb_m_14", texto: "Quantos minutos perco a olhar para o menu no restaurante antes de escolher o prato do costume?", min: 1, max: 30, unidade: "Minutos" },
    { id: "tm_cb_m_15", texto: "A que percentagem (0-100%) deixo as bordas da piza no prato porque não me apetece comê-las?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cb_m_16", texto: "Quantas refeições completas faria por dia se a comida não engordasse nem fizesse mal?", min: 3, max: 10, unidade: "Refeições" },
    { id: "tm_cb_m_17", texto: "Numa escala de 0 a 10, qual o meu nível de talento (real) para cozinhar de improviso com restos?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cb_m_18", texto: "Quantas garrafas de vinho acho aceitável dividir com uma pessoa num jantar longo?", min: 1, max: 4, unidade: "Garrafas" },
    { id: "tm_cb_m_19", texto: "Quantos dias aguento a comer restos (tupperwares) da mesma panela do dia anterior?", min: 1, max: 5, unidade: "Dias" },
    { id: "tm_cb_m_20", texto: "Qual a probabilidade (0-100%) de eu abdicar do prato principal só para poder comer mais sobremesas?", min: 0, max: 100, unidade: "%" }
  ],
  "sub_1_1": [ // Bebidas e Culinária
    { id: "tm_cb_c_01", texto: "A que idade dei a minha primeira verdadeira bebedeira de ir parar à cama a rodar?", min: 13, max: 25, unidade: "Anos" },
    { id: "tm_cb_c_02", texto: "Quantos copos de cerveja/vinho são precisos para eu começar a rir-me de tudo sem motivo?", min: 1, max: 10, unidade: "Copos" },
    { id: "tm_cb_c_03", texto: "Numa escala de 0 a 10, quão insuportável eu fico quando a 'azia da fome' ataca?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cb_c_04", texto: "Quantas vezes, numa ida a um bar, calha-me a mim a missão de ir buscar a rodada ao balcão?", min: 0, max: 10, unidade: "Vezes" },
    { id: "tm_cb_c_05", texto: "Qual a percentagem (0-100%) do meu orçamento mensal que é torrada em saídas e jantares?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cb_c_06", texto: "Quantos ingredientes/molhos estranhos costumo misturar num hambúrguer para o tornar perfeito?", min: 1, max: 8, unidade: "Ingredientes" },
    { id: "tm_cb_c_07", texto: "Numa escala de 0 a 10, quão bem o meu estômago suporta laticínios (leite/queijo) ao pequeno-almoço?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cb_c_08", texto: "Quantas vezes por ano afirmo que vou 'entrar numa dieta rigorosa' e desisto 3 dias depois?", min: 0, max: 12, unidade: "Vezes" },
    { id: "tm_cb_c_09", texto: "Quantos pacotes de bolachas sou capaz de despachar sozinho(a) numa tarde inteira de tédio?", min: 1, max: 5, unidade: "Pacotes" },
    { id: "tm_cb_c_10", texto: "Qual a probabilidade (0-100%) de eu entornar bebida ou manchar a roupa num jantar chique?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cb_c_11", texto: "Quantas vezes ligo o micro-ondas para reaquecer a mesma caneca de café/chá que esqueci?", min: 0, max: 5, unidade: "Vezes" },
    { id: "tm_cb_c_12", texto: "Numa escala de 0 a 10, quão mais forte é a minha atração por salgados em vez de doces?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cb_c_13", texto: "Quantos mililitros (ml) leva a minha caneca/copo gigante favorito lá de casa?", min: 200, max: 1000, unidade: "ml" },
    { id: "tm_cb_c_14", texto: "A partir de que número de shots a noite de festa deixa de ser uma responsabilidade minha?", min: 2, max: 10, unidade: "Shots" },
    { id: "tm_cb_c_15", texto: "Qual a percentagem (0-100%) das minhas receitas caseiras que leva alho numa quantidade industrial?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cb_c_16", texto: "Quantas vezes por mês passo no drive-thru de fast-food (McDonald's/etc.) às escondidas?", min: 0, max: 10, unidade: "Vezes" },
    { id: "tm_cb_c_17", texto: "Numa escala de 0 a 10, o quão grave e real é o meu vício por Coca-Cola / refrigerantes?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cb_c_18", texto: "Quantas vezes mastigo cada garfada, em média, antes de engolir a comida à pressa?", min: 2, max: 30, unidade: "Vezes" },
    { id: "tm_cb_c_19", texto: "Qual o meu nível de indignação (0-100%) quando, num restaurante, me servem a carne passada demais?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cb_c_20", texto: "A quantas colheradas da sobremesa alheia eu vou lá 'provar' depois de me recusar a pedir uma para mim?", min: 1, max: 10, unidade: "Colheres" }
  ]
};
