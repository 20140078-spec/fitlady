/** Respostas padrão da “IA” FitLady — escolhidas pelo perfil do questionário */

const TREINO_RESPONSES = [
  {
    id: 'emagrecimento',
    title: 'Plano foco em definição',
    body:
      'Com base no seu objetivo de perda de gordura, montamos uma rotina com treinos de força 3–4x na semana, déficit calórico leve e progressão sustentável. Em até 2 dias você recebe a ficha completa e a dieta alinhada à sua rotina.',
    tips: ['Priorize proteína em todas as refeições', 'Durma 7h+', 'Consistência > intensidade extrema']
  },
  {
    id: 'hipertrofia',
    title: 'Plano foco em hipertrofia',
    body:
      'Vimos que seu foco é ganho de massa. A FitLady preparou divisão com sobrecarga progressiva, dias de descanso bem posicionados e alimentação para superávit controlado. Seu treino e dieta chegam em até 2 dias.',
    tips: ['Aumente carga quando completar as séries', 'Hidrate bem nos treinos', 'Não pule o descanso']
  },
  {
    id: 'manutencao',
    title: 'Plano saúde & disposição',
    body:
      'Seu perfil pede equilíbrio. Vamos manter treinos completos sem exagero, dieta flexível e foco em energia no dia a dia. Em até 2 dias o plano personalizado estará disponível.',
    tips: ['Mantenha regularidade semanal', 'Varie caminhada ou mobilidade', 'Observe sono e stress']
  },
  {
    id: 'condicionamento',
    title: 'Plano performance',
    body:
      'Para condicionamento, combinamos força + estímulo cardiovascular nos dias que você liberou. A dieta reforça energia e recuperação. Em até 2 dias você recebe tudo pronto para começar.',
    tips: ['Aquecimento curto antes de cada sessão', 'Monitore o fôlego nas séries', 'Recupere bem entre os dias intensos']
  },
  {
    id: 'casa_iniciante',
    title: 'Plano casa / início de rotina',
    body:
      'Consideramos treino em casa ou início de rotina: exercícios com pouco equipamento, tempo realista e progressão suave. Em até 2 dias liberamos treino e dieta sob medida.',
    tips: ['Reserve um horário fixo', 'Use uma garrafa d’água sempre à vista', 'Comece leve e evolua na 2ª semana']
  }
];

const NUTRI_RESPONSES = [
  {
    id: 'restricao',
    title: 'Plano com restrições cuidadosas',
    body:
      'Registramos intolerâncias/alergias e preferências. A dieta será montada evitando o que te faz mal e mantendo o que você gosta — sem radicalismo. Em até 2 dias o cardápio fica disponível.',
    tips: ['Leia rótulos nas primeiras semanas', 'Avise se surgir novo sintoma', 'Hidrate entre as refeições']
  },
  {
    id: 'orcamento',
    title: 'Plano econômico e prático',
    body:
      'Levamos em conta seu teto de gastos: refeições acessíveis, substituições inteligentes e suplementação só se fizer sentido. Em até 2 dias você recebe o plano alimentar.',
    tips: ['Liste compras da semana', 'Prefira alimentos da estação', 'Congelar porções ajuda na rotina']
  },
  {
    id: 'sono',
    title: 'Plano alinhado ao seu sono',
    body:
      'Seu relato de sono entrou no cálculo: horários de refeição e carboidratos noturnos ajustados para energia e recuperação. Em até 2 dias a dieta personalizada chega.',
    tips: ['Evite cafeína tarde', 'Jantar mais leve se o sono for curto', 'Mantenha horário parecido todo dia']
  },
  {
    id: 'rotina_social',
    title: 'Plano com flexibilidade social',
    body:
      'Vimos hábitos sociais (saídas, comidas favoritas). Montamos uma dieta com “margem” para esses momentos, sem perder o resultado. Em até 2 dias liberamos seu cardápio.',
    tips: ['Planeje 1 refeição livre na semana', 'Volte ao plano no dia seguinte', 'Priorize proteína no café']
  },
  {
    id: 'geral_nutri',
    title: 'Plano alimentar personalizado',
    body:
      'Com o histórico e as preferências que você enviou, a FitLady monta um cardápio realista para a sua rotina. Em até 2 dias a dieta estará pronta no app.',
    tips: ['Seja sincera nas atualizações semanais', 'Beba água ao longo do dia', 'Não busque perfeição — busque consistência']
  }
];

function pickTreino(data = {}) {
  const days = data.trainingDays?.length || 0;
  const loc = data.workoutLocation;
  const goal = data.goal;

  if (loc === 'casa' || (days > 0 && days <= 2) || /inici|comece|nunca|parei/i.test(data.gymExperience || '')) {
    return TREINO_RESPONSES.find((r) => r.id === 'casa_iniciante');
  }
  if (goal === 'emagrecimento') return TREINO_RESPONSES.find((r) => r.id === 'emagrecimento');
  if (goal === 'hipertrofia') return TREINO_RESPONSES.find((r) => r.id === 'hipertrofia');
  if (goal === 'condicionamento') return TREINO_RESPONSES.find((r) => r.id === 'condicionamento');
  if (goal === 'manutencao') return TREINO_RESPONSES.find((r) => r.id === 'manutencao');
  return TREINO_RESPONSES.find((r) => r.id === 'manutencao');
}

function pickNutri(data = {}) {
  const blob = [
    data.intoleranceAllergy,
    data.undesiredFoods,
    data.preferencesKeep,
    data.sleep,
    data.budgetCeiling,
    data.eatingHabits,
    data.dietExperience
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  if (/alerg|intoler|lactose|glúten|gluten|amendoim/.test(blob)) {
    return NUTRI_RESPONSES.find((r) => r.id === 'restricao');
  }
  if (/r\$|orç|orc|barato|econ|mercado|teto|400|300|200/.test(blob)) {
    return NUTRI_RESPONSES.find((r) => r.id === 'orcamento');
  }
  if (/sono|insôn|inson|dorm|noite|acord/.test(blob)) {
    return NUTRI_RESPONSES.find((r) => r.id === 'sono');
  }
  if (/amiga|jantar|festa|social|churrasc|restaurante|mexicana|pizza|chocolate/.test(blob)) {
    return NUTRI_RESPONSES.find((r) => r.id === 'rotina_social');
  }
  return NUTRI_RESPONSES.find((r) => r.id === 'geral_nutri');
}

/**
 * Gera a resposta padrão da IA a partir dos dados do formulário.
 */
export function generateFitLadyReply(formData = {}) {
  const isNutri = formData.type === 'nutricao';
  const base = isNutri ? pickNutri(formData) : pickTreino(formData);

  const daysLabel =
    formData.trainingDays?.length > 0
      ? formData.trainingDays.join(', ')
      : null;

  return {
    ...base,
    generatedAt: new Date().toISOString(),
    type: isNutri ? 'nutricao' : 'treino',
    summaryLine: daysLabel
      ? `Dias considerados: ${daysLabel}.`
      : isNutri
        ? 'Dieta montada com base no seu histórico e preferências.'
        : 'Treino montado com base nas suas metas e disponibilidade.'
  };
}

export const FITLADY_AI_PRESETS = { TREINO_RESPONSES, NUTRI_RESPONSES };
