import React from 'react';
import Avatar from '@shared/components/Avatar/Avatar';
import { FlexSlice } from '@shared/components/FlexBox/FlexBox';
import { PaperWrapper, CardContainer, ItemContainer, TextContainer } from './ListItemAvatarSC';
import Typography from '../Typography/Typography';
import DefaultIcon from '../DefaultIcon/DefaultIcon';
import CardPaper from '../CardPaper/CardPaper';

interface ListItemAvatarProps {
  mainText: string;
  itemHeight?: number;
  renderSecondaryText?: () => void;
  renderCustomAvatar?: () => React.ReactNode;
  navigateTo?: () => void;
}

const ListItemAvatar: React.FC<ListItemAvatarProps> = ({
  mainText,
  itemHeight = 100,
  renderSecondaryText,
  renderCustomAvatar,
  navigateTo,
}) => {
  const renderAvatar = () => {
    if (renderCustomAvatar) {
      return renderCustomAvatar();
    }
    return <Avatar name={mainText} testID={`rca-avatar${mainText}`} />;
  };

  const renderContent = () => (
    <CardContainer height={itemHeight} onPress={navigateTo}>
      <ItemContainer space="evenly" align="center">
        <FlexSlice flex={3}>{renderAvatar()}</FlexSlice>
        <FlexSlice flex={7}>
          <TextContainer>
            <Typography testID="rcaName" variant="leadMedium">
              {mainText}
            </Typography>

            {renderSecondaryText?.()}
          </TextContainer>
        </FlexSlice>
        <FlexSlice testID="rcaChevronIcon" flex={1}>
          {navigateTo && <DefaultIcon name="chevron-right" size={24} color="primary" />}
        </FlexSlice>
      </ItemContainer>
    </CardContainer>
  );
  return (
    <PaperWrapper>
      <CardPaper renderBody={() => renderContent()} />
    </PaperWrapper>
  );
};

export default ListItemAvatar;
