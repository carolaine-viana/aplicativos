export interface ITableKey {
  name: string;
  key: string;
}

export interface IJoinQueryParam {
  leftTable: ITableKey;
  rightTable: ITableKey;
}
