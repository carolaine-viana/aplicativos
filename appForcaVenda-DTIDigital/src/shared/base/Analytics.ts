import analytics from '@react-native-firebase/analytics';
import { IAnalytics, IUserProperties, IHandleError } from 'shared/types';

export class Analytics implements IAnalytics {
  private static instance: Analytics;

  private constructor() {}

  public static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  async sendEvent<T>(
    eventName: string,
    eventData?: T,
    handleError?: IHandleError,
    handleSuccess?: () => void
  ) {
    analytics()
      .logEvent(eventName, eventData)
      .then(() => {
        handleSuccess?.();
      })
      .catch((error) => {
        handleError?.(error);
      });
  }

  async sendUserProperties(
    user: IUserProperties,
    handleError?: IHandleError,
    handleSuccess?: () => void
  ) {
    const userProperties = { ...user };

    analytics()
      .setUserProperties(userProperties)
      .then(() => {
        handleSuccess?.();
      })
      .catch((error) => {
        handleError?.(error);
      });
  }
}
