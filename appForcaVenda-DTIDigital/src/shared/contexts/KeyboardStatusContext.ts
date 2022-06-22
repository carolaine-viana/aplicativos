import React from 'react';

export const KeyboardStatusContext = React.createContext<{
  isKeyBoardOpen: boolean;
  setIsKeyboardOpen?: Function;
}>({
  isKeyBoardOpen: false,
  setIsKeyboardOpen: () => {},
});
