/**
 * Use this to deal/manipulate dates
 */
import * as dateFNS from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { zonedTimeToUtc } from 'date-fns-tz';

interface IDateUtils {
  getTimeZonedDate: (date: Date) => Date;
  formatDatePtBr: (date: Date, format?: string) => string;
  formatDateOnlyPtBr: (date: Date, format?: string) => string;
  formatHour: (date: Date, format?: string) => string;
}

const getTimeZonedDate: IDateUtils['getTimeZonedDate'] = (date: Date) =>
  zonedTimeToUtc(date, 'ptBR');

const formatDateOnlyPtBr: IDateUtils['formatDateOnlyPtBr'] = (
  date: Date,
  format = " dd 'de' MMMM "
) =>
  dateFNS.format(date, format, {
    locale: pt,
  });

const formatHour: IDateUtils['formatHour'] = (date: Date, format = "HH:mm'h'") =>
  dateFNS.format(date, format);

const formatDate = (date: Date, format = 'dd-MM-yyyy') => dateFNS.format(date, format);

const getUnixTime = (date: Date) => dateFNS.getUnixTime(date);
const getDateFromUnix = (dateNumber: number) => dateFNS.fromUnixTime(dateNumber);

const getDateWithTime = (date: Date, h: string | number, m: string | number) => {
  const dateWithTime = dateFNS.setHours(date, Number(h));
  dateWithTime.setMinutes(Number(m || 0));
  return dateWithTime;
};

const getNumberDayOfWeek = (date: Date) => dateFNS.getDay(date);

const getLastMonday = (fromDate: Date) => {
  let lastMondayDate = fromDate;
  while (!dateFNS.isMonday(lastMondayDate)) {
    lastMondayDate = dateFNS.subDays(lastMondayDate, 1);
  }
  return lastMondayDate;
};

const addDays = (fromDate = new Date(), amount = 0) => dateFNS.addDays(fromDate, amount);

const addMinutes = (fromDate: Date | number, amount: number) =>
  dateFNS.addMinutes(fromDate, amount);

const getStartOfMonth = (date: Date) => getTimeZonedDate(dateFNS.startOfMonth(date));

const getEndOfMonth = (date: Date) => getTimeZonedDate(dateFNS.endOfMonth(date));

const mountTokenExpirationDate = (tokenExpirationSeconds: number) => {
  const offSetMinutes = 5;
  const now = new Date();
  const time = addMinutes(now, tokenExpirationSeconds / 60 - offSetMinutes);
  return time;
};

const getYearMonth = (
  date = new Date()
): { monthYearNumber: string; monthYearDescription: string } => ({
  monthYearNumber: dateFNS.format(date, 'yyyyMM'),
  monthYearDescription: dateFNS.format(date, "MMMM' 'yyyy", {
    locale: pt,
  }),
});

const getMonthDescription = (month: number = 0, format = 'MMM') => {
  const year = new Date().getFullYear();
  return dateFNS.format(new Date(Number(year), Number(month)), format, {
    locale: pt,
  });
};

const subtractMonths = (date = new Date(), amountMonths: number) =>
  dateFNS.subMonths(date, amountMonths);

const getISOStringDate = (date: Date) => date.toISOString();

const getDiffHoursFromDate = (fromDate: Date, toDate: Date) => {
  const subtractHours = dateFNS.differenceInHours(fromDate, toDate);
  return subtractHours;
};

const getLastMonthsDate = (
  amountMonths: number,
  includeCurrentMonth: boolean = false,
  formatDateString: string = 'MMMM yyyy'
) => {
  let currentDate = new Date();
  const lastMonthsDates: { stringDate: string; pureDate: Date }[] = [];

  for (let index = amountMonths; index > 0; index--) {
    const lastMonth = subtractMonths(currentDate, 1);
    const formatedDate = dateFNS.format(lastMonth, formatDateString, {
      locale: pt,
    });
    lastMonthsDates.push({ stringDate: formatedDate, pureDate: lastMonth });
    currentDate = lastMonth;
  }

  if (includeCurrentMonth) {
    const today = new Date();
    lastMonthsDates.unshift({
      stringDate: dateFNS.format(today, formatDateString, {
        locale: pt,
      }),
      pureDate: today,
    });
  }

  return lastMonthsDates;
};

export {
  formatDate,
  getUnixTime,
  getDateFromUnix,
  getDateWithTime,
  formatHour,
  formatDateOnlyPtBr,
  getNumberDayOfWeek,
  getLastMonday,
  addDays,
  addMinutes,
  getStartOfMonth,
  getEndOfMonth,
  getTimeZonedDate,
  mountTokenExpirationDate,
  getYearMonth,
  getMonthDescription,
  subtractMonths,
  getDiffHoursFromDate,
  getISOStringDate,
  getLastMonthsDate,
};
