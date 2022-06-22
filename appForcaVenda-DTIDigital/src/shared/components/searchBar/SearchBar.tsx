import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Animated, Pressable } from 'react-native';
import { DeviceFeatures } from '@shared/base';
import { IPalette } from 'shared/types/IThemeInterface';
import { Container, Input, BoxButtonSearch, BoxSearch, SearchIcon, CloseIcon } from './SearchBarSC';

export interface SearchProps {
  onClose?: () => void;
  onChangeText: (text: string) => void;
  value: string;
  fullWidth?: boolean;
  color?: keyof IPalette;
  fixed?: boolean;
  searchPlaceholder?: string;
  onSearch?: () => void;
}

const SearchBar: React.FC<SearchProps> = ({
  value,
  onChangeText,
  onClose,
  fullWidth,
  color,
  fixed,
  searchPlaceholder,
  onSearch,
}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const animation = useRef(new Animated.Value(40)).current;

  const handleToggleSearchVisible = useCallback(() => {
    setIsSearchVisible((prevIsSearchVisible) => !prevIsSearchVisible);
  }, []);

  useEffect(() => {
    if (isSearchVisible || fixed) {
      Animated.timing(animation, {
        toValue: DeviceFeatures.dimensions.width * (fullWidth ? 0.9 : 0.85),
        useNativeDriver: false,
        duration: 200,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 10,
        useNativeDriver: false,
      }).start(() => {
        setIsSearchVisible(false);
        onClose?.();
      });
    }
  }, [isSearchVisible, animation, onClose, fullWidth, fixed]);

  if (fixed) {
    return (
      <>
        <Container style={{ width: animation }} isSearchVisible={!!isSearchVisible} color={color}>
          <Input
            placeholder={searchPlaceholder}
            onChangeText={onChangeText}
            value={value}
            testID="searchTextIpt"
          />
        </Container>
        <BoxSearch>
          <Pressable onPress={onSearch} disabled={!value}>
            <SearchIcon disabled={!value} />
          </Pressable>
        </BoxSearch>
      </>
    );
  }

  return (
    <>
      <Container style={{ width: animation }} isSearchVisible={!!isSearchVisible} color={color}>
        <Input
          placeholder={searchPlaceholder || 'Buscar cliente...'}
          onChangeText={onChangeText}
          value={value}
          testID="searchTextIpt"
        />
      </Container>
      <BoxButtonSearch onPress={handleToggleSearchVisible}>
        {isSearchVisible ? <CloseIcon /> : <SearchIcon />}
      </BoxButtonSearch>
    </>
  );
};

export default SearchBar;
