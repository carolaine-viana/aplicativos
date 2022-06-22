import React from 'react';
import { Pressable } from 'react-native';
import DefaultIcon from '../DefaultIcon/DefaultIcon';
import Typography from '../Typography/Typography';
import { Container, Content, ContainerControl, Control } from './StepsControlsSC';

interface StepsControlsProps {
  totalSteps: number;
  currentStep: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const StepsControls: React.FC<StepsControlsProps> = ({
  totalSteps,
  currentStep,
  onClickPrev,
  onClickNext,
}) => {
  const shouldRenderPrev = currentStep > 0 && totalSteps > 1;
  const shouldRenderNext = totalSteps > 1 && currentStep < totalSteps - 1;

  return (
    <Container>
      <Content
        shouldCenter={
          (shouldRenderPrev && !shouldRenderNext) || (shouldRenderNext && !shouldRenderPrev)
        }
      >
        {shouldRenderPrev && (
          <Pressable onPress={onClickPrev}>
            <ContainerControl>
              <Control>
                <DefaultIcon name="chevron-left" size={24} color="light" />
              </Control>
              <Typography variant="overline" color="primary">
                Anterior
              </Typography>
            </ContainerControl>
          </Pressable>
        )}

        {shouldRenderNext && (
          <Pressable onPress={onClickNext}>
            <ContainerControl>
              <Control>
                <DefaultIcon name="chevron-right" size={24} color="light" />
              </Control>
              <Typography variant="overline" color="primary">
                Próximo
              </Typography>
            </ContainerControl>
          </Pressable>
        )}
      </Content>
    </Container>
  );
};

export default StepsControls;
