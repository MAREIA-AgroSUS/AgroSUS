import React, { createContext, useContext, useMemo, useState } from 'react';

export type ProdutoItem = {
  nomeComercial: string;
  principioAtivo: string;
  classeUso: string;
  classeTox: string;
  numeroRegistro: string;
};

export type CollectionData = {
  // Etapa 0 - tipo de coleta
  tipoColeta: string | null;
  ubs: string;
  acsResponsavel: string;
  dataColeta: string;

  // Etapa 1 - Identificação
  nome: string;
  csn: string;
  cpf: string;
  nascimento: string;
  sexo: string;
  racaCor: string;
  escolaridade: string;
  telefone: string;
  ocupacao: string;
  tempoAtivRural: string;
  tempoComDefensivos: string;

  // Etapa 2 - Propriedade
  posseDaTerra: string;
  areaTotal: string;
  areaProducao: string;
  tipoProducao: string; // convencional | organica | mista
  culturas: string;
  fonteAgua: string;
  assistenciaTecnica: string | null;
  instituicao: string;
  respTecnico: string;

  // Etapa 3 - Capacitação
  recebeuCapacitacao: string | null;
  dataCapacitacao: string;
  instituicaoCapacitacao: string;
  temasAbordados: string[];

  // Etapa 4 - Defensivos
  possuiReceituario: string | null;
  vigemcoa: string;
  produtos: ProdutoItem[];

  // Etapa 5 - Rastreabilidade
  registraDatas: string | null;
  registraProdutos: string | null;
  registraDose: string | null;
  registraResponsavel: string | null;
  registraCultura: string | null;
  ondeGuardaRegistros: string;
  porQuantoTempoGuarda: string;

  // Etapa 6 - Frequência/exposição
  diasMes: string;
  horasDia: string;
  mesesMaiorUso: string;
  dataUltimaAplicacao: string;
  equipamentosAplicacao: string;
  viaExposicao: string;
  quemAplica: string;
  higienizaAposUso: string | null;
  intervaloReentrada: string;

  // Etapa 7 - EPIs
  episUso: Record<string, string>; // equipamento -> sempre|as_vezes|nunca|nao_tem
  episConservaBomEstado: string | null;
  episLavaSeparado: string | null;
  localGuardaEpis: string;

  // Etapa 8 - Armazenamento
  localArmazenamento: string;
  condicoesDeposito: string[];
  fazTriplicelavagem: string | null;
  devolveEmbalagens: string | null;

  // Etapa 9 - Exposição familiar/ambiental
  familiaresAjudam: string | null;
  criancasCirculam: string | null;
  fontesAguaProximas: string | null;
  moradiasProximas: string | null;
  riscoDeriva: string | null;
  observacoesAmbientais: string;

  // Saúde e sintomas
  blocoCritico: boolean;
  doencasPreexistentes: string;
  medicamentosUso: string;
  tabagismo: string | null;
  etilismo: string | null;
  sintomas: Record<string, { sim: boolean; nao: boolean; posAplicacao: boolean }>;

  // Histórico de intoxicação
  jaTeveIntoxicacao: string | null;
  dataIntoxicacao: string;
  localAtendimento: string;
  notificacaoSinan: string | null;
  sobVigilancia: string | null;

  // Boas práticas
  boasPraticas: Record<string, string>; // item -> sim|nao|na

  // Observações ACS
  observacoesAcs: string;

  // Encaminhamento
  riscoDetectado: string;
  motivoEncaminhamento: string;
  ubsReferencia: string;

  // Assinaturas
  assinaturaParticipante: string;
  assinaturaAcs: string;
  dataAssinatura: string;
};

const initialData: CollectionData = {
  tipoColeta: 'cadastro_inicial',
  ubs: 'UBS Jundiapeba',
  acsResponsavel: 'Maria S.',
  dataColeta: '30/06/2026',

  nome: '',
  csn: '',
  cpf: '',
  nascimento: '',
  sexo: '',
  racaCor: '',
  escolaridade: '',
  telefone: '',
  ocupacao: '',
  tempoAtivRural: '',
  tempoComDefensivos: '',

  posseDaTerra: '',
  areaTotal: '',
  areaProducao: '',
  tipoProducao: 'convencional',
  culturas: '',
  fonteAgua: '',
  assistenciaTecnica: null,
  instituicao: '',
  respTecnico: '',

  recebeuCapacitacao: null,
  dataCapacitacao: '',
  instituicaoCapacitacao: '',
  temasAbordados: [],

  possuiReceituario: null,
  vigemcoa: '',
  produtos: [
    { nomeComercial: '', principioAtivo: '', classeUso: '', classeTox: '', numeroRegistro: '' },
    { nomeComercial: '', principioAtivo: '', classeUso: '', classeTox: '', numeroRegistro: '' },
  ],

  registraDatas: null,
  registraProdutos: null,
  registraDose: null,
  registraResponsavel: null,
  registraCultura: null,
  ondeGuardaRegistros: '',
  porQuantoTempoGuarda: '',

  diasMes: '',
  horasDia: '',
  mesesMaiorUso: '',
  dataUltimaAplicacao: '',
  equipamentosAplicacao: '',
  viaExposicao: '',
  quemAplica: '',
  higienizaAposUso: null,
  intervaloReentrada: '',

  episUso: {},
  episConservaBomEstado: null,
  episLavaSeparado: null,
  localGuardaEpis: '',

  localArmazenamento: '',
  condicoesDeposito: [],
  fazTriplicelavagem: null,
  devolveEmbalagens: null,

  familiaresAjudam: null,
  criancasCirculam: null,
  fontesAguaProximas: null,
  moradiasProximas: null,
  riscoDeriva: null,
  observacoesAmbientais: '',

  blocoCritico: true,
  doencasPreexistentes: '',
  medicamentosUso: '',
  tabagismo: null,
  etilismo: null,
  sintomas: {},

  jaTeveIntoxicacao: null,
  dataIntoxicacao: '',
  localAtendimento: '',
  notificacaoSinan: null,
  sobVigilancia: null,

  boasPraticas: {},

  observacoesAcs: '',

  riscoDetectado: 'Exposição elevada a organofosforados sem uso adequado de EPI',
  motivoEncaminhamento: 'Sintomas compatíveis com intoxicação leve pós-aplicação',
  ubsReferencia: 'UBS Jundiapeba',

  assinaturaParticipante: '',
  assinaturaAcs: '',
  dataAssinatura: '',
};

type Ctx = {
  data: CollectionData;
  update: (patch: Partial<CollectionData>) => void;
  updateNested: <K extends keyof CollectionData>(key: K, value: CollectionData[K]) => void;
  reset: () => void;
};

const CollectionContext = createContext<Ctx | undefined>(undefined);

export function CollectionProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<CollectionData>(initialData);

  const update = (patch: Partial<CollectionData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  const updateNested = <K extends keyof CollectionData>(key: K, value: CollectionData[K]) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const reset = () => setData(initialData);

  const value = useMemo(() => ({ data, update, updateNested, reset }), [data]);

  return <CollectionContext.Provider value={value}>{children}</CollectionContext.Provider>;
}

export function useCollection() {
  const ctx = useContext(CollectionContext);
  if (!ctx) throw new Error('useCollection must be used within CollectionProvider');
  return ctx;
}
