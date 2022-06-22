import '../../../shared/utils/mock-react-native-third-lib';
jest.mock('../../base/BaseDeviceFeatures');
import DeviceFeatures from '../../base/BaseDeviceFeatures';
import Geolocation from 'react-native-geolocation-service';
import { renderHook } from '@testing-library/react-hooks';
import useGeoLocation from '../useGeoLocation';

describe('Name of the group', () => {
  it('Should ask android permission for location ', async () => {
    DeviceFeatures.isAndroid = true;
    DeviceFeatures.androidPermissionGranted = jest.fn().mockResolvedValueOnce(true);
    renderHook(useGeoLocation);
    expect(DeviceFeatures.androidPermissionGranted).toHaveBeenCalled();
  });
  it('Should ask IOS permission for location ', async () => {
    DeviceFeatures.isAndroid = false;
    DeviceFeatures.isIOS = true;
    renderHook(useGeoLocation);
    expect(Geolocation.requestAuthorization).toHaveBeenCalled();
    expect(DeviceFeatures.getLocation).toHaveBeenCalled();
  });
  it('Should getLocation have been called ', async () => {
    expect(DeviceFeatures.getLocation).toHaveBeenCalled();
  });
});
