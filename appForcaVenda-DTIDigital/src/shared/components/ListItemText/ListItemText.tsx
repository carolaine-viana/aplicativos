import React, { PropsWithChildren } from 'react';
import { TextProps } from 'react-native';
import { IPalette } from '@shared/types/IThemeInterface';
import Divider from '../Divider/Divider';
import Typography from '../Typography/Typography';
import { ListItemContent, ListItemTitle } from './ListItemTextSC';
import { TypographySCProps } from '../Typography/TypographySC';

interface ListItemTextProps {
  title?: string;
  content: string | React.ReactElement;
  typographyProps?: PropsWithChildren<Partial<TypographySCProps & TextProps>>;
  bg?: keyof IPalette;
}

const ListItemText: React.FC<ListItemTextProps> = ({
  title,
  content,
  typographyProps = {
    variant: 'overlineMedium',
  },
  bg = 'blue50',
}) => {
  const propsApplyText = { variant: 'overlineMedium', color: 'gray600', ...typographyProps };
  return (
    <>
      {title && (
        <ListItemTitle variant="bodyMedium" color="primary">
          {title}
        </ListItemTitle>
      )}
      <ListItemContent bg={bg}>
        <Typography {...propsApplyText}>{content}</Typography>
      </ListItemContent>
      <Divider color="blue100" />
    </>
  );
};

export default ListItemText;
