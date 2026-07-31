import { Categoria, PerguntaClassica } from '../types/catalogo';

export const CATALOGO_CLASSICO: Categoria<PerguntaClassica>[] = [
  {
    id: "cat_classico_0",
    nome: "Vida Pessoal",
    icone: "👤",
    descricao: "Dia a dia, rotinas e hábitos.",
    subcategorias: [
      {
        id: "sub_0_0",
        nome: "Rotinas Diárias",
        perguntas: [
          {
            id: "p_0_0_0",
            texto: "Qual é a primeira coisa que faço quando acordo?",
            opcoes: ["Ver o telemóvel", "Beber água", "Ir à casa de banho", "Ligar o alarme para mais 5 min"]
          },
          {
            id: "p_0_0_1",
            texto: "O que me tira mais rapidamente do sério?",
            opcoes: ["Pessoas a andar devagar", "Barulhos a comer", "Falta de pontualidade", "Desarrumação"]
          },
          {
            id: "p_0_0_2",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comer doces às escondidas", "Ouvir música pimba", "Ver reality shows", "Fazer compras online"]
          },
          {
            id: "p_0_0_3",
            texto: "Como reajo quando estou sob stress?",
            opcoes: ["Fico calado/a e isolo-me", "Falo pelos cotovelos", "Torno-me irritadiço/a", "Começo a comer compulsivamente"]
          },
          {
            id: "p_0_0_4",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_0_0_5",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_0_0_6",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_0_0_7",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_0_0_8",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_0_0_9",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_0_0_10",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_0_0_11",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_0_0_12",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_0_0_13",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_0_0_14",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_0_0_15",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_0_0_16",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_0_0_17",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_0_0_18",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_0_0_19",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
      {
        id: "sub_0_1",
        nome: "Hábitos e Manias",
        perguntas: [
          {
            id: "p_0_1_0",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_0_1_1",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_0_1_2",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_0_1_3",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_0_1_4",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_0_1_5",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_0_1_6",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_0_1_7",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_0_1_8",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_0_1_9",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_0_1_10",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_0_1_11",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_0_1_12",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_0_1_13",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_0_1_14",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_0_1_15",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_0_1_16",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_0_1_17",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_0_1_18",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_0_1_19",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_1",
    nome: "Comida & Bebida",
    icone: "🍔",
    descricao: "Gastronomia, restaurantes e preferências.",
    subcategorias: [
      {
        id: "sub_1_0",
        nome: "Restaurantes e Fast Food",
        perguntas: [
          {
            id: "p_1_0_0",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_1_0_1",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_1_0_2",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_1_0_3",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_1_0_4",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_1_0_5",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_1_0_6",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_1_0_7",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_1_0_8",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_1_0_9",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_1_0_10",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_1_0_11",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_1_0_12",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_1_0_13",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_1_0_14",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_1_0_15",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_1_0_16",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_1_0_17",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_1_0_18",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_1_0_19",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
        ]
      },
      {
        id: "sub_1_1",
        nome: "Gostos Peculiares",
        perguntas: [
          {
            id: "p_1_1_0",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_1_1_1",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_1_1_2",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_1_1_3",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_1_1_4",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_1_1_5",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_1_1_6",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_1_1_7",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_1_1_8",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_1_1_9",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_1_1_10",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_1_1_11",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_1_1_12",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_1_1_13",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_1_1_14",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_1_1_15",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_1_1_16",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_1_1_17",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_1_1_18",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_1_1_19",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_2",
    nome: "Relacionamentos",
    icone: "❤️",
    descricao: "Amizades, família e vida amorosa.",
    subcategorias: [
      {
        id: "sub_2_0",
        nome: "Amizades e Grupos",
        perguntas: [
          {
            id: "p_2_0_0",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_2_0_1",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_0_2",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_0_3",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_2_0_4",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_2_0_5",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_2_0_6",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_2_0_7",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_2_0_8",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_2_0_9",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_0_10",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_2_0_11",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_0_12",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_2_0_13",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_2_0_14",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_0_15",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_2_0_16",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_2_0_17",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_2_0_18",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_0_19",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
      {
        id: "sub_2_1",
        nome: "Vida Amorosa e Dates",
        perguntas: [
          {
            id: "p_2_1_0",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_1_1",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_2_1_2",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_1_3",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_2_1_4",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_1_5",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_1_6",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_2_1_7",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_2_1_8",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_2_1_9",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_2_1_10",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_2_1_11",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_2_1_12",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_2_1_13",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_1_14",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_2_1_15",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_2_1_16",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_2_1_17",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_2_1_18",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_2_1_19",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_3",
    nome: "Cultura & Lazer",
    icone: "🍿",
    descricao: "Filmes, séries, música e hobbies.",
    subcategorias: [
      {
        id: "sub_3_0",
        nome: "Filmes e Séries",
        perguntas: [
          {
            id: "p_3_0_0",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_3_0_1",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_3_0_2",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_3_0_3",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_3_0_4",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_3_0_5",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_3_0_6",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_3_0_7",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_3_0_8",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_3_0_9",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_3_0_10",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_3_0_11",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_3_0_12",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_3_0_13",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_3_0_14",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_3_0_15",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_3_0_16",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_3_0_17",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_3_0_18",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_3_0_19",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
        ]
      },
      {
        id: "sub_3_1",
        nome: "Hobbies e Tempos Livres",
        perguntas: [
          {
            id: "p_3_1_0",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_3_1_1",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_3_1_2",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_3_1_3",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_3_1_4",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_3_1_5",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_3_1_6",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_3_1_7",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_3_1_8",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_3_1_9",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_3_1_10",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_3_1_11",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_3_1_12",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_3_1_13",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_3_1_14",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_3_1_15",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_3_1_16",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_3_1_17",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_3_1_18",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_3_1_19",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_4",
    nome: "Viagens & Férias",
    icone: "✈️",
    descricao: "Destinos, aventuras e planeamento.",
    subcategorias: [
      {
        id: "sub_4_0",
        nome: "Destinos de Sonho",
        perguntas: [
          {
            id: "p_4_0_0",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_4_0_1",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_4_0_2",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_4_0_3",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_4_0_4",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_4_0_5",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_4_0_6",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_4_0_7",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_4_0_8",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_4_0_9",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_4_0_10",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_4_0_11",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_4_0_12",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_4_0_13",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_4_0_14",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_4_0_15",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_4_0_16",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_4_0_17",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_4_0_18",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_4_0_19",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
      {
        id: "sub_4_1",
        nome: "Peripécias de Viagem",
        perguntas: [
          {
            id: "p_4_1_0",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_4_1_1",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_4_1_2",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_4_1_3",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_4_1_4",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_4_1_5",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_4_1_6",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_4_1_7",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_4_1_8",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_4_1_9",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_4_1_10",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_4_1_11",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_4_1_12",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_4_1_13",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_4_1_14",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_4_1_15",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_4_1_16",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_4_1_17",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_4_1_18",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_4_1_19",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_5",
    nome: "Trabalho & Carreira",
    icone: "💼",
    descricao: "Escritório, chefes, e ambições.",
    subcategorias: [
      {
        id: "sub_5_0",
        nome: "Vida no Escritório",
        perguntas: [
          {
            id: "p_5_0_0",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_5_0_1",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_5_0_2",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_5_0_3",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_5_0_4",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_5_0_5",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_5_0_6",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_5_0_7",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_5_0_8",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_5_0_9",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_5_0_10",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_5_0_11",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_5_0_12",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_5_0_13",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_5_0_14",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_5_0_15",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_5_0_16",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_5_0_17",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_5_0_18",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_5_0_19",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
      {
        id: "sub_5_1",
        nome: "Ambições Profissionais",
        perguntas: [
          {
            id: "p_5_1_0",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_5_1_1",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_5_1_2",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_5_1_3",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_5_1_4",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_5_1_5",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_5_1_6",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_5_1_7",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_5_1_8",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_5_1_9",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_5_1_10",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_5_1_11",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_5_1_12",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_5_1_13",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_5_1_14",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_5_1_15",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_5_1_16",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_5_1_17",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_5_1_18",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_5_1_19",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_6",
    nome: "Passado & Infância",
    icone: "🧸",
    descricao: "Memórias de escola e juventude.",
    subcategorias: [
      {
        id: "sub_6_0",
        nome: "Memórias de Escola",
        perguntas: [
          {
            id: "p_6_0_0",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_6_0_1",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_6_0_2",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_6_0_3",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_6_0_4",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_6_0_5",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_6_0_6",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_6_0_7",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_6_0_8",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_6_0_9",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_6_0_10",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_6_0_11",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_6_0_12",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_6_0_13",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_6_0_14",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_6_0_15",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_6_0_16",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_6_0_17",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_6_0_18",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_6_0_19",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
        ]
      },
      {
        id: "sub_6_1",
        nome: "Traquinices de Criança",
        perguntas: [
          {
            id: "p_6_1_0",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_6_1_1",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_6_1_2",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_6_1_3",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_6_1_4",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_6_1_5",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_6_1_6",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_6_1_7",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_6_1_8",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_6_1_9",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_6_1_10",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_6_1_11",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_6_1_12",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_6_1_13",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_6_1_14",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_6_1_15",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_6_1_16",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_6_1_17",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_6_1_18",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_6_1_19",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_7",
    nome: "Personalidade",
    icone: "🧠",
    descricao: "Medos, qualidades, defeitos e manias.",
    subcategorias: [
      {
        id: "sub_7_0",
        nome: "Defeitos e Qualidades",
        perguntas: [
          {
            id: "p_7_0_0",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_7_0_1",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_7_0_2",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_7_0_3",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_7_0_4",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_7_0_5",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_7_0_6",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_7_0_7",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_7_0_8",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_7_0_9",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_7_0_10",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_7_0_11",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_7_0_12",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_7_0_13",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_7_0_14",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_7_0_15",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_7_0_16",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_7_0_17",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_7_0_18",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_7_0_19",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
        ]
      },
      {
        id: "sub_7_1",
        nome: "Medos e Fobias",
        perguntas: [
          {
            id: "p_7_1_0",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_7_1_1",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_7_1_2",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_7_1_3",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_7_1_4",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_7_1_5",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_7_1_6",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_7_1_7",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_7_1_8",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_7_1_9",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_7_1_10",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_7_1_11",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_7_1_12",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_7_1_13",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_7_1_14",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_7_1_15",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_7_1_16",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_7_1_17",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_7_1_18",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_7_1_19",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_8",
    nome: "Desporto & Fitness",
    icone: "⚽",
    descricao: "Exercício, clubes e atividades físicas.",
    subcategorias: [
      {
        id: "sub_8_0",
        nome: "Idas ao Ginásio",
        perguntas: [
          {
            id: "p_8_0_0",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_8_0_1",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_8_0_2",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_8_0_3",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_8_0_4",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_8_0_5",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_8_0_6",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_8_0_7",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_8_0_8",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_8_0_9",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_8_0_10",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_8_0_11",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_8_0_12",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_8_0_13",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_8_0_14",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_8_0_15",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_8_0_16",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_8_0_17",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_8_0_18",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_8_0_19",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
      {
        id: "sub_8_1",
        nome: "Futebol e Competição",
        perguntas: [
          {
            id: "p_8_1_0",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_8_1_1",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_8_1_2",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_8_1_3",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_8_1_4",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_8_1_5",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_8_1_6",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_8_1_7",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_8_1_8",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_8_1_9",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_8_1_10",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_8_1_11",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_8_1_12",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_8_1_13",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_8_1_14",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_8_1_15",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_8_1_16",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_8_1_17",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_8_1_18",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_8_1_19",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_9",
    nome: "Tecnologia",
    icone: "📱",
    descricao: "Redes sociais, gadgets e hábitos digitais.",
    subcategorias: [
      {
        id: "sub_9_0",
        nome: "Vício em Redes Sociais",
        perguntas: [
          {
            id: "p_9_0_0",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_9_0_1",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_9_0_2",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_9_0_3",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_9_0_4",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_9_0_5",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_9_0_6",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_9_0_7",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_9_0_8",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_9_0_9",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_9_0_10",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_9_0_11",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_9_0_12",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_9_0_13",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_9_0_14",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_9_0_15",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_9_0_16",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_9_0_17",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_9_0_18",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_9_0_19",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
      {
        id: "sub_9_1",
        nome: "Gadgets e Ecrãs",
        perguntas: [
          {
            id: "p_9_1_0",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_9_1_1",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_9_1_2",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_9_1_3",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_9_1_4",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_9_1_5",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_9_1_6",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_9_1_7",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_9_1_8",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_9_1_9",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_9_1_10",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_9_1_11",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_9_1_12",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_9_1_13",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_9_1_14",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_9_1_15",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_9_1_16",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_9_1_17",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_9_1_18",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_9_1_19",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_10",
    nome: "Dinheiro & Compras",
    icone: "💸",
    descricao: "Finanças pessoais, modas e caprichos.",
    subcategorias: [
      {
        id: "sub_10_0",
        nome: "Hábitos de Consumo",
        perguntas: [
          {
            id: "p_10_0_0",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_10_0_1",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_10_0_2",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_10_0_3",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_10_0_4",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_10_0_5",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_10_0_6",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_10_0_7",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_10_0_8",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_10_0_9",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_10_0_10",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_10_0_11",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_10_0_12",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_10_0_13",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_10_0_14",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_10_0_15",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_10_0_16",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_10_0_17",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_10_0_18",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_10_0_19",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
      {
        id: "sub_10_1",
        nome: "Gestão de Poupanças",
        perguntas: [
          {
            id: "p_10_1_0",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_10_1_1",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_10_1_2",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_10_1_3",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_10_1_4",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_10_1_5",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_10_1_6",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_10_1_7",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_10_1_8",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_10_1_9",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_10_1_10",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_10_1_11",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_10_1_12",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_10_1_13",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_10_1_14",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_10_1_15",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_10_1_16",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_10_1_17",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_10_1_18",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_10_1_19",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_11",
    nome: "Casa & Decoração",
    icone: "🏠",
    descricao: "Limpeza, estética e conforto.",
    subcategorias: [
      {
        id: "sub_11_0",
        nome: "Limpeza e Arrumação",
        perguntas: [
          {
            id: "p_11_0_0",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_11_0_1",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_11_0_2",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_11_0_3",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_11_0_4",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_11_0_5",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_11_0_6",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_11_0_7",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_11_0_8",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_11_0_9",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_11_0_10",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_11_0_11",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_11_0_12",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_11_0_13",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_11_0_14",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_11_0_15",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_11_0_16",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_11_0_17",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_11_0_18",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_11_0_19",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
        ]
      },
      {
        id: "sub_11_1",
        nome: "Dias de Preguiça",
        perguntas: [
          {
            id: "p_11_1_0",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_11_1_1",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_11_1_2",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_11_1_3",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_11_1_4",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_11_1_5",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_11_1_6",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_11_1_7",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_11_1_8",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_11_1_9",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_11_1_10",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_11_1_11",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_11_1_12",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_11_1_13",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_11_1_14",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_11_1_15",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_11_1_16",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_11_1_17",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_11_1_18",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_11_1_19",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_12",
    nome: "Festa & Noite",
    icone: "🪩",
    descricao: "Saídas, copos e ressacas.",
    subcategorias: [
      {
        id: "sub_12_0",
        nome: "Saídas à Noite",
        perguntas: [
          {
            id: "p_12_0_0",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_12_0_1",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_12_0_2",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_12_0_3",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_12_0_4",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_12_0_5",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_12_0_6",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_12_0_7",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_12_0_8",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_12_0_9",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_12_0_10",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_12_0_11",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_12_0_12",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_12_0_13",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_12_0_14",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_12_0_15",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_12_0_16",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_12_0_17",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_12_0_18",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_12_0_19",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
        ]
      },
      {
        id: "sub_12_1",
        nome: "Ressacas e Arrependimentos",
        perguntas: [
          {
            id: "p_12_1_0",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_12_1_1",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_12_1_2",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_12_1_3",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_12_1_4",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_12_1_5",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_12_1_6",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_12_1_7",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_12_1_8",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_12_1_9",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_12_1_10",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_12_1_11",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_12_1_12",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_12_1_13",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_12_1_14",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_12_1_15",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_12_1_16",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_12_1_17",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_12_1_18",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_12_1_19",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_13",
    nome: "Animais de Estimação",
    icone: "🐶",
    descricao: "Cães, gatos e bichos em geral.",
    subcategorias: [
      {
        id: "sub_13_0",
        nome: "Cães vs Gatos",
        perguntas: [
          {
            id: "p_13_0_0",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_13_0_1",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_13_0_2",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_13_0_3",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_13_0_4",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_13_0_5",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_13_0_6",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_13_0_7",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_13_0_8",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_13_0_9",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_13_0_10",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_13_0_11",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_13_0_12",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_13_0_13",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_13_0_14",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_13_0_15",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_13_0_16",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_13_0_17",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_13_0_18",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_13_0_19",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
        ]
      },
      {
        id: "sub_13_1",
        nome: "Aventuras com Bichos",
        perguntas: [
          {
            id: "p_13_1_0",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_13_1_1",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_13_1_2",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_13_1_3",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_13_1_4",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_13_1_5",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_13_1_6",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_13_1_7",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_13_1_8",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_13_1_9",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_13_1_10",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_13_1_11",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_13_1_12",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_13_1_13",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_13_1_14",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_13_1_15",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_13_1_16",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_13_1_17",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_13_1_18",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_13_1_19",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_14",
    nome: "Dilemas & Cenários",
    icone: "🤔",
    descricao: "Decisões difíceis e hipóteses.",
    subcategorias: [
      {
        id: "sub_14_0",
        nome: "Escolhas Difíceis",
        perguntas: [
          {
            id: "p_14_0_0",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_0_1",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_14_0_2",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_14_0_3",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_0_4",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_14_0_5",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_14_0_6",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_14_0_7",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_14_0_8",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_14_0_9",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_14_0_10",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_14_0_11",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_0_12",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_14_0_13",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_14_0_14",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_14_0_15",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_0_16",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_0_17",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_0_18",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_14_0_19",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
        ]
      },
      {
        id: "sub_14_1",
        nome: "Cenários Improváveis",
        perguntas: [
          {
            id: "p_14_1_0",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_14_1_1",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_14_1_2",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_14_1_3",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_1_4",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_14_1_5",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_14_1_6",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_14_1_7",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_14_1_8",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_14_1_9",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_14_1_10",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_1_11",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_1_12",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_1_13",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_14_1_14",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_1_15",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_14_1_16",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_14_1_17",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_14_1_18",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_14_1_19",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_15",
    nome: "Moda & Estilo",
    icone: "👗",
    descricao: "Roupa, acessórios e calçado.",
    subcategorias: [
      {
        id: "sub_15_0",
        nome: "Gostos de Roupa",
        perguntas: [
          {
            id: "p_15_0_0",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_15_0_1",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_15_0_2",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_15_0_3",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_15_0_4",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_15_0_5",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_15_0_6",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_15_0_7",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_15_0_8",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_15_0_9",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_15_0_10",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_15_0_11",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_15_0_12",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_15_0_13",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_15_0_14",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_15_0_15",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_15_0_16",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_15_0_17",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_15_0_18",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_15_0_19",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
        ]
      },
      {
        id: "sub_15_1",
        nome: "Compras Impulsivas",
        perguntas: [
          {
            id: "p_15_1_0",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_15_1_1",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_15_1_2",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_15_1_3",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_15_1_4",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_15_1_5",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_15_1_6",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_15_1_7",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_15_1_8",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_15_1_9",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_15_1_10",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_15_1_11",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_15_1_12",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_15_1_13",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_15_1_14",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_15_1_15",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_15_1_16",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_15_1_17",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_15_1_18",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_15_1_19",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_16",
    nome: "Carros & Condução",
    icone: "🚗",
    descricao: "Trânsito, viagens e veículos.",
    subcategorias: [
      {
        id: "sub_16_0",
        nome: "Stress no Trânsito",
        perguntas: [
          {
            id: "p_16_0_0",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_16_0_1",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_16_0_2",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_16_0_3",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_16_0_4",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_16_0_5",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_16_0_6",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_16_0_7",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_16_0_8",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_16_0_9",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_16_0_10",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_16_0_11",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_16_0_12",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_16_0_13",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_16_0_14",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_16_0_15",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_16_0_16",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_16_0_17",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_16_0_18",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_16_0_19",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
      {
        id: "sub_16_1",
        nome: "Roadtrips e Viagens",
        perguntas: [
          {
            id: "p_16_1_0",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_16_1_1",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_16_1_2",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_16_1_3",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_16_1_4",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_16_1_5",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_16_1_6",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_16_1_7",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_16_1_8",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_16_1_9",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_16_1_10",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_16_1_11",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_16_1_12",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_16_1_13",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_16_1_14",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_16_1_15",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_16_1_16",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_16_1_17",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_16_1_18",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_16_1_19",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_17",
    nome: "Saúde & Bem-Estar",
    icone: "🧘",
    descricao: "Alimentação saudável, sono e terapias.",
    subcategorias: [
      {
        id: "sub_17_0",
        nome: "Hábitos de Sono",
        perguntas: [
          {
            id: "p_17_0_0",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_17_0_1",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_17_0_2",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_17_0_3",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_17_0_4",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_17_0_5",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_17_0_6",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_17_0_7",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_17_0_8",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_17_0_9",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_17_0_10",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_17_0_11",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_17_0_12",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_17_0_13",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_17_0_14",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_17_0_15",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_17_0_16",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_17_0_17",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_17_0_18",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_17_0_19",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
      {
        id: "sub_17_1",
        nome: "Dietas e Alimentação",
        perguntas: [
          {
            id: "p_17_1_0",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_17_1_1",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_17_1_2",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_17_1_3",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_17_1_4",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_17_1_5",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_17_1_6",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_17_1_7",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_17_1_8",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_17_1_9",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_17_1_10",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_17_1_11",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_17_1_12",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_17_1_13",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_17_1_14",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_17_1_15",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_17_1_16",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_17_1_17",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_17_1_18",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_17_1_19",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_18",
    nome: "Natureza & Ar Livre",
    icone: "🌲",
    descricao: "Praia, campo e atividades exteriores.",
    subcategorias: [
      {
        id: "sub_18_0",
        nome: "Praia ou Campo",
        perguntas: [
          {
            id: "p_18_0_0",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_18_0_1",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_18_0_2",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_18_0_3",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_18_0_4",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_18_0_5",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_18_0_6",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_18_0_7",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_18_0_8",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_18_0_9",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_18_0_10",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_18_0_11",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_18_0_12",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_18_0_13",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_18_0_14",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_18_0_15",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_18_0_16",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_18_0_17",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_18_0_18",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_18_0_19",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
      {
        id: "sub_18_1",
        nome: "Atividades Radicais",
        perguntas: [
          {
            id: "p_18_1_0",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_18_1_1",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_18_1_2",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_18_1_3",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_18_1_4",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_18_1_5",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_18_1_6",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_18_1_7",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_18_1_8",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_18_1_9",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_18_1_10",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_18_1_11",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_18_1_12",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_18_1_13",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_18_1_14",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_18_1_15",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_18_1_16",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_18_1_17",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_18_1_18",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_18_1_19",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_19",
    nome: "Artes & Criatividade",
    icone: "🎨",
    descricao: "Pintura, escrita, música e DIY.",
    subcategorias: [
      {
        id: "sub_19_0",
        nome: "Dotes Artísticos",
        perguntas: [
          {
            id: "p_19_0_0",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_19_0_1",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_19_0_2",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_19_0_3",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_19_0_4",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_19_0_5",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_19_0_6",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_19_0_7",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_19_0_8",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_19_0_9",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_19_0_10",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_19_0_11",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_19_0_12",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_19_0_13",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_19_0_14",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_19_0_15",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_19_0_16",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_19_0_17",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_19_0_18",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_19_0_19",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
        ]
      },
      {
        id: "sub_19_1",
        nome: "Projetos DIY",
        perguntas: [
          {
            id: "p_19_1_0",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_19_1_1",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_19_1_2",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_19_1_3",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_19_1_4",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_19_1_5",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_19_1_6",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_19_1_7",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_19_1_8",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_19_1_9",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_19_1_10",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_19_1_11",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_19_1_12",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_19_1_13",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_19_1_14",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_19_1_15",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_19_1_16",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_19_1_17",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_19_1_18",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_19_1_19",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_20",
    nome: "Superstições & Crenças",
    icone: "🔮",
    descricao: "Signos, sorte e espiritualidade.",
    subcategorias: [
      {
        id: "sub_20_0",
        nome: "Astrologia e Signos",
        perguntas: [
          {
            id: "p_20_0_0",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_20_0_1",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_20_0_2",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_20_0_3",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_20_0_4",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_20_0_5",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_20_0_6",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_20_0_7",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_20_0_8",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_20_0_9",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_20_0_10",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_20_0_11",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_20_0_12",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_20_0_13",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_20_0_14",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_20_0_15",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_20_0_16",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_20_0_17",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_20_0_18",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_20_0_19",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
        ]
      },
      {
        id: "sub_20_1",
        nome: "Sorte e Azar",
        perguntas: [
          {
            id: "p_20_1_0",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_20_1_1",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_20_1_2",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_20_1_3",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_20_1_4",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_20_1_5",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_20_1_6",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_20_1_7",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_20_1_8",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_20_1_9",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_20_1_10",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_20_1_11",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_20_1_12",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_20_1_13",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_20_1_14",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_20_1_15",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_20_1_16",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_20_1_17",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_20_1_18",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_20_1_19",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_21",
    nome: "Cozinha & Culinária",
    icone: "🍳",
    descricao: "Dotes culinários, receitas e desastres.",
    subcategorias: [
      {
        id: "sub_21_0",
        nome: "Desastres na Cozinha",
        perguntas: [
          {
            id: "p_21_0_0",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_21_0_1",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_21_0_2",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_21_0_3",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_21_0_4",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_21_0_5",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_21_0_6",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_21_0_7",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_21_0_8",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_21_0_9",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_21_0_10",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_21_0_11",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_21_0_12",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_21_0_13",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_21_0_14",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_21_0_15",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_21_0_16",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_21_0_17",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_21_0_18",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_21_0_19",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
        ]
      },
      {
        id: "sub_21_1",
        nome: "Pratos de Assinatura",
        perguntas: [
          {
            id: "p_21_1_0",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_21_1_1",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_21_1_2",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_21_1_3",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_21_1_4",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_21_1_5",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_21_1_6",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_21_1_7",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_21_1_8",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_21_1_9",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_21_1_10",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_21_1_11",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_21_1_12",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_21_1_13",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_21_1_14",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_21_1_15",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_21_1_16",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_21_1_17",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_21_1_18",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_21_1_19",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_22",
    nome: "Jogos & Videojogos",
    icone: "🎮",
    descricao: "Consolas, jogos de tabuleiro e mobile.",
    subcategorias: [
      {
        id: "sub_22_0",
        nome: "Vício nas Consolas",
        perguntas: [
          {
            id: "p_22_0_0",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_22_0_1",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_22_0_2",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_22_0_3",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_0_4",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_22_0_5",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_22_0_6",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_0_7",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_0_8",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_22_0_9",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_0_10",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_0_11",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_0_12",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_22_0_13",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_0_14",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_22_0_15",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_22_0_16",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_22_0_17",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_22_0_18",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_22_0_19",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
      {
        id: "sub_22_1",
        nome: "Jogos de Tabuleiro",
        perguntas: [
          {
            id: "p_22_1_0",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_22_1_1",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_22_1_2",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_22_1_3",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_1_4",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_1_5",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_1_6",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_22_1_7",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_1_8",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_22_1_9",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_22_1_10",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_22_1_11",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_22_1_12",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_1_13",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_22_1_14",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_22_1_15",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_22_1_16",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_22_1_17",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_22_1_18",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_22_1_19",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_23",
    nome: "Livros & Leitura",
    icone: "📚",
    descricao: "Romances, thrillers e banda desenhada.",
    subcategorias: [
      {
        id: "sub_23_0",
        nome: "Hábitos de Leitura",
        perguntas: [
          {
            id: "p_23_0_0",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_23_0_1",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_23_0_2",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_23_0_3",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_23_0_4",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_23_0_5",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_0_6",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_23_0_7",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_23_0_8",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_23_0_9",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_23_0_10",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_0_11",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_23_0_12",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_23_0_13",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_23_0_14",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_0_15",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_0_16",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_23_0_17",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_23_0_18",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_0_19",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
      {
        id: "sub_23_1",
        nome: "Livros Favoritos",
        perguntas: [
          {
            id: "p_23_1_0",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_1_1",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_23_1_2",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_23_1_3",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_1_4",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_23_1_5",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_23_1_6",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_23_1_7",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_1_8",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_23_1_9",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_23_1_10",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_23_1_11",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_1_12",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_1_13",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_23_1_14",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_1_15",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_23_1_16",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_23_1_17",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_23_1_18",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_23_1_19",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_24",
    nome: "Beleza & Cuidados",
    icone: "💅",
    descricao: "Skincare, cabelo e maquilhagem.",
    subcategorias: [
      {
        id: "sub_24_0",
        nome: "Rotinas de Skincare",
        perguntas: [
          {
            id: "p_24_0_0",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_24_0_1",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_24_0_2",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_24_0_3",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_24_0_4",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_24_0_5",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_24_0_6",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_24_0_7",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_24_0_8",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_24_0_9",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_24_0_10",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_24_0_11",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_24_0_12",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_24_0_13",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_24_0_14",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_24_0_15",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_24_0_16",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_24_0_17",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_24_0_18",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_24_0_19",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
      {
        id: "sub_24_1",
        nome: "Cabelo e Maquilhagem",
        perguntas: [
          {
            id: "p_24_1_0",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_24_1_1",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_24_1_2",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_24_1_3",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_24_1_4",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_24_1_5",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_24_1_6",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_24_1_7",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_24_1_8",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_24_1_9",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_24_1_10",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_24_1_11",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_24_1_12",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_24_1_13",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_24_1_14",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_24_1_15",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_24_1_16",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_24_1_17",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_24_1_18",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_24_1_19",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_25",
    nome: "Música & Concertos",
    icone: "🎸",
    descricao: "Bandas, festivais e estilos musicais.",
    subcategorias: [
      {
        id: "sub_25_0",
        nome: "Gostos Musicais",
        perguntas: [
          {
            id: "p_25_0_0",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_25_0_1",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_25_0_2",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_25_0_3",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_25_0_4",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_25_0_5",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_25_0_6",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_25_0_7",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_25_0_8",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_25_0_9",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_25_0_10",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_25_0_11",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_25_0_12",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_25_0_13",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_25_0_14",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_25_0_15",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_25_0_16",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_25_0_17",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_25_0_18",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_25_0_19",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
        ]
      },
      {
        id: "sub_25_1",
        nome: "Loucuras em Festivais",
        perguntas: [
          {
            id: "p_25_1_0",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_25_1_1",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_25_1_2",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_25_1_3",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_25_1_4",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_25_1_5",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_25_1_6",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_25_1_7",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_25_1_8",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_25_1_9",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_25_1_10",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_25_1_11",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_25_1_12",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_25_1_13",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_25_1_14",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_25_1_15",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_25_1_16",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_25_1_17",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_25_1_18",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_25_1_19",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_26",
    nome: "Desastres & Gafes",
    icone: "🤦",
    descricao: "Situações embaraçosas e erros cónicos.",
    subcategorias: [
      {
        id: "sub_26_0",
        nome: "Momentos Embaraçosos",
        perguntas: [
          {
            id: "p_26_0_0",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_26_0_1",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_26_0_2",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_26_0_3",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_26_0_4",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_26_0_5",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_26_0_6",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_26_0_7",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_26_0_8",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_26_0_9",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_26_0_10",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_26_0_11",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_26_0_12",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_26_0_13",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_26_0_14",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_26_0_15",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_26_0_16",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_26_0_17",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_26_0_18",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_26_0_19",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
      {
        id: "sub_26_1",
        nome: "Erros a Falar",
        perguntas: [
          {
            id: "p_26_1_0",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_26_1_1",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_26_1_2",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_26_1_3",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_26_1_4",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_26_1_5",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_26_1_6",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_26_1_7",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_26_1_8",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_26_1_9",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_26_1_10",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_26_1_11",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_26_1_12",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_26_1_13",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_26_1_14",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_26_1_15",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_26_1_16",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_26_1_17",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_26_1_18",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_26_1_19",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_27",
    nome: "Sonhos & Futuro",
    icone: "✨",
    descricao: "Onde me vejo daqui a 10 anos.",
    subcategorias: [
      {
        id: "sub_27_0",
        nome: "Objetivos de Vida",
        perguntas: [
          {
            id: "p_27_0_0",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_27_0_1",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_27_0_2",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_27_0_3",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_27_0_4",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_27_0_5",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_27_0_6",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_27_0_7",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_27_0_8",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_27_0_9",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_27_0_10",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_27_0_11",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_27_0_12",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_27_0_13",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_27_0_14",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_27_0_15",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_27_0_16",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_27_0_17",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_27_0_18",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_27_0_19",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
        ]
      },
      {
        id: "sub_27_1",
        nome: "Sonhos por Realizar",
        perguntas: [
          {
            id: "p_27_1_0",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_27_1_1",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_27_1_2",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_27_1_3",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_27_1_4",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_27_1_5",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_27_1_6",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_27_1_7",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_27_1_8",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_27_1_9",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_27_1_10",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_27_1_11",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_27_1_12",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_27_1_13",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_27_1_14",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_27_1_15",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_27_1_16",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_27_1_17",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_27_1_18",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_27_1_19",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_28",
    nome: "Televisão & Reality Shows",
    icone: "📺",
    descricao: "Programas, novelas e fofocas.",
    subcategorias: [
      {
        id: "sub_28_0",
        nome: "Vício em Reality Shows",
        perguntas: [
          {
            id: "p_28_0_0",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_28_0_1",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_28_0_2",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_28_0_3",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_28_0_4",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_28_0_5",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_28_0_6",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_28_0_7",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_28_0_8",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_28_0_9",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_28_0_10",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_28_0_11",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_28_0_12",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_28_0_13",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_28_0_14",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_28_0_15",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_28_0_16",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_28_0_17",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_28_0_18",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_28_0_19",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
      {
        id: "sub_28_1",
        nome: "Novelas Antigas",
        perguntas: [
          {
            id: "p_28_1_0",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_28_1_1",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_28_1_2",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_28_1_3",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_28_1_4",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_28_1_5",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_28_1_6",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_28_1_7",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_28_1_8",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_28_1_9",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_28_1_10",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_28_1_11",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_28_1_12",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_28_1_13",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_28_1_14",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_28_1_15",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_28_1_16",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_28_1_17",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_28_1_18",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_28_1_19",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_29",
    nome: "Estudos & Escola",
    icone: "🎒",
    descricao: "Testes, professores e cábulas.",
    subcategorias: [
      {
        id: "sub_29_0",
        nome: "Cábulas e Truques",
        perguntas: [
          {
            id: "p_29_0_0",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_29_0_1",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_29_0_2",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_29_0_3",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_29_0_4",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_29_0_5",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_29_0_6",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_29_0_7",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_29_0_8",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_29_0_9",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_29_0_10",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_29_0_11",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_29_0_12",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_29_0_13",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_29_0_14",
            texto: "O que é que eu prefiro comer ao fim de semana?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_29_0_15",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_29_0_16",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_29_0_17",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_29_0_18",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_29_0_19",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
        ]
      },
      {
        id: "sub_29_1",
        nome: "Testes e Exames",
        perguntas: [
          {
            id: "p_29_1_0",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_29_1_1",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_29_1_2",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_29_1_3",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_29_1_4",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_29_1_5",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_29_1_6",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_29_1_7",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_29_1_8",
            texto: "O que é que me tira do sério no supermercado?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_29_1_9",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_29_1_10",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_29_1_11",
            texto: "O que é que me tira do sério num restaurante?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_29_1_12",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_29_1_13",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_29_1_14",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_29_1_15",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_29_1_16",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_29_1_17",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_29_1_18",
            texto: "O que é que eu prefiro vestir num primeiro encontro?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_29_1_19",
            texto: "O que é que eu faço sempre quando entro no carro?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
        ]
      },
    ]
  },
  {
    id: "cat_classico_30",
    nome: "Humor & Comédia",
    icone: "😂",
    descricao: "Piadas, memes e o que me faz rir.",
    subcategorias: [
      {
        id: "sub_30_0",
        nome: "Consumo de Memes",
        perguntas: [
          {
            id: "p_30_0_0",
            texto: "O que é que eu faço sempre antes de ir dormir?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_30_0_1",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_30_0_2",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_30_0_3",
            texto: "O que é que eu prefiro ver na televisão depois de jantar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_30_0_4",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_30_0_5",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_30_0_6",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_30_0_7",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_30_0_8",
            texto: "Qual é o meu maior talento escondido?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_30_0_9",
            texto: "Qual é o meu maior sonho de infância?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_30_0_10",
            texto: "O que é que me tira do sério nas redes sociais?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_30_0_11",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_30_0_12",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_30_0_13",
            texto: "O que é que eu prefiro fazer num dia de chuva?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_30_0_14",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_30_0_15",
            texto: "Qual é o meu maior medo inconfessável?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_30_0_16",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_30_0_17",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_30_0_18",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_30_0_19",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
        ]
      },
      {
        id: "sub_30_1",
        nome: "Ataques de Riso",
        perguntas: [
          {
            id: "p_30_1_0",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_30_1_1",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_30_1_2",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_30_1_3",
            texto: "O que é que eu prefiro beber numa saída à noite?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_30_1_4",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_30_1_5",
            texto: "O que é que eu faço sempre quando estou stressado/a?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_30_1_6",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_30_1_7",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Chorar", "Rir nervosamente", "Ignorar", "Enfrentar o problema"]
          },
          {
            id: "p_30_1_8",
            texto: "O que é que me tira do sério quando estou a trabalhar?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_30_1_9",
            texto: "Qual é a minha reação quando alguém me mente?",
            opcoes: ["Sempre", "Às vezes", "Quase nunca", "Nunca na vida"]
          },
          {
            id: "p_30_1_10",
            texto: "O que é que eu faço sempre quando chego a casa?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_30_1_11",
            texto: "Qual é a minha reação quando fico sem internet?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_30_1_12",
            texto: "Qual é a minha reação quando me pisam o pé?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_30_1_13",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_30_1_14",
            texto: "O que é que eu faço sempre logo de manhã ao acordar?",
            opcoes: ["Falar sem parar", "Ficar calado/a e isolar-me", "Mudar de assunto", "Fazer uma piada"]
          },
          {
            id: "p_30_1_15",
            texto: "O que é que me tira do sério no trânsito?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_30_1_16",
            texto: "Qual é o meu maior guilty pleasure?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
          {
            id: "p_30_1_17",
            texto: "Qual é o meu maior defeito segundo os meus amigos?",
            opcoes: ["Comprar roupa", "Jantar fora", "Poupar o dinheiro", "Gastar em tecnologia"]
          },
          {
            id: "p_30_1_18",
            texto: "Qual é a minha reação quando recebo uma boa notícia?",
            opcoes: ["Pizza", "Sushi", "Hambúrguer", "Comida Caseira"]
          },
          {
            id: "p_30_1_19",
            texto: "Qual é a minha reação quando vejo uma aranha?",
            opcoes: ["Ficar em casa", "Sair com amigos", "Dar um passeio sozinho/a", "Ir dormir"]
          },
        ]
      },
    ]
  },
];
