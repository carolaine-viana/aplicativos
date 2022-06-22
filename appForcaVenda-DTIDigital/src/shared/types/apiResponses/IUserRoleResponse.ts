export type THierarchicalLevel = 'representante' | 'gestor' | 'gestorV'; // TODO GV: CONFIRMAR RESPOSTA HierarchicalLevel PARA GV

export interface IUserRoleResponse {
  sales_reps: [
    {
      id: number;
      name: string;
      hierarchical_level: THierarchicalLevel;
      cpf: string;
    }
  ];
}
