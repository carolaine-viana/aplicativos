import React from 'react';
import { View } from 'react-native';
import DateTimePicker, { DatePickerOptions } from '@react-native-community/datetimepicker';
import DeviceFeatures from '../../base/BaseDeviceFeatures';
import { DatePickerIos } from './DatePickerSC';
import TouchableButton from '../TouchableButton/TouchableButton';

interface DefaultDateTimeProps extends DatePickerOptions {
  show: boolean;
  mode: 'date' | 'time' | null;
  value: Date;
  maximumDate?: Date;
  minimumDate?: Date;
  onChange: any;
  closeDatePicker?: () => void;
}

const DefaultDateTimePicker: React.FC<DefaultDateTimeProps> = (props) => {
  const { show, closeDatePicker } = props;
  if (DeviceFeatures.isIOS) {
    return (
      show && (
        <DatePickerIos>
          <DateTimePicker {...props} is24Hour display="spinner" minimumDate={new Date()} />
          <TouchableButton onPress={() => closeDatePicker?.()} title="OK" />
        </DatePickerIos>
      )
    );
  }
  return (
    <View>
      {show && <DateTimePicker {...props} is24Hour display="default" minimumDate={new Date()} />}
    </View>
  );
};

type TDatePickerMode = 'date' | 'time' | null;
export { DefaultDateTimePicker, TDatePickerMode };
