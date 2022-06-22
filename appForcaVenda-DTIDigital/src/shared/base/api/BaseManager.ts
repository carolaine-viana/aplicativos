import ReqResStatusError from '../../constants/ReqResStatusError';
import DataBaseError from '../../constants/DataBaseError';

abstract class BaseManager {
  protected readonly httpErrorDictionary: typeof ReqResStatusError;

  protected readonly dataBaseErrorDictionary = DataBaseError;

  constructor(_httpErrorDictionary?: typeof ReqResStatusError) {
    this.httpErrorDictionary = _httpErrorDictionary || ReqResStatusError;
  }

  handleError(error: any, messageDetail?: string) {
    if (error.status) {
      return Promise.reject(this.getErrorMessage(error.status, messageDetail));
    }
    return Promise.reject(this.httpErrorDictionary.UNKNOWN_ERROR);
  }

  getErrorMessage(status: string, messageDetail?: string) {
    const errorStatus = Object.values({
      ...this.httpErrorDictionary,
      ...this.dataBaseErrorDictionary,
    }).find((e) => e.status === status);
    const errorReturn = errorStatus || this.httpErrorDictionary.UNKNOWN_ERROR;
    return { ...errorReturn, details: messageDetail || errorStatus?.details };
  }
}

export default BaseManager;
