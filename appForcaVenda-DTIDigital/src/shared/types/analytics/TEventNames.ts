export enum EventNames {
  AGENDAMENTO_VISITA = 'agendamento_visita',
  VISITA_CONCLUIDA = 'visita_concluida',
}

export type TEventNames = EventNames.AGENDAMENTO_VISITA | EventNames.VISITA_CONCLUIDA;
