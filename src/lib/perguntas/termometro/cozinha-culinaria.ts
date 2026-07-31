import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_cozinha_culinaria: Record<string, PerguntaTermometro[]> = {
  "sub_21_0": [ // Aventuras no Fogão
    { id: "tm_cc_a_01", texto: "Qual a percentagem (0-100%) de vezes que deixo a comida queimar ou colar no fundo do tacho por distração?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_a_02", texto: "Quantas panelas e utensílios diferentes sou capaz de sujar só para fazer uma refeição super simples?", min: 1, max: 15, unidade: "Peças sujas" },
    { id: "tm_cc_a_03", texto: "Numa escala de 0 a 10, o quão perigoso e desastrado eu sou a tentar virar uma panqueca ou omelete no ar?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_a_04", texto: "Quantos minutos aguento a cortar cebola antes de ter de me afastar a chorar baba e ranho?", min: 1, max: 10, unidade: "Minutos" },
    { id: "tm_cc_a_05", texto: "Qual a probabilidade (0-100%) de eu seguir uma receita passo-a-passo sem tentar inventar ingredientes a meio?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_a_06", texto: "Quantos alarmes ou temporizadores tenho de colocar no telemóvel para não me esquecer do bolo no forno?", min: 0, max: 5, unidade: "Alarmes" },
    { id: "tm_cc_a_07", texto: "Numa escala de 0 a 10, o quão irritável e possessivo eu fico se alguém entrar na cozinha e der palpites enquanto eu cozinho?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_a_08", texto: "Quantos dias deixo os tupperwares com restos 'esquecidos' no fundo do frigorífico até ganharem vida própria?", min: 1, max: 20, unidade: "Dias" },
    { id: "tm_cc_a_09", texto: "Qual a percentagem das minhas refeições da semana que baseiam-se puramente em massas ou ovos porque é mais fácil?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_a_10", texto: "Quantos euros calculo já ter gasto em pequenos eletrodomésticos de cozinha (ex: máquina de waffles) que usei apenas 2 vezes?", min: 0, max: 500, unidade: "Euros" },
    { id: "tm_cc_a_11", texto: "Numa escala de 0 a 10, quão intenso é o meu ódio e pavor aos salpicos de óleo quente a fritar coisas?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_a_12", texto: "Qual a probabilidade (0-100%) de eu mandar vir comida de fora logo a seguir a ter estragado ou salgado demasiado o meu jantar?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_a_13", texto: "Quantas vezes provo a comida da panela com a mesma colher antes de a servir aos outros (e achar higiénico)?", min: 0, max: 10, unidade: "Vezes" },
    { id: "tm_cc_a_14", texto: "A que percentagem (0-100%) confio no meu instinto do 'a olho' em vez de usar a balança de cozinha nos bolos?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_a_15", texto: "Quantos pratos e panelas sou capaz de acumular de molho 'porque a gordura tem de sair bem' antes de os lavar?", min: 0, max: 20, unidade: "Peças" },
    { id: "tm_cc_a_16", texto: "Numa escala de 0 a 10, o quão enojado(a) eu fico se tiver de arranjar ou limpar peixe/carne cheia de sangue e espinhas?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_a_17", texto: "Qual a minha capacidade (0-100%) de fazer um jantar apresentável se um grupo de amigos me aparecer em casa de surpresa?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_a_18", texto: "Quantas vezes por ano tento cozinhar um prato super chique de MasterChef e o aspeto final fica digno de pena?", min: 0, max: 15, unidade: "Vezes" },
    { id: "tm_cc_a_19", texto: "Numa escala de 0 a 10, quão paranóico(a) eu sou com o facto de o frango ainda estar cru por dentro?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_a_20", texto: "Quantas queimaduras pequenas ou cortes com facas tenho nas mãos por mês derivado às minhas 'artes' na cozinha?", min: 0, max: 10, unidade: "Cortes/Queimaduras" }
  ],
  "sub_21_1": [ // Refeições e Gostos
    { id: "tm_cc_r_01", texto: "Numa escala de 0 a 10, quão esquisito e chato(a) sou com a remoção de gorduras, nervos e peles da carne que estou a comer?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_r_02", texto: "Quantas vezes sou capaz de repetir o mesmo prato na mesa se a comida estiver absolutamente deliciosa?", min: 0, max: 4, unidade: "Vezes" },
    { id: "tm_cc_r_03", texto: "Qual a percentagem (0-100%) de vezes que eu encho o prato com tanta comida que depois não consigo chegar ao fim?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_r_04", texto: "Quantos pacotinhos de ketchup/maionese exijo roubar e trazer do McDonald's para guardar na porta do frigorífico?", min: 0, max: 20, unidade: "Pacotes" },
    { id: "tm_cc_r_05", texto: "Qual a probabilidade (0-100%) de eu dizer 'Ah, isso não gosto' a uma comida que eu nunca provei na vida?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_r_06", texto: "Numa escala de 0 a 10, qual o meu amor profundo e irracional por juntar queijo derretido em absolutamente tudo?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_r_07", texto: "Quantos dias seguidos eu seria capaz de comer a mesma exata comida (ex: lasanha) sem enjoar?", min: 1, max: 14, unidade: "Dias" },
    { id: "tm_cc_r_08", texto: "A que percentagem sinto que o acompanhamento (batatas fritas, puré, arroz) é sempre melhor que o prato principal?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_r_09", texto: "Quantas colheres do meu doce favorito consigo devorar sorrateiramente do frasco no frigorífico a meio da noite?", min: 1, max: 10, unidade: "Colheres" },
    { id: "tm_cc_r_10", texto: "Numa escala de 0 a 10, quão stressado e raivoso eu fico se a comida encomendada vier fria ou com coisas trocadas?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_r_11", texto: "Até que idade eu confesso ter feito autênticas fitas e birras para comer legumes verdes (brócolos, espinafres)?", min: 5, max: 30, unidade: "Anos" },
    { id: "tm_cc_r_12", texto: "Qual a probabilidade (0-100%) de eu trincar as unhas se alguém me oferecer um misto de doce com salgado (ex: piza de ananás)?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_r_13", texto: "Quantas garfadas secretas atiro ao prato da pessoa à minha frente num restaurante porque a comida dela tem melhor aspeto?", min: 0, max: 10, unidade: "Garfadas" },
    { id: "tm_cc_r_14", texto: "Numa escala de 0 a 10, quão forte é a minha alergia ou aversão aos coentros e condimentos demasiado fortes?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_r_15", texto: "Quantos euros a mais do que o normal eu aceito pagar sem pestanejar por um bife servido na famosa 'pedra a ferver'?", min: 5, max: 50, unidade: "Euros Extra" },
    { id: "tm_cc_r_16", texto: "A percentagem do pão/couvert que devoro no restaurante antes do prato chegar, ficando logo sem fome?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_r_17", texto: "Numa escala de 0 a 10, quão embaraçoso(a) sou ao comer asas de frango, cachorros ou marisco com as mãos sujas na rua?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_r_18", texto: "Quantos dias da semana o meu pequeno-almoço consiste em absolutamente nada a não ser um café mal bebido a correr?", min: 0, max: 7, unidade: "Dias" },
    { id: "tm_cc_r_19", texto: "Qual a probabilidade (0-100%) de eu ter dores de barriga porque juntei comidas e misturas terríveis no estômago?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_r_20", texto: "Quantos anos durou a minha fase mais picuinhas onde eu comia apenas e exclusivamente batatas fritas e panados na rua?", min: 1, max: 20, unidade: "Anos" }
  ]
};
