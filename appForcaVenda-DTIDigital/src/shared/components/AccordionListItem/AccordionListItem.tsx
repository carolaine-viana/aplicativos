import React from 'react';
import { Pressable } from 'react-native';

import { TOption } from 'shared/types';
import Typography from '../Typography/Typography';
import DefaultIcon from '../DefaultIcon/DefaultIcon';
import Divider from '../Divider/Divider';
import { AccordionDefaultItem } from './AccordionListItemSC';

interface AccordionListItemProps {
  isOpen: boolean;
  item: TOption;
  idx: number;
  onOpenItem: () => void;
}

const AccordionListItem: React.FC<AccordionListItemProps> = ({
  isOpen,
  item,
  children,
  onOpenItem,
}) => (
  <Pressable key={item.value} testID={item.label} onPress={() => onOpenItem()}>
    <AccordionDefaultItem>
      <Typography variant="bodyMedium" color="primary">
        {item.label}
      </Typography>
      <DefaultIcon size={24} color="primary" name={isOpen ? 'chevron-up' : 'chevron-down'} />
    </AccordionDefaultItem>
    {!isOpen && <Divider noMarge />}
    {children}
  </Pressable>
);

export default AccordionListItem;
