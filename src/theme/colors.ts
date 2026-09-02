/**
 * mare.IA · AgroSUS — Design Tokens: Colors
 * Extraídos diretamente do wireframe de alta fidelidade.
 */

export const colors = {
  // Marca
  primary: '#F4761F',        // Laranja mare.IA (botões, destaques, ativo)
  primaryDark: '#D9631A',    // Hover / pressed
  primaryLight: '#FDEEE2',   // Fundos suaves laranja (chips, badges leves)
  wave: '#6DC6DF',           // Azul das ondas da logo

  // Neutros
  ink: '#132029',            // Texto principal (quase preto azulado)
  inkSoft: '#3C4A52',        // Texto secundário
  textMuted: '#8A97A0',      // Placeholders, legendas, labels auxiliares
  border: '#D8DEE1',         // Bordas padrão de inputs e cards
  borderStrong: '#132029',   // Bordas de botões outline / cards ativos
  divider: '#E8ECEE',        // Linhas divisórias finas

  // Fundos
  background: '#FFFFFF',     // Fundo padrão das telas
  surface: '#FFFFFF',        // Cards
  inputBackground: '#F7F9FA',// Fundo dos campos "Digite aqui"
  headerBackground: '#FBFCFC',
  tabBarBackground: '#FBFCFC',
  screenAlt: '#F5F7F6',      // Fundo alternativo (levemente esverdeado, como no protótipo)

  // Semânticas — risco / status
  riskHigh: '#D44444',       // Alto / crítico
  riskHighBg: '#FBEAEA',
  riskModerate: '#C88913',   // Moderado
  riskModerateBg: '#FBF1DF',
  riskLow: '#2E9D6D',        // Baixo
  riskLowBg: '#E7F5EF',
  success: '#2E9D6D',
  successBg: '#E7F5EF',
  danger: '#D44444',
  dangerBg: '#FBEAEA',
  warning: '#C88913',
  warningBg: '#FBF1DF',
  info: '#3C7DC4',
  infoBg: '#EAF2FB',

  // Utilidade
  white: '#FFFFFF',
  black: '#000000',
  overlay: 'rgba(19,32,41,0.45)',
  disabled: '#C6CCCF',
  transparent: 'transparent',
} as const;

export type RiskLevel = 'alto' | 'moderado' | 'baixo';

export const riskColors: Record<RiskLevel, { fg: string; bg: string; label: string }> = {
  alto: { fg: colors.riskHigh, bg: colors.riskHighBg, label: 'ALTO' },
  moderado: { fg: colors.riskModerate, bg: colors.riskModerateBg, label: 'MODERADO' },
  baixo: { fg: colors.riskLow, bg: colors.riskLowBg, label: 'BAIXO' },
};

export default colors;
