import { IKeyValue } from '../IKeyValue';
import { IHandleError } from '../IHandleError';
import { IUserProperties } from './IUserProperties';
import { TEventNames } from './TEventNames';

export interface IAnalytics {
  sendEvent: <T extends IKeyValue>(
    eventName: TEventNames,
    eventData: T,
    handleError?: IHandleError,
    handleSuccess?: () => void
  ) => Promise<void>;

  sendUserProperties: (
    userProperties: IUserProperties,
    handleError?: IHandleError,
    handleSuccess?: () => void
  ) => Promise<void>;
}
