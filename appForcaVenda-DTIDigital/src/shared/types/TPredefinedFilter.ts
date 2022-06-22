export type TPredefinedFilter = {
  label?: string;
  value: string;
  prop: string;
  type: 'boolean' | 'string';
  screen?: string;
  shouldPass?: boolean;
};
