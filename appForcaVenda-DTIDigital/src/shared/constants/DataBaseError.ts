export default {
  UNKNOWN_ERROR: { status: 'UNKNOWN', DEFAULT_MESSAGE: 'Ops. Algo deu errado', details: null },
  ERROR_ON_CREATE: {
    status: 'CREATE',
    DEFAULT_MESSAGE: 'Erro ao criar registro na tabela <tableName>',
    details: null,
  },
  ERROR_ON_INSERT_MANY: {
    status: 'INSERT_MANY',
    DEFAULT_MESSAGE: 'Erro ao criar registros na tabela <tableName>',
    details: null,
  },
  ERROR_ON_FIND: {
    status: 'FIND',
    DEFAULT_MESSAGE: 'Erro ao buscar',
    details: null,
  },
  ERROR_ON_DELETE_ALL: {
    status: 'DELETE_ALL',
    DEFAULT_MESSAGE: 'Erro ao deletar registros <tableName>',
    details: null,
  },
  ERROR_ON_UPDATED: {
    status: 'UPDATED',
    DEFAULT_MESSAGE: 'Erro ao editar registros <tableName>',
    details: null,
  },
  ERROR_ON_DELETE_ONE: {
    status: 'DELETE_ONE',
    DEFAULT_MESSAGE: 'Erro ao deletar um registro <tableName>',
    details: null,
  },
};
