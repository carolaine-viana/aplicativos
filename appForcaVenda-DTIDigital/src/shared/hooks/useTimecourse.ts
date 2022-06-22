import { TTimeCourse } from 'features/suppliers/suppliersUtils';
import { useState } from 'react';

export const useTimecourse = () => {
  const [timeCourse, setTimeCourse] = useState<TTimeCourse>('month');
  return {
    timeCourse,
    setTimeCourse,
  };
};
