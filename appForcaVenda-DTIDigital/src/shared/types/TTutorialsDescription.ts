export enum ETutorialsDescription {
  TUTO_POSITIVACOES = 'TUTO_POSITIVACOES',
  TUTO_EXTRATO = 'TUTO_EXTRATO',
  TUTO_INCENTIVOS = 'TUTO_INCENTIVOS',
}
export type TTutorialsDescription =
  | ETutorialsDescription.TUTO_EXTRATO
  | ETutorialsDescription.TUTO_POSITIVACOES
  | ETutorialsDescription.TUTO_INCENTIVOS;
