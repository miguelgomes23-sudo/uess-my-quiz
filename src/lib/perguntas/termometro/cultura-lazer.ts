import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_cultura_lazer: Record<string, PerguntaTermometro[]> = {
  "sub_3_0": [ // Passatempos
    { id: "tm_cl_p_01", texto: "Quantas horas por dia passo, em média, agarrado(a) ao ecrã do telemóvel?", min: 1, max: 16, unidade: "Horas" },
    { id: "tm_cl_p_02", texto: "Quantos livros inteiros consegui ler do início ao fim no último ano?", min: 0, max: 50, unidade: "Livros" },
    { id: "tm_cl_p_03", texto: "Numa escala de 0 a 10, quão competitivo(a) eu fico quando estou a jogar videojogos?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cl_p_04", texto: "Quantos hobbies novos já comecei super entusiasmado(a) e abandonei passado 2 semanas?", min: 0, max: 20, unidade: "Hobbies" },
    { id: "tm_cl_p_05", texto: "Qual a percentagem do meu tempo livre que passo simplesmente deitado(a) a não fazer nada?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cl_p_06", texto: "Quantos episódios de uma série de 40 minutos consigo ver seguidos antes de perder o foco?", min: 1, max: 15, unidade: "Episódios" },
    { id: "tm_cl_p_07", texto: "Quantas horas seguidas sou capaz de jogar o meu videojogo favorito sem me levantar para comer?", min: 1, max: 24, unidade: "Horas" },
    { id: "tm_cl_p_08", texto: "Numa escala de 0 a 10, qual o meu talento escondido para trabalhos manuais (Bricolage)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cl_p_09", texto: "Quantas vezes por ano vou ao cinema ver um filme em vez de esperar que saia nas plataformas?", min: 0, max: 20, unidade: "Vezes" },
    { id: "tm_cl_p_10", texto: "Até quantos euros aceito gastar por mês num passatempo ou atividade de que gosto muito?", min: 0, max: 500, unidade: "Euros" },
    { id: "tm_cl_p_11", texto: "Numa escala de 0 a 100%, qual é o meu nível de paciência para fazer puzzles gigantes?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cl_p_12", texto: "Quantas subscrições de streaming (Netflix, Spotify, etc.) eu pago ou partilho ativamente?", min: 0, max: 10, unidade: "Serviços" },
    { id: "tm_cl_p_13", texto: "Quantos minutos demoro a escolher o que ver na Netflix antes de acabar a ver algo repetido?", min: 5, max: 60, unidade: "Minutos" },
    { id: "tm_cl_p_14", texto: "Numa escala de 0 a 10, quão bom(a) eu sou a tratar de plantas (jardinagem em casa)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cl_p_15", texto: "Quantos cadernos ou diários já comprei com a promessa de escrever todos os dias e deixei em branco?", min: 0, max: 30, unidade: "Cadernos" },
    { id: "tm_cl_p_16", texto: "Qual a probabilidade (0-100%) de eu preferir ficar em casa a ler um livro do que ir sair à noite?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cl_p_17", texto: "Quantos filmes clássicos (aqueles que todos já viram) eu confesso que nunca vi na vida?", min: 0, max: 50, unidade: "Filmes" },
    { id: "tm_cl_p_18", texto: "Numa escala de 0 a 10, quão viciado(a) sou em ouvir Podcasts e contar os factos aos outros?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cl_p_19", texto: "Quantas idas ao teatro ou comédia ao vivo (Stand-up) fiz nos últimos 2 anos?", min: 0, max: 20, unidade: "Vezes" },
    { id: "tm_cl_p_20", texto: "Qual o limite de tempo em horas que aceito perder numa fila para uma atração num parque de diversões?", min: 1, max: 5, unidade: "Horas" }
  ],
  "sub_3_1": [ // Arte e Entretenimento
    { id: "tm_cl_a_01", texto: "Quantos concertos de música ou festivais costumo frequentar num ano normal?", min: 0, max: 20, unidade: "Concertos" },
    { id: "tm_cl_a_02", texto: "Numa escala de 0 a 10, o quão fã sou de exposições de Arte Moderna e Contemporânea?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cl_a_03", texto: "Qual o máximo de dinheiro (em euros) que já gastei ou gastaria num bilhete para o meu artista favorito?", min: 30, max: 1000, unidade: "Euros" },
    { id: "tm_cl_a_04", texto: "Quantas horas costumo esperar na fila da frente (na grade) antes de começar o concerto?", min: 0, max: 12, unidade: "Horas" },
    { id: "tm_cl_a_05", texto: "Numa escala de 0 a 100%, qual é a minha tolerância a pessoas a gravar o concerto todo com o telemóvel?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cl_a_06", texto: "Quantas peças de roupa (merchandising) de bandas ou filmes eu tenho guardadas no armário?", min: 0, max: 50, unidade: "Peças" },
    { id: "tm_cl_a_07", texto: "A que percentagem (0-100%) eu avalio filmes apenas pelos efeitos visuais em vez do guião?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cl_a_08", texto: "Quantas vezes chorei genuinamente a ver um filme triste ou a ler um livro dramático?", min: 0, max: 100, unidade: "Vezes" },
    { id: "tm_cl_a_09", texto: "Numa escala de 0 a 10, qual o meu nível de rigor ou 'critica de cinema' chata a ver filmes?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cl_a_10", texto: "Quantas músicas inteiras, com letra exata, eu consigo cantar sem falhar uma única palavra?", min: 1, max: 100, unidade: "Músicas" },
    { id: "tm_cl_a_11", texto: "Qual a probabilidade (0-100%) de eu adormecer no sofá a ver o filme que eu próprio escolhi?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cl_a_12", texto: "Quantos documentários sobre crimes reais (True Crime) consigo devorar numa semana?", min: 0, max: 15, unidade: "Documentários" },
    { id: "tm_cl_a_13", texto: "Numa escala de 0 a 10, quão afinado(a) eu canto quando estou no banho ou no carro sozinho(a)?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cl_a_14", texto: "Quantos atores/atrizes famosos de Hollywood eu conseguiria identificar pelo nome se visse a foto?", min: 5, max: 100, unidade: "Pessoas" },
    { id: "tm_cl_a_15", texto: "Qual a percentagem da minha playlist musical que é composta inteiramente por músicas de há mais de 10 anos?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cl_a_16", texto: "Quantos euros gasto por ano em idas a museus, galerias ou exposições imersivas?", min: 0, max: 300, unidade: "Euros" },
    { id: "tm_cl_a_17", texto: "Numa escala de 0 a 10, quão propenso(a) sou a desenhar rabiscos enquanto falo ao telefone?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cl_a_18", texto: "Quantos minutos aguento ouvir música pimba (ou funk) numa festa antes de querer fugir?", min: 1, max: 240, unidade: "Minutos" },
    { id: "tm_cl_a_19", texto: "Qual a probabilidade (0-100%) de eu julgar uma pessoa pelos gostos musicais que ela tem?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cl_a_20", texto: "Quantas vezes por mês pego no carro só para conduzir sem destino a ouvir a minha playlist no máximo?", min: 0, max: 15, unidade: "Vezes" }
  ]
};
