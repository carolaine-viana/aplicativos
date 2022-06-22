import React, { ReactNode } from 'react';
import { TOption } from 'shared/types';
import { Container, ListItems, Content } from './AccordionListSC';

export interface IAccortionItem extends TOption {
  renderItemContent?: (item: TOption) => ReactNode;
  renderItem: (item: TOption, idx: number) => void;
}
interface AccordionListProps {
  accordionItems: IAccortionItem[];
}

const AccordionList: React.FC<AccordionListProps> = ({ accordionItems }) => (
  <Container>
    <Content>
      <ListItems showsVerticalScrollIndicator={false}>
        {accordionItems.map((item, idx) => item.renderItem(item, idx))}
      </ListItems>
    </Content>
  </Container>
);

export default AccordionList;
