import React, { useEffect, useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle, Pressable, Animated } from 'react-native';

import { TOption } from '@shared/types';

import CardPaper from '../CardPaper/CardPaper';
import DefaultIcon from '../DefaultIcon/DefaultIcon';
import Typography from '../Typography/Typography';

import {
  SelectContainer,
  SelectContent,
  DropDownContainer,
  DropDownContent,
} from './DropDownSelectSC';

interface DropDownSelectProps {
  renderOption: (o: TOption) => void;
  options: TOption[];
  selectedOption: TOption;
  placeholder?: string;
  dropdownOpen: boolean;
  toggleDropDown: () => void;
}

const DropDownSelect: React.FC<DropDownSelectProps> = ({
  options,
  renderOption,
  selectedOption,
  toggleDropDown,
  dropdownOpen = false,
  placeholder = '',
}) => {
  const height = useState(new Animated.Value(0))[0];

  const [layout, setLayout] = useState<Partial<LayoutRectangle>>({
    y: 0,
    width: 0,
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    setLayout({ ...event.nativeEvent.layout });
  };

  useEffect(() => {
    if (dropdownOpen) {
      Animated.timing(height, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
    if (!dropdownOpen) {
      Animated.timing(height, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [dropdownOpen, height]);

  return (
    <>
      <SelectContainer onLayout={handleLayout}>
        <Pressable onPress={() => toggleDropDown()}>
          <CardPaper
            bg="light"
            alignItems="flex-start"
            renderBody={() => (
              <SelectContent>
                <Typography variant="bodyMedium">
                  {selectedOption ? selectedOption.label : placeholder}
                </Typography>
                <DefaultIcon name="chevron-down" size={24} color="primary" />
              </SelectContent>
            )}
          />
        </Pressable>
      </SelectContainer>
      <DropDownContainer
        layout={layout}
        isOpen={dropdownOpen}
        style={{
          opacity: height,
          transform: [
            {
              scaleY: height,
            },
          ],
        }}
      >
        <DropDownContent>{options.map((option) => renderOption(option))}</DropDownContent>
      </DropDownContainer>
    </>
  );
};

export default DropDownSelect;
