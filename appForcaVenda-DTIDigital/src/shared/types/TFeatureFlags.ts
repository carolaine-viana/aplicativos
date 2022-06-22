export enum KnownFeatureFlags {
  FOCO_CORINGA = 'fv-foco-coringa',
  EXTRATO = 'fv-extrato',
  INCENTIVOS = 'fv-incentivos',
  POSITIVACOES = 'fv-positivacoes',
  SALDO_BEM = 'fv-saldo-bem',
  SAC = 'fv-sac',
  POLITICA_PRIVACIDADE = 'fv-politica',
}

export type TFeatureFlags =
  | KnownFeatureFlags.EXTRATO
  | KnownFeatureFlags.FOCO_CORINGA
  | KnownFeatureFlags.INCENTIVOS
  | KnownFeatureFlags.POSITIVACOES
  | KnownFeatureFlags.SALDO_BEM
  | KnownFeatureFlags.SAC
  | KnownFeatureFlags.POLITICA_PRIVACIDADE;
