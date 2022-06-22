import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DeviceFeatures from '@shared/base/BaseDeviceFeatures';
import { RoadMapManager } from '@features/roadMap/services/RoadMapManager';
import { EventsNames } from 'shared/types';
import { Analytics } from '../../../shared/base/Analytics';
import {
  FlexCenter,
  TouchableButton,
  ModalPopUp,
  Typography,
  DefaultIcon,
  DefaultDateTimePicker,
  TDatePickerMode,
  Spinner,
  Success,
} from '../../../shared/components';
import {
  Container,
  FormContainer,
  FormControl,
  FormControlsContainer,
  IconContainer,
} from './VisitScheduleSC';
import VisitManager from '../service/VisitManager';
import { mountSchedule } from '../visitUtils';
import { formatDate } from '../../../shared/utils';
import { ICustomerReadDto } from '../../../shared/models/Customer';

const customerVisitsListManager = new RoadMapManager();
interface VisitScheduleFormProps {
  selectedCustomer: ICustomerReadDto | null | undefined;
  showForm: boolean;
  closeForm: () => void;
  isUpdate?: boolean;
}

const VisitScheduleForm: React.FC<VisitScheduleFormProps> = (props) => {
  const { selectedCustomer, showForm, closeForm, isUpdate } = props;

  const [date, setDate] = useState<Date>(new Date());

  const [statusSave, setStatusSave] = useState({
    loading: false,
    success: false,
  });

  const [initialLoad, setInitial] = useState(true);

  const [mode, setMode] = useState<TDatePickerMode>('date');
  const [show, setShow] = useState(false);
  const isModeDate = mode === 'date';
  const isModeTime = mode === 'time';

  useEffect(() => {
    if (isUpdate && selectedCustomer) {
      setDate(new Date(selectedCustomer?.schedule));
    }
  }, [isUpdate, selectedCustomer]);

  const showMode = (currentMode: TDatePickerMode) => {
    setShow(true);
    setInitial(false);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const closeDatePicker = () => {
    setShow(false);
  };

  const handleChangeAndroid = (selectedDate: Date) => {
    if (DeviceFeatures.isAndroid) {
      const tempMode = isModeDate ? 'time' : null;
      closeDatePicker();
      setDate(selectedDate);
      setMode(tempMode);
    }
  };

  const handleChangeIos = (selectedDate: Date) => {
    if (DeviceFeatures.isIOS) {
      setDate(selectedDate);
    }
  };

  const onChangeSchedule = (event: Event, selectedDate?: Date) => {
    if (selectedDate) {
      const newDate = isModeDate ? selectedDate : mountSchedule(date, selectedDate);
      handleChangeAndroid(newDate);
      handleChangeIos(newDate);
      setInitial(false);
    } else {
      closeDatePicker();
    }
  };

  const handleOnClose = async () => {
    if (showForm) {
      setInitial(true);
      setStatusSave({
        loading: false,
        success: false,
      });
      closeDatePicker();
      closeForm();
    }
  };
  const metrics = Analytics.getInstance();

  const handleConfirm = async () => {
    await saveVisit();
    metrics.sendEvent(EventsNames.SCHEDULED_VISIT);
  };

  const saveVisit = async (): Promise<void> => {
    try {
      if (selectedCustomer) {
        const visitManager = new VisitManager();

        setStatusSave({
          ...statusSave,
          loading: true,
        });

        if (isUpdate) {
          await customerVisitsListManager.visitEdit(selectedCustomer?.id.toString(), date);
        } else {
          await visitManager.saveVisit(selectedCustomer, {
            schedule: date,
          });
        }

        setStatusSave({
          loading: false,
          success: true,
        });
      }
    } catch (error) {
      setStatusSave({
        loading: false,
        success: false,
      });
    }
  };

  const renderPlaceHolder = (datePlaceHolder = true) => {
    let placeHolder = datePlaceHolder ? 'Escolha uma data' : 'Escolha o horário';

    if (datePlaceHolder && !initialLoad) {
      placeHolder = formatDate(date);
    } else if (!datePlaceHolder && !initialLoad) {
      placeHolder = formatDate(date, 'hh:mm');
    } else if (datePlaceHolder && isUpdate) {
      placeHolder = formatDate(date);
    } else if (!datePlaceHolder && isUpdate) {
      placeHolder = formatDate(date, 'hh:mm');
    }
    return (
      <Typography variant="overline" bold color="secondary">
        {placeHolder}
      </Typography>
    );
  };

  const renderButton = () => {
    if (statusSave.loading) {
      return <Spinner size="large" testID="loadingIndicator" />;
    }
    return (
      <TouchableButton
        testID="confirmButton"
        disabled={initialLoad}
        title="Confirmar"
        onPress={handleConfirm}
      />
    );
  };

  const renderModalContent = () => {
    if (showForm && statusSave.success) {
      const msg = isUpdate ? 'Atualizado\ncom sucesso!' : 'Adicionado\ncom sucesso!';
      return <Success message={msg} />;
    }
    return (
      <FormContainer>
        <FlexCenter>
          <Typography variant="lead" bold>
            Adicionar ao roteiro
          </Typography>
          <FormControlsContainer>
            <TouchableOpacity onPress={showDatepicker}>
              <FormControl>
                <IconContainer>
                  <DefaultIcon name="calendar" size={26} active={isModeDate} />
                </IconContainer>
                {renderPlaceHolder()}
              </FormControl>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimepicker}>
              <FormControl>
                <IconContainer>
                  <DefaultIcon name="clock" size={26} active={isModeTime} />
                </IconContainer>
                {renderPlaceHolder(false)}
              </FormControl>
            </TouchableOpacity>
          </FormControlsContainer>

          {renderButton()}
        </FlexCenter>

        <DefaultDateTimePicker
          testID="dateTimePicker"
          show={show}
          value={date}
          mode={mode}
          onChange={onChangeSchedule}
          closeDatePicker={closeDatePicker}
        />
      </FormContainer>
    );
  };

  return (
    <ModalPopUp visible={showForm} onCloseModal={handleOnClose}>
      <Container>{renderModalContent()}</Container>
    </ModalPopUp>
  );
};

export default VisitScheduleForm;
