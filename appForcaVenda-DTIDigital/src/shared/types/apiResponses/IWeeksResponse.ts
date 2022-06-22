export interface IWeeksResponse {
  weeks: Array<{
    pt_BR_format: string; // (DD/MM/YYYY)
    universal_format: string; // (YYYY-MM-DD)'
  }>;
}

export interface IWeekFormats {
  ptBRFormat: string;
  universalFormat: string;
}
