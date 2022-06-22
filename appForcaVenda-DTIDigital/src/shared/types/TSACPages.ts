export enum EPage {
  OCCURRENCE = 'ask',
  HISTORY = 'account/questions/list',
}

export type TSACPages = EPage.HISTORY | EPage.OCCURRENCE;
