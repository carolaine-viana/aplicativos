import { useContext } from 'react';
import { KeyboardStatusContext } from '../contexts/KeyboardStatusContext';

export const useKeyBoardOpen = () => {
  const { isKeyBoardOpen, setIsKeyboardOpen } = useContext(KeyboardStatusContext);
  return {
    isKeyBoardOpen,
    setIsKeyboardOpen,
  };
};
