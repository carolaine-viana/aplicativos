import { getDateWithTime } from '../../shared/utils';

export const mountSchedule = (date: Date, schedule: Date) => {
  const hour = schedule.getHours();
  const minute = schedule.getMinutes();
  const newDate = getDateWithTime(date, hour, minute);
  return newDate;
};
