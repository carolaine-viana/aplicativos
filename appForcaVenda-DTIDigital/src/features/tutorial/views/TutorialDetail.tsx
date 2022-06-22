/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { DefaultScreen, DefaultIcon, StepsControls } from 'shared/components';
import { DeviceFeatures } from 'shared/base';
import theme from 'shared/constants/theme';
import { RoutesNames, TTutorialsDescription } from 'shared/types';
import { tutorials } from '../tutorialUtils';
import {
  TutoDetailsContent,
  TutoDetailsInfoText,
  TutoDetailsContainer,
  TutoHeader,
  TutoDetailsIconClose,
} from './TutorialSC';
import TutorialManager from '../services/TutorialManager';

interface TutorialDetailProps {}

const Manager = new TutorialManager();

type ParamList = {
  detail: {
    activeTutorial: string;
  };
};

const TutorialDetail: React.FC<TutorialDetailProps> = () => {
  const [carouselSelectedIdx, setCarouselSelectedIdx] = useState(0);

  const route = useRoute<RouteProp<ParamList, 'detail'>>();

  const { activeTutorial } = route.params;

  let carouselref = useRef<{ snapToItem: Function } | null>(null);
  const navigation = useNavigation();

  const tutorial = tutorials[activeTutorial as keyof typeof tutorials];

  if (!carouselref) {
    return null;
  }

  const handleClose = async () => {
    try {
      await Manager.saveCompletedTutorial(activeTutorial as TTutorialsDescription);
    } catch {
    } finally {
      navigation.navigate(RoutesNames.BOTTOMTABS);
    }
  };
  return (
    <DefaultScreen statusBarColor="gray100">
      <TutoDetailsContainer>
        <TutoHeader>
          <TutoDetailsIconClose onPress={handleClose}>
            {carouselSelectedIdx === tutorial.details.steps.length - 1 && (
              <DefaultIcon name="x" size={24} />
            )}
          </TutoDetailsIconClose>
        </TutoHeader>
        <Carousel
          ref={(r) => {
            carouselref = r;
          }}
          pagingEnabled
          loop={false}
          data={tutorial.details.steps}
          renderItem={({ item }) => (
            <TutoDetailsContent>
              <TutoDetailsInfoText variant="leadMedium" color="blue300" align="center">
                {item.stepMessage}
              </TutoDetailsInfoText>

              <Image source={item.stepImagePath} />
            </TutoDetailsContent>
          )}
          itemWidth={DeviceFeatures.dimensions.width}
          sliderWidth={DeviceFeatures.dimensions.width}
          onSnapToItem={(index) => setCarouselSelectedIdx(index)}
        />

        <StepsControls
          totalSteps={tutorial.details.steps.length}
          currentStep={carouselSelectedIdx}
          onClickPrev={() => {
            carouselref?.snapToItem?.(carouselSelectedIdx - 1);

            setCarouselSelectedIdx((current) => current - 1);
          }}
          onClickNext={() => {
            carouselref?.snapToItem?.(carouselSelectedIdx + 1);
            setCarouselSelectedIdx((current) => current + 1);
          }}
        />

        <Pagination
          dotsLength={tutorial.details.steps.length}
          activeDotIndex={carouselSelectedIdx}
          dotStyle={{
            backgroundColor: theme.palette.blue600,
            width: 10,
            height: 10,
            borderRadius: 5,
          }}
        />
      </TutoDetailsContainer>
    </DefaultScreen>
  );
};

export default TutorialDetail;
