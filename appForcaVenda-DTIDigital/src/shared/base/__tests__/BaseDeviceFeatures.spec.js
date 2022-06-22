import Geolocation from 'react-native-geolocation-service';
import DeviceFeatures from '../BaseDeviceFeatures';
describe('Tests BaseDeviceFeatures', () => {
  it('should call Geolocation.getCurrentPosition', () => {
    const handlePositionMock = jest.fn();
    DeviceFeatures.getLocation(handlePositionMock);
    expect(Geolocation.getCurrentPosition).toHaveBeenCalledTimes(1);
  });
});
