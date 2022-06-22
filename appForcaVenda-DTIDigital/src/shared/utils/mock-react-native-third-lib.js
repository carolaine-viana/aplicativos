import { NativeModules as RNNativeModules } from 'react-native';
jest.mock('react-native-reanimated', () => ({ Transition: {
  Together: 'Together',
  Out: 'Out',
  In: 'In',
  Change: 'Change',
}, Transitioning: {
  View: 'Vew'
} }));


jest.mock('@react-navigation/native');
jest.mock('@react-native-firebase/analytics', () => ({
  analytics: jest.fn(),
}));
jest.mock('react-native-fs', () => {
  return class RNFS {};
});
jest.mock('react-native-share', () => {
  return class Share {};
});
jest.mock('base-64', () => ({
  decode: jest.fn(),
}));
jest.mock('react-native-file-viewer', () => {
  return class RNFS {};
});
jest.mock('launchdarkly-react-native-client-sdk', () => {
  return class LDCliente {};
});
jest.mock('react-native-iphone-x-helper', () => ({ getStatusBarHeight: jest.fn() }));
jest.mock('@react-navigation/material-top-tabs', () => ({
  createMaterialTopTabNavigator: jest.fn(),
}));
jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: () => ({
    isConnected: true,
  }),
}));

RNNativeModules.UIManager = RNNativeModules.UIManager || {};
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {};
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
  State: { BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END' },
  attachGestureHandler: jest.fn(),
  createGestureHandler: jest.fn(),
  dropGestureHandler: jest.fn(),
  updateGestureHandler: jest.fn(),
};
RNNativeModules.PlatformConstants = RNNativeModules.PlatformConstants || {
  forceTouchAvailable: false,
};
