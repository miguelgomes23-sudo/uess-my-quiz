import { PerguntaTermometro } from "@/types/catalogo";

export const termometro_carros_conducao: Record<string, PerguntaTermometro[]> = {
  "sub_16_0": [ // Hábitos ao Volante
    { id: "tm_cc_h_01", texto: "A que velocidade (em km/h) considero estar na minha zona de conforto a conduzir na autoestrada?", min: 80, max: 180, unidade: "km/h" },
    { id: "tm_cc_h_02", texto: "Numa escala de 0 a 10, qual é o meu nível de agressividade a insultar (mesmo que com os vidros fechados) outros condutores?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_h_03", texto: "Quantas vezes deixo o carro ir à reserva de combustível limite (luz a piscar) antes de atestar?", min: 0, max: 10, unidade: "Vezes/Mês" },
    { id: "tm_cc_h_04", texto: "Qual a percentagem (0-100%) das vezes que conduzo só com uma mão no volante na parte de baixo?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_h_05", texto: "Quantos centímetros de distância confio deixar do passeio quando estou a tentar estacionar a paralela?", min: 1, max: 50, unidade: "cm" },
    { id: "tm_cc_h_06", texto: "Numa escala de 0 a 10, quão desesperado e stressado(a) eu fico no para-arranca das pontes às 18h?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_h_07", texto: "Quantas moedas do troco do supermercado andam a chocalhar soltas nos compartimentos do meu carro?", min: 0, max: 100, unidade: "Moedas" },
    { id: "tm_cc_h_08", texto: "Qual o nível (0-100) do volume do rádio/Spotify quando vou a conduzir sozinho(a) a cantar?", min: 10, max: 100, unidade: "Volume" },
    { id: "tm_cc_h_09", texto: "Quantas manobras (para a frente e para trás) demoro, em média, a conseguir meter o carro num lugar apertado?", min: 1, max: 10, unidade: "Manobras" },
    { id: "tm_cc_h_10", texto: "Qual a probabilidade (0-100%) de eu tentar abafar um barulho suspeito do motor apenas aumentando a música?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_h_11", texto: "Numa escala de 0 a 10, quão obsessivo(a) sou com o limpar e não comer dentro do meu carro?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_h_12", texto: "Quantos quilómetros contínuos aguento fazer numa viagem (ex: ir ao Algarve) sem parar para um café/WC?", min: 50, max: 600, unidade: "km" },
    { id: "tm_cc_h_13", texto: "Até quantos euros aceito pagar numa inspeção/revisão antes de achar que o mecânico me está a enganar?", min: 50, max: 1000, unidade: "Euros" },
    { id: "tm_cc_h_14", texto: "Qual a percentagem (0-100%) de vezes que faço a rotunda pela via de fora desde o início de forma muito duvidosa?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_h_15", texto: "Quantas vezes dou por mim a julgar e mandar vir com malta que vai a 60km/h na via do meio da autoestrada?", min: 0, max: 50, unidade: "Vezes/Mês" },
    { id: "tm_cc_h_16", texto: "Numa escala de 0 a 10, quão bom(a) mestre do 'ponto de embraiagem' eu sou em subidas íngremes sem travar?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_h_17", texto: "Quantos meses sou capaz de andar sem lavar o exterior do carro se ninguém me julgar publicamente?", min: 1, max: 12, unidade: "Meses" },
    { id: "tm_cc_h_18", texto: "Qual a probabilidade (0-100%) de eu dizer 'Eu sei o caminho!' e acabar completamente perdido(a) sem o GPS?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_h_19", texto: "Quantos lugares de estacionamento 'bons' eu recuso porque sinto que não vou caber lá?", min: 0, max: 10, unidade: "Lugares" },
    { id: "tm_cc_h_20", texto: "Numa escala de 0 a 10, quão enjoado(a) e péssimo pendura eu sou se for outra pessoa a conduzir e com solavancos?", min: 0, max: 10, unidade: "Escala" }
  ],
  "sub_16_1": [ // Peripécias na Estrada
    { id: "tm_cc_p_01", texto: "Quantas multas de excesso de velocidade apanhei e escondi da família a minha vida toda?", min: 0, max: 15, unidade: "Multas" },
    { id: "tm_cc_p_02", texto: "Qual a probabilidade (0-100%) de eu tentar dar uma desculpa muito elaborada a um Polícia numa Operação STOP?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_p_03", texto: "Numa escala de 0 a 10, quão alto bate o meu coração quando vejo as luzes de um carro patrulha no retrovisor?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_p_04", texto: "Quantas vezes já raspei com as jantes de liga leve num passeio ao tentar parar rente?", min: 0, max: 50, unidade: "Vezes" },
    { id: "tm_cc_p_05", texto: "Quantos toques ou 'bate-chapas' minúsculos em parques de estacionamento eu assumo já ter dado na vida?", min: 0, max: 20, unidade: "Toques" },
    { id: "tm_cc_p_06", texto: "Qual a percentagem (0-100%) do meu medo de passar pela famosa 'Ponte 25 de Abril' ou 'Ponte Vasco da Gama' a guiar?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_p_07", texto: "Quantas vezes o meu carro 'morreu' e foi abaixo no dia do exame de condução (ou no primeiro ano de carta)?", min: 0, max: 20, unidade: "Vezes" },
    { id: "tm_cc_p_08", texto: "Numa escala de 0 a 10, quão cego(a) e perdido(a) fico a conduzir num dia de nevoeiro cerrado ou chuva torrencial?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_p_09", texto: "Quantas vezes atirei pragas aos deuses por deixar passar o tempo do parquímetro e apanhar o papel amarelo no vidro?", min: 0, max: 30, unidade: "Multas EMEL" },
    { id: "tm_cc_p_10", texto: "Qual o limite em cêntimos (ex: 20 cêntimos) que recuso pagar numa portagem e meto o GPS em 'evitar portagens'?", min: 50, max: 5000, unidade: "Cêntimos" },
    { id: "tm_cc_p_11", texto: "Quantos furos ou mudanças de pneu no meio do nada já tive de fazer com as minhas próprias mãos?", min: 0, max: 10, unidade: "Furos" },
    { id: "tm_cc_p_12", texto: "Numa escala de 0 a 100%, quão paranóico fico a olhar para o espelho a ver se o camião atrás de mim vai travar a tempo?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_p_13", texto: "Quantos anos tinha quando a minha família ou amigos confiaram em mim pela primeira vez para conduzir longas distâncias?", min: 18, max: 40, unidade: "Anos" },
    { id: "tm_cc_p_14", texto: "Qual a probabilidade (0-100%) de me esquecer onde estacionei o carro na garagem de um centro comercial gigante?", min: 0, max: 100, unidade: "%" },
    { id: "tm_cc_p_15", texto: "Quantas buzinadelas agressivas costumo ouvir por mês de outras pessoas por estar distraído(a) no verde do semáforo?", min: 0, max: 15, unidade: "Buzinadelas" },
    { id: "tm_cc_p_16", texto: "Numa escala de 0 a 10, o quão humilhante é ter de pedir ajuda a um desconhecido porque fiquei sem bateria no carro?", min: 0, max: 10, unidade: "Escala" },
    { id: "tm_cc_p_17", texto: "Quantas vezes a luz do motor (check engine) acendeu e eu ignorei achando que era 'apenas um mau contacto'?", min: 0, max: 20, unidade: "Vezes" },
    { id: "tm_cc_p_18", texto: "Qual o valor absurdo (em euros) que daria hoje para nunca mais ter de lidar com trânsito de hora de ponta na minha vida?", min: 100, max: 100000, unidade: "Euros" },
    { id: "tm_cc_p_19", texto: "Quantas rotundas ou saídas eu falho por ano porque ia desatento(a) a ouvir a música a cantar?", min: 0, max: 30, unidade: "Saídas" },
    { id: "tm_cc_p_20", texto: "Numa escala de 0 a 10, quão corajoso(a) sou a descer rampas de garagens incrivelmente apertadas e a pique?", min: 0, max: 10, unidade: "Escala" }
  ]
};
