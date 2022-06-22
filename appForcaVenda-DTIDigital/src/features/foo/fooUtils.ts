import { formatDate } from '../../shared/utils';

/**
 * Use this as a utility that concerns only the FEATURE
 */
const addNumbers = (numA: number, numB: number) => numA + numB;

const transformDate = (date: Date) => formatDate(date);

export { addNumbers, transformDate };
