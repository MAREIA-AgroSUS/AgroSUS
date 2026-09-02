export type Produtor = {
  id: string;
  nome: string;
  ultimaColeta: string;
  risco: 'alto' | 'moderado' | 'baixo';
  localidade?: string;
  horario?: string;
};

export const produtores: Produtor[] = [
  { id: 'AGS-0207', nome: 'João da Silva', ultimaColeta: 'Última coleta hoje', risco: 'alto', localidade: 'Jundiapeba', horario: '09:00' },
  { id: 'AGS-0193', nome: 'Roberto Lima', ultimaColeta: 'Última coleta há 3 dias', risco: 'moderado', localidade: 'Cocuera', horario: '10:30' },
  { id: 'AGS-0158', nome: 'Marta Dias', ultimaColeta: 'Última coleta há 12 dias', risco: 'baixo', localidade: 'Cocuera', horario: '14:00' },
  { id: 'AGS-0142', nome: 'Antônio Souza', ultimaColeta: 'Última coleta há 20 dias', risco: 'moderado', localidade: 'Jundiapeba', horario: '15:30' },
];

export const dashboardStats = {
  visitasHoje: 3,
  pendentes: 3,
  produtores: 42,
  alertasAbertos: 6,
};

export const temasCapacitacao = [
  'Uso correto de defensivos',
  'Uso e conservação de EPIs',
  'Tríplice lavagem / embalagens',
  'Primeiros socorros / intoxicação',
  'Receituário agronômico',
  'Terceiros / crianças presentes',
  'Outros',
];

export const equipamentosEpi = [
  'Luvas',
  'Máscara/respirador',
  'Óculos / viseira',
  'Macacão / avental',
  'Botas',
  'Chapéu / touca',
  'Protetor auditivo',
];

export const condicoesDepositoList = [
  'Exclusivo para defensivos',
  'Ventilado',
  'Trancado / acesso restrito',
  'Longe de alimentos / ração',
  'Longe de moradia',
  'Piso impermeável',
  'Identificação / sinalização',
  'Sem acesso de crianças / animais',
  'Embalagens originais',
  'Protegido de chuva / sol',
];

export const sintomasList = [
  'Cefaleia',
  'Náusea / vômito',
  'Tontura',
  'Irritação ocular',
  'Lesões de pele',
  'Falta de ar',
  'Fraqueza / tremor',
];

export const boasPraticasList = [
  'Usa receituário agronômico',
  'Respeita dose recomendada',
  'Respeita carência',
  'Usa EPI completo',
  'Tríplice lavagem',
  'Devolve embalagens',
  'Registra aplicações',
  'Armazena corretamente',
  'Não aplica perto de fontes de água',
  'Não aplica com vento forte',
  'Realiza exames periódicos',
  'Participou de capacitação',
  'Possui local exclusivo p/ EPIs',
  'Não reutiliza embalagens',
  'Comunica sintomas à UBS',
];

export const rastreabilidadeItems = [
  { key: 'registraDatas', label: 'Datas de aplicação' },
  { key: 'registraProdutos', label: 'Produtos utilizados' },
  { key: 'registraDose', label: 'Dose aplicada' },
  { key: 'registraResponsavel', label: 'Responsável pela aplicação' },
  { key: 'registraCultura', label: 'Cultura tratada' },
];
