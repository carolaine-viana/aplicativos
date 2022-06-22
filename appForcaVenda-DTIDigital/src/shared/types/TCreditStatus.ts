export enum CreditStatus {
  REABILITADO = 'Reabilitado',
  SUSPENSO = 'Suspenso',
  NOVO = 'Novo',
  CORTADO = 'Cortado',
  NORMAL_CASH = 'Normal Cash',
  NORMAL = 'Normal',
}

export type TCreditStatus =
  | 'Reabilitado'
  | 'Suspenso'
  | 'Novo'
  | 'Cortado'
  | 'Normal Cash'
  | 'Normal';
