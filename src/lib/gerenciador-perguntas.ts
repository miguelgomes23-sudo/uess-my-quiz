import { ESTRUTURA_CATEGORIAS } from "./estrutura-categorias";

// --- IMPORTS LACUNA ---
import { lacuna_vida_pessoal } from "./perguntas/lacuna/vida-pessoal";
import { lacuna_comida_bebida } from "./perguntas/lacuna/comida-bebida";
import { lacuna_relacionamentos } from "./perguntas/lacuna/relacionamentos";
import { lacuna_cultura_lazer } from "./perguntas/lacuna/cultura-lazer";
import { lacuna_viagens_ferias } from "./perguntas/lacuna/viagens-ferias";
import { lacuna_trabalho_carreira } from "./perguntas/lacuna/trabalho-carreira";
import { lacuna_passado_infancia } from "./perguntas/lacuna/passado-infancia";
import { lacuna_personalidade } from "./perguntas/lacuna/personalidade";
import { lacuna_desporto_fitness } from "./perguntas/lacuna/desporto-fitness";
import { lacuna_tecnologia } from "./perguntas/lacuna/tecnologia";
import { lacuna_dinheiro_compras } from "./perguntas/lacuna/dinheiro-compras";
import { lacuna_casa_decoracao } from "./perguntas/lacuna/casa-decoracao";
import { lacuna_festa_noite } from "./perguntas/lacuna/festa-noite";
import { lacuna_animais_estimacao } from "./perguntas/lacuna/animais-estimacao";
import { lacuna_dilemas_cenarios } from "./perguntas/lacuna/dilemas-cenarios";
import { lacuna_moda_estilo } from "./perguntas/lacuna/moda-estilo";
import { lacuna_carros_conducao } from "./perguntas/lacuna/carros-conducao";
import { lacuna_saude_bem_estar } from "./perguntas/lacuna/saude-bem-estar";
import { lacuna_natureza_ar_livre } from "./perguntas/lacuna/natureza-ar-livre";
import { lacuna_artes_criatividade } from "./perguntas/lacuna/artes-criatividade";
import { lacuna_supersticoes_crencas } from "./perguntas/lacuna/supersticoes-crencas";
import { lacuna_cozinha_culinaria } from "./perguntas/lacuna/cozinha-culinaria";
import { lacuna_jogos_videojogos } from "./perguntas/lacuna/jogos-videojogos";
import { lacuna_livros_leitura } from "./perguntas/lacuna/livros-leitura";
import { lacuna_beleza_cuidados } from "./perguntas/lacuna/beleza-cuidados";
import { lacuna_musica_concertos } from "./perguntas/lacuna/musica-concertos";
import { lacuna_desastres_gafes } from "./perguntas/lacuna/desastres-gafes";
import { lacuna_sonhos_futuro } from "./perguntas/lacuna/sonhos-futuro";
import { lacuna_televisao_reality_shows } from "./perguntas/lacuna/televisao-reality-shows";
import { lacuna_estudos_escola } from "./perguntas/lacuna/estudos-escola";
import { lacuna_humor_comedia } from "./perguntas/lacuna/humor-comedia";

// --- IMPORTS TOP 3 ---
import { top3_vida_pessoal } from "./perguntas/top3/vida-pessoal";
import { top3_comida_bebida } from "./perguntas/top3/comida-bebida";
import { top3_relacionamentos } from "./perguntas/top3/relacionamentos";
import { top3_cultura_lazer } from "./perguntas/top3/cultura-lazer";
import { top3_viagens_ferias } from "./perguntas/top3/viagens-ferias";
import { top3_trabalho_carreira } from "./perguntas/top3/trabalho-carreira";
import { top3_passado_infancia } from "./perguntas/top3/passado-infancia";
import { top3_personalidade } from "./perguntas/top3/personalidade";
import { top3_desporto_fitness } from "./perguntas/top3/desporto-fitness";
import { top3_tecnologia } from "./perguntas/top3/tecnologia";
import { top3_dinheiro_compras } from "./perguntas/top3/dinheiro-compras";
import { top3_casa_decoracao } from "./perguntas/top3/casa-decoracao";
import { top3_festa_noite } from "./perguntas/top3/festa-noite";
import { top3_animais_estimacao } from "./perguntas/top3/animais-estimacao";
import { top3_dilemas_cenarios } from "./perguntas/top3/dilemas-cenarios";
import { top3_moda_estilo } from "./perguntas/top3/moda-estilo";
import { top3_carros_conducao } from "./perguntas/top3/carros-conducao";
import { top3_saude_bem_estar } from "./perguntas/top3/saude-bem-estar";
import { top3_natureza_ar_livre } from "./perguntas/top3/natureza-ar-livre";
import { top3_artes_criatividade } from "./perguntas/top3/artes-criatividade";
import { top3_supersticoes_crencas } from "./perguntas/top3/supersticoes-crencas";
import { top3_cozinha_culinaria } from "./perguntas/top3/cozinha-culinaria";
import { top3_jogos_videojogos } from "./perguntas/top3/jogos-videojogos";
import { top3_livros_leitura } from "./perguntas/top3/livros-leitura";
import { top3_beleza_cuidados } from "./perguntas/top3/beleza-cuidados";
import { top3_musica_concertos } from "./perguntas/top3/musica-concertos";
import { top3_desastres_gafes } from "./perguntas/top3/desastres-gafes";
import { top3_sonhos_futuro } from "./perguntas/top3/sonhos-futuro";
import { top3_televisao_reality } from "./perguntas/top3/televisao-reality";
import { top3_estudos_escola } from "./perguntas/top3/estudos-escola";
import { top3_humor_comedia } from "./perguntas/top3/humor-comedia";

// --- IMPORTS CLÁSSICO ---
import { classico_vida_pessoal } from "./perguntas/classico/vida-pessoal";
import { classico_comida_bebida } from "./perguntas/classico/comida-bebida";
import { classico_relacionamentos } from "./perguntas/classico/relacionamentos";
import { classico_cultura_lazer } from "./perguntas/classico/cultura-lazer";
import { classico_viagens_ferias } from "./perguntas/classico/viagens-ferias";
import { classico_trabalho_carreira } from "./perguntas/classico/trabalho-carreira";
import { classico_passado_infancia } from "./perguntas/classico/passado-infancia";
import { classico_personalidade } from "./perguntas/classico/personalidade";
import { classico_desporto_fitness } from "./perguntas/classico/desporto-fitness";
import { classico_tecnologia } from "./perguntas/classico/tecnologia";
import { classico_dinheiro_compras } from "./perguntas/classico/dinheiro-compras";
import { classico_casa_decoracao } from "./perguntas/classico/casa-decoracao";
import { classico_festa_noite } from "./perguntas/classico/festa-noite";
import { classico_animais_estimacao } from "./perguntas/classico/animais-estimacao";
import { classico_dilemas_cenarios } from "./perguntas/classico/dilemas-cenarios";
import { classico_moda_estilo } from "./perguntas/classico/moda-estilo";
import { classico_carros_conducao } from "./perguntas/classico/carros-conducao";
import { classico_saude_bem_estar } from "./perguntas/classico/saude-bem-estar";
import { classico_natureza_ar_livre } from "./perguntas/classico/natureza-ar-livre";
import { classico_artes_criatividade } from "./perguntas/classico/artes-criatividade";
import { classico_supersticoes_crencas } from "./perguntas/classico/supersticoes-crencas";
import { classico_cozinha_culinaria } from "./perguntas/classico/cozinha-culinaria";
import { classico_jogos_videojogos } from "./perguntas/classico/jogos-videojogos";
import { classico_livros_leitura } from "./perguntas/classico/livros-leitura";
import { classico_beleza_cuidados } from "./perguntas/classico/beleza-cuidados";
import { classico_musica_concertos } from "./perguntas/classico/musica-concertos";
import { classico_desastres_gafes } from "./perguntas/classico/desastres-gafes";
import { classico_sonhos_futuro } from "./perguntas/classico/sonhos-futuro";
import { classico_televisao_reality_shows } from "./perguntas/classico/televisao-reality-shows";
import { classico_estudos_escola } from "./perguntas/classico/estudos-escola";
import { classico_humor_comedia } from "./perguntas/classico/humor-comedia";

// --- IMPORTS FACTO OU FAKE ---
import { facto_fake_vida_pessoal } from "./perguntas/facto-fake/vida-pessoal";
import { facto_fake_comida_bebida } from "./perguntas/facto-fake/comida-bebida";
import { facto_fake_relacionamentos } from "./perguntas/facto-fake/relacionamentos";
import { facto_fake_cultura_lazer } from "./perguntas/facto-fake/cultura-lazer";
import { facto_fake_viagens_ferias } from "./perguntas/facto-fake/viagens-ferias";
import { facto_fake_trabalho_carreira } from "./perguntas/facto-fake/trabalho-carreira";
import { facto_fake_passado_infancia } from "./perguntas/facto-fake/passado-infancia";
import { facto_fake_personalidade } from "./perguntas/facto-fake/personalidade";
import { facto_fake_desporto_fitness } from "./perguntas/facto-fake/desporto-fitness";
import { facto_fake_tecnologia } from "./perguntas/facto-fake/tecnologia";
import { facto_fake_dinheiro_compras } from "./perguntas/facto-fake/dinheiro-compras";
import { facto_fake_casa_decoracao } from "./perguntas/facto-fake/casa-decoracao";
import { facto_fake_festa_noite } from "./perguntas/facto-fake/festa-noite";
import { facto_fake_animais_estimacao } from "./perguntas/facto-fake/animais-estimacao";
import { facto_fake_dilemas_cenarios } from "./perguntas/facto-fake/dilemas-cenarios";
import { facto_fake_moda_estilo } from "./perguntas/facto-fake/moda-estilo";
import { facto_fake_carros_conducao } from "./perguntas/facto-fake/carros-conducao";
import { facto_fake_saude_bem_estar } from "./perguntas/facto-fake/saude-bem-estar";
import { facto_fake_natureza_ar_livre } from "./perguntas/facto-fake/natureza-ar-livre";
import { facto_fake_artes_criatividade } from "./perguntas/facto-fake/artes-criatividade";
import { facto_fake_supersticoes_crencas } from "./perguntas/facto-fake/supersticoes-crencas";
import { facto_fake_cozinha_culinaria } from "./perguntas/facto-fake/cozinha-culinaria";
import { facto_fake_jogos_videojogos } from "./perguntas/facto-fake/jogos-videojogos";
import { facto_fake_livros_leitura } from "./perguntas/facto-fake/livros-leitura";
import { facto_fake_beleza_cuidados } from "./perguntas/facto-fake/beleza-cuidados";
import { facto_fake_musica_concertos } from "./perguntas/facto-fake/musica-concertos";
import { facto_fake_desastres_gafes } from "./perguntas/facto-fake/desastres-gafes";
import { facto_fake_sonhos_futuro } from "./perguntas/facto-fake/sonhos-futuro";
import { facto_fake_televisao_reality_shows } from "./perguntas/facto-fake/televisao-reality-shows";
import { facto_fake_estudos_escola } from "./perguntas/facto-fake/estudos-escola";
import { facto_fake_humor_comedia } from "./perguntas/facto-fake/humor-comedia";

// --- IMPORTS ESTE OU AQUELE ---
import { este_aquele_vida_pessoal } from "./perguntas/este-aquele/vida-pessoal";
import { este_aquele_comida_bebida } from "./perguntas/este-aquele/comida-bebida";
import { este_aquele_relacionamentos } from "./perguntas/este-aquele/relacionamentos";
import { este_aquele_cultura_lazer } from "./perguntas/este-aquele/cultura-lazer";
import { este_aquele_viagens_ferias } from "./perguntas/este-aquele/viagens-ferias";
import { este_aquele_trabalho_carreira } from "./perguntas/este-aquele/trabalho-carreira";
import { este_aquele_passado_infancia } from "./perguntas/este-aquele/passado-infancia";
import { este_aquele_personalidade } from "./perguntas/este-aquele/personalidade";
import { este_aquele_desporto_fitness } from "./perguntas/este-aquele/desporto-fitness";
import { este_aquele_tecnologia } from "./perguntas/este-aquele/tecnologia";
import { este_aquele_dinheiro_compras } from "./perguntas/este-aquele/dinheiro-compras";
import { este_aquele_casa_decoracao } from "./perguntas/este-aquele/casa-decoracao";
import { este_aquele_festa_noite } from "./perguntas/este-aquele/festa-noite";
import { este_aquele_animais_estimacao } from "./perguntas/este-aquele/animais-estimacao";
import { este_aquele_dilemas_cenarios } from "./perguntas/este-aquele/dilemas-cenarios";
import { este_aquele_moda_estilo } from "./perguntas/este-aquele/moda-estilo";
import { este_aquele_carros_conducao } from "./perguntas/este-aquele/carros-conducao";
import { este_aquele_saude_bem_estar } from "./perguntas/este-aquele/saude-bem-estar";
import { este_aquele_natureza_ar_livre } from "./perguntas/este-aquele/natureza-ar-livre";
import { este_aquele_artes_criatividade } from "./perguntas/este-aquele/artes-criatividade";
import { este_aquele_supersticoes_crencas } from "./perguntas/este-aquele/supersticoes-crencas";
import { este_aquele_cozinha_culinaria } from "./perguntas/este-aquele/cozinha-culinaria";
import { este_aquele_jogos_videojogos } from "./perguntas/este-aquele/jogos-videojogos";
import { este_aquele_livros_leitura } from "./perguntas/este-aquele/livros-leitura";
import { este_aquele_beleza_cuidados } from "./perguntas/este-aquele/beleza-cuidados";
import { este_aquele_musica_concertos } from "./perguntas/este-aquele/musica-concertos";
import { este_aquele_desastres_gafes } from "./perguntas/este-aquele/desastres-gafes";
import { este_aquele_sonhos_futuro } from "./perguntas/este-aquele/sonhos-futuro";
import { este_aquele_televisao_reality_shows } from "./perguntas/este-aquele/televisao-reality-shows";
import { este_aquele_estudos_escola } from "./perguntas/este-aquele/estudos-escola";
import { este_aquele_humor_comedia } from "./perguntas/este-aquele/humor-comedia";

// --- IMPORTS TERMÓMETRO ---
import { termometro_vida_pessoal } from "./perguntas/termometro/vida-pessoal";
import { termometro_comida_bebida } from "./perguntas/termometro/comida-bebida";
import { termometro_relacionamentos } from "./perguntas/termometro/relacionamentos";
import { termometro_cultura_lazer } from "./perguntas/termometro/cultura-lazer";
import { termometro_viagens_ferias } from "./perguntas/termometro/viagens-ferias";
import { termometro_trabalho_carreira } from "./perguntas/termometro/trabalho-carreira";
import { termometro_passado_infancia } from "./perguntas/termometro/passado-infancia";
import { termometro_personalidade } from "./perguntas/termometro/personalidade";
import { termometro_desporto_fitness } from "./perguntas/termometro/desporto-fitness";
import { termometro_tecnologia } from "./perguntas/termometro/tecnologia";
import { termometro_dinheiro_compras } from "./perguntas/termometro/dinheiro-compras";
import { termometro_casa_decoracao } from "./perguntas/termometro/casa-decoracao";
import { termometro_festa_noite } from "./perguntas/termometro/festa-noite";
import { termometro_animais_estimacao } from "./perguntas/termometro/animais-estimacao";
import { termometro_dilemas_cenarios } from "./perguntas/termometro/dilemas-cenarios";
import { termometro_moda_estilo } from "./perguntas/termometro/moda-estilo";
import { termometro_carros_conducao } from "./perguntas/termometro/carros-conducao";
import { termometro_saude_bem_estar } from "./perguntas/termometro/saude-bem-estar";
import { termometro_natureza_ar_livre } from "./perguntas/termometro/natureza-ar-livre";
import { termometro_artes_criatividade } from "./perguntas/termometro/artes-criatividade";
import { termometro_supersticoes_crencas } from "./perguntas/termometro/supersticoes-crencas";
import { termometro_cozinha_culinaria } from "./perguntas/termometro/cozinha-culinaria";
import { termometro_jogos_videojogos } from "./perguntas/termometro/jogos-videojogos";
import { termometro_livros_leitura } from "./perguntas/termometro/livros-leitura";
import { termometro_beleza_cuidados } from "./perguntas/termometro/beleza-cuidados";
import { termometro_musica_concertos } from "./perguntas/termometro/musica-concertos";
import { termometro_desastres_gafes } from "./perguntas/termometro/desastres-gafes";
import { termometro_sonhos_futuro } from "./perguntas/termometro/sonhos-futuro";
import { termometro_televisao_reality_shows } from "./perguntas/termometro/televisao-reality-shows";
import { termometro_estudos_escola } from "./perguntas/termometro/estudos-escola";
import { termometro_humor_comedia } from "./perguntas/termometro/humor-comedia";

// Agrupa todos os ficheiros do Clássico
const TODAS_PERGUNTAS_CLASSICO: Record<string, any[]> = {
  ...classico_vida_pessoal,
  ...classico_comida_bebida,
  ...classico_relacionamentos,
  ...classico_cultura_lazer,
  ...classico_viagens_ferias,
  ...classico_trabalho_carreira,
  ...classico_passado_infancia,
  ...classico_personalidade,
  ...classico_desporto_fitness,
  ...classico_tecnologia,
  ...classico_dinheiro_compras,
  ...classico_casa_decoracao,
  ...classico_festa_noite,
  ...classico_animais_estimacao,
  ...classico_dilemas_cenarios,
  ...classico_moda_estilo,
  ...classico_carros_conducao,
  ...classico_saude_bem_estar,
  ...classico_natureza_ar_livre,
  ...classico_artes_criatividade,
  ...classico_supersticoes_crencas,
  ...classico_cozinha_culinaria,
  ...classico_jogos_videojogos,
  ...classico_livros_leitura,
  ...classico_beleza_cuidados,
  ...classico_musica_concertos,
  ...classico_desastres_gafes,
  ...classico_sonhos_futuro,
  ...classico_televisao_reality_shows,
  ...classico_estudos_escola,
  ...classico_humor_comedia
};

// Agrupa todos os ficheiros do Facto Fake
const TODAS_PERGUNTAS_FACTO_FAKE: Record<string, any[]> = {
  ...facto_fake_vida_pessoal,
  ...facto_fake_comida_bebida,
  ...facto_fake_relacionamentos,
  ...facto_fake_cultura_lazer,
  ...facto_fake_viagens_ferias,
  ...facto_fake_trabalho_carreira,
  ...facto_fake_passado_infancia,
  ...facto_fake_personalidade,
  ...facto_fake_desporto_fitness,
  ...facto_fake_tecnologia,
  ...facto_fake_dinheiro_compras,
  ...facto_fake_casa_decoracao,
  ...facto_fake_festa_noite,
  ...facto_fake_animais_estimacao,
  ...facto_fake_dilemas_cenarios,
  ...facto_fake_moda_estilo,
  ...facto_fake_carros_conducao,
  ...facto_fake_saude_bem_estar,
  ...facto_fake_natureza_ar_livre,
  ...facto_fake_artes_criatividade,
  ...facto_fake_supersticoes_crencas,
  ...facto_fake_cozinha_culinaria,
  ...facto_fake_jogos_videojogos,
  ...facto_fake_livros_leitura,
  ...facto_fake_beleza_cuidados,
  ...facto_fake_musica_concertos,
  ...facto_fake_desastres_gafes,
  ...facto_fake_sonhos_futuro,
  ...facto_fake_televisao_reality_shows,
  ...facto_fake_estudos_escola,
  ...facto_fake_humor_comedia
};

// Agrupa todos os ficheiros do Este ou Aquele
const TODAS_PERGUNTAS_ESTE_AQUELE: Record<string, any[]> = {
  ...este_aquele_vida_pessoal,
  ...este_aquele_comida_bebida,
  ...este_aquele_relacionamentos,
  ...este_aquele_cultura_lazer,
  ...este_aquele_viagens_ferias,
  ...este_aquele_trabalho_carreira,
  ...este_aquele_passado_infancia,
  ...este_aquele_personalidade,
  ...este_aquele_desporto_fitness,
  ...este_aquele_tecnologia,
  ...este_aquele_dinheiro_compras,
  ...este_aquele_casa_decoracao,
  ...este_aquele_festa_noite,
  ...este_aquele_animais_estimacao,
  ...este_aquele_dilemas_cenarios,
  ...este_aquele_moda_estilo,
  ...este_aquele_carros_conducao,
  ...este_aquele_saude_bem_estar,
  ...este_aquele_natureza_ar_livre,
  ...este_aquele_artes_criatividade,
  ...este_aquele_supersticoes_crencas,
  ...este_aquele_cozinha_culinaria,
  ...este_aquele_jogos_videojogos,
  ...este_aquele_livros_leitura,
  ...este_aquele_beleza_cuidados,
  ...este_aquele_musica_concertos,
  ...este_aquele_desastres_gafes,
  ...este_aquele_sonhos_futuro,
  ...este_aquele_televisao_reality_shows,
  ...este_aquele_estudos_escola,
  ...este_aquele_humor_comedia
};

// Agrupa todos os ficheiros da Lacuna
const TODAS_PERGUNTAS_LACUNA: Record<string, any[]> = {
  ...lacuna_vida_pessoal,
  ...lacuna_comida_bebida,
  ...lacuna_relacionamentos,
  ...lacuna_cultura_lazer,
  ...lacuna_viagens_ferias,
  ...lacuna_trabalho_carreira,
  ...lacuna_passado_infancia,
  ...lacuna_personalidade,
  ...lacuna_desporto_fitness,
  ...lacuna_tecnologia,
  ...lacuna_dinheiro_compras,
  ...lacuna_casa_decoracao,
  ...lacuna_festa_noite,
  ...lacuna_animais_estimacao,
  ...lacuna_dilemas_cenarios,
  ...lacuna_moda_estilo,
  ...lacuna_carros_conducao,
  ...lacuna_saude_bem_estar,
  ...lacuna_natureza_ar_livre,
  ...lacuna_artes_criatividade,
  ...lacuna_supersticoes_crencas,
  ...lacuna_cozinha_culinaria,
  ...lacuna_jogos_videojogos,
  ...lacuna_livros_leitura,
  ...lacuna_beleza_cuidados,
  ...lacuna_musica_concertos,
  ...lacuna_desastres_gafes,
  ...lacuna_sonhos_futuro,
  ...lacuna_televisao_reality_shows,
  ...lacuna_estudos_escola,
  ...lacuna_humor_comedia
};

// Agrupa todos os ficheiros do Top 3
const TODAS_PERGUNTAS_TOP3: Record<string, any[]> = {
  ...top3_vida_pessoal,
  ...top3_comida_bebida,
  ...top3_relacionamentos,
  ...top3_cultura_lazer,
  ...top3_viagens_ferias,
  ...top3_trabalho_carreira,
  ...top3_passado_infancia,
  ...top3_personalidade,
  ...top3_desporto_fitness,
  ...top3_tecnologia,
  ...top3_dinheiro_compras,
  ...top3_casa_decoracao,
  ...top3_festa_noite,
  ...top3_animais_estimacao,
  ...top3_dilemas_cenarios,
  ...top3_moda_estilo,
  ...top3_carros_conducao,
  ...top3_saude_bem_estar,
  ...top3_natureza_ar_livre,
  ...top3_artes_criatividade,
  ...top3_supersticoes_crencas,
  ...top3_cozinha_culinaria,
  ...top3_jogos_videojogos,
  ...top3_livros_leitura,
  ...top3_beleza_cuidados,
  ...top3_musica_concertos,
  ...top3_desastres_gafes,
  ...top3_sonhos_futuro,
  ...top3_televisao_reality,
  ...top3_estudos_escola,
  ...top3_humor_comedia
};

// Agrupa todos os ficheiros do Termómetro
const TODAS_PERGUNTAS_TERMOMETRO: Record<string, any[]> = {
  ...termometro_vida_pessoal,
  ...termometro_comida_bebida,
  ...termometro_relacionamentos,
  ...termometro_cultura_lazer,
  ...termometro_viagens_ferias,
  ...termometro_trabalho_carreira,
  ...termometro_passado_infancia,
  ...termometro_personalidade,
  ...termometro_desporto_fitness,
  ...termometro_tecnologia,
  ...termometro_dinheiro_compras,
  ...termometro_casa_decoracao,
  ...termometro_festa_noite,
  ...termometro_animais_estimacao,
  ...termometro_dilemas_cenarios,
  ...termometro_moda_estilo,
  ...termometro_carros_conducao,
  ...termometro_saude_bem_estar,
  ...termometro_natureza_ar_livre,
  ...termometro_artes_criatividade,
  ...termometro_supersticoes_crencas,
  ...termometro_cozinha_culinaria,
  ...termometro_jogos_videojogos,
  ...termometro_livros_leitura,
  ...termometro_beleza_cuidados,
  ...termometro_musica_concertos,
  ...termometro_desastres_gafes,
  ...termometro_sonhos_futuro,
  ...termometro_televisao_reality_shows,
  ...termometro_estudos_escola,
  ...termometro_humor_comedia
};

export function obterCatalogo(modo: string): any[] {
  // Clonar para evitar mutações indesejadas
  const estrutura = JSON.parse(JSON.stringify(ESTRUTURA_CATEGORIAS));

  if (modo === 'classico' || !modo) {
    estrutura.forEach((categoria: any) => {
      categoria.subcategorias.forEach((sub: any) => {
        sub.perguntas = TODAS_PERGUNTAS_CLASSICO[sub.id] || [];
      });
    });
    return estrutura;
  }

  if (modo === 'facto-ou-fake') {
    estrutura.forEach((categoria: any) => {
      categoria.subcategorias.forEach((sub: any) => {
        sub.perguntas = TODAS_PERGUNTAS_FACTO_FAKE[sub.id] || [];
      });
    });
    return estrutura;
  }
  
  if (modo === 'lacuna') {
    estrutura.forEach((categoria: any) => {
      categoria.subcategorias.forEach((sub: any) => {
        sub.perguntas = TODAS_PERGUNTAS_LACUNA[sub.id] || [];
      });
    });
    return estrutura;
  }
  
  if (modo === 'top-3') {
    estrutura.forEach((categoria: any) => {
      categoria.subcategorias.forEach((sub: any) => {
        sub.perguntas = TODAS_PERGUNTAS_TOP3[sub.id] || [];
      });
    });
    return estrutura;
  }

  if (modo === 'este-ou-aquele') {
    estrutura.forEach((categoria: any) => {
      categoria.subcategorias.forEach((sub: any) => {
        sub.perguntas = TODAS_PERGUNTAS_ESTE_AQUELE[sub.id] || [];
      });
    });
    return estrutura;
  }

  if (modo === 'termometro') {
    estrutura.forEach((categoria: any) => {
      categoria.subcategorias.forEach((sub: any) => {
        sub.perguntas = TODAS_PERGUNTAS_TERMOMETRO[sub.id] || [];
      });
    });
    return estrutura;
  }

  return [];
}

export function obterSubcategorias(modo: string, categoriaId: string) {
  const catalogo = obterCatalogo(modo);
  const categoria = catalogo.find((c: any) => c.id === categoriaId) || catalogo[0];
  return categoria ? categoria.subcategorias : [];
}

export function obterTodasPerguntas(modo: string, categoriaId: string, subcategoriaId: string) {
  const subcategorias = obterSubcategorias(modo, categoriaId);
  const sub = subcategorias.find((s: any) => s.id === subcategoriaId) || subcategorias[0];
  return sub ? sub.perguntas : [];
}

export function obterPerguntaAleatoria(modo: string, categoriaId: string, subcategoriaId: string) {
  const perguntas = obterTodasPerguntas(modo, categoriaId, subcategoriaId);
  if (!perguntas || perguntas.length === 0) return null;
  const indexAleatorio = Math.floor(Math.random() * perguntas.length);
  return perguntas[indexAleatorio];
}