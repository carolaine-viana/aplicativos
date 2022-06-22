import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import PerformanceIndicators from 'features/performanceIndicators/views/PerformanceIndicators';
import { CustomStatusBar, EnvWrapper } from '@shared/components';
import BestResult from '@features/bestResult/views/BestResult';
import { Tutorial } from '@features/tutorial';
import { PrivacyPolicy } from '@features/privacyPolicy';
import { useBestResultModal } from '@shared/hooks/useBestResultModal';

import { Wrapper, Container, DashContent } from './DashBoardSC';
import DashHeader from './DashHeader';
import DashCardsNavigation from './DashCardsNavigation';
import CardColapseModal from './CardColapseModal';

const Dashboard: React.FC = () => {
  const theme = useTheme();

  const { bestResultOpened, setModalVisible } = useBestResultModal();

  const [modalCardColapseOpen, setModalCardColapseOpen] = useState(false);
  const [indicatorData, setIndicatorData] = useState({
    title: '',
    description: '',
  });

  function openModalCardColapse(indicator) {
    setIndicatorData(indicator);
    setModalCardColapseOpen(true);
  }

  function closeModalCardColapse() {
    setModalCardColapseOpen(false);
  }

  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.blue600} barStyle="light-content" />
      <Wrapper>
        <Container showsVerticalScrollIndicator={false}>
          <DashHeader />
          <DashContent>
            <PerformanceIndicators
              setModalVisible={setModalVisible}
              onPressInfo={(indicator) => openModalCardColapse(indicator)}
            />
          </DashContent>
          <DashCardsNavigation />
        </Container>
      </Wrapper>
      <BestResult modalVisible={bestResultOpened} closeModal={() => setModalVisible(false)} />
      <Tutorial />

      <EnvWrapper renderHomContent={() => <PrivacyPolicy fromMenu={false} />} />
      <CardColapseModal
        modalVisible={modalCardColapseOpen}
        onCloseModal={closeModalCardColapse}
        indicator={indicatorData}
      />
    </>
  );
};

export default Dashboard;
