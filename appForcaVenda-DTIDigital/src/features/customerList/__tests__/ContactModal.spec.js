import React from 'react';
import expect from 'expect';
import '@shared/utils/mock-react-native-third-lib';
import { render, fireEvent } from '@shared/utils/test-utils';
import ContactModal from '../views/ContactModal';
import DeviceFeatures from '../../../shared/base/BaseDeviceFeatures';

jest.mock('../../../shared/base/BaseDeviceFeatures', () => {
  return class MockBaseDeviceFeatures {
    static callPhone = jest.fn();
    static get dimensions() {
      return {
        height: 100,
      };
    }
  };
});

describe('ContactModal', () => {
  const MOCK_SELECTED_CUSTOMER = {
    tradeName: 'TRADE NAME',
    phoneNumber: '31xxxxxxxx',
    buyerName: 'BUYERNAME',
    buyerPhoneNumber: '31xxxxxxxx',
  };
  it('should call customer phonenumber', () => {
    const { queryByTestId } = render(<ContactModal selectedCustomer={MOCK_SELECTED_CUSTOMER} />);
    const buttonCall = queryByTestId('customerPhoneIcon');
    fireEvent.press(buttonCall);
    expect(DeviceFeatures.callPhone).toHaveBeenCalledWith(MOCK_SELECTED_CUSTOMER.phoneNumber);
  });

  it('should call buyer phonenumber', () => {
    const { queryByTestId } = render(<ContactModal selectedCustomer={MOCK_SELECTED_CUSTOMER} />);
    const buttonCall = queryByTestId('buyerPhoneIcon');
    fireEvent.press(buttonCall);
    expect(DeviceFeatures.callPhone).toHaveBeenCalledWith(MOCK_SELECTED_CUSTOMER.buyerPhoneNumber);
  });
});
