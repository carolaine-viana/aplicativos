import React from 'react';
import { Typography } from 'shared/components';
import { IIncentiveDetail } from 'shared/types';
import { RowContent } from './DetailsTabSC';

interface IncentiveInfoProps extends IIncentiveDetail {}

const IncentiveInfo: React.FC<Partial<IncentiveInfoProps>> = ({
  id,
  targetGroup,
  mechanics,
  status,
  startDate,
  endDate,
}) => (
  <>
    <RowContent>
      <Typography color="gray600" variant="overline">
        {'COD: '}
      </Typography>
      <Typography color="gray600" variant="overlineMedium">
        {id}
      </Typography>
    </RowContent>
    <RowContent>
      <Typography color="gray600" variant="overline">
        {'PÚBLICO ALVO: '}
      </Typography>
      <Typography color="gray600" variant="overlineMedium">
        {targetGroup}
      </Typography>
    </RowContent>
    {mechanics && (
      <RowContent>
        <Typography color="gray600" variant="overline">
          {'MECÂNICA: '}
        </Typography>
        <Typography color="gray600" variant="overlineMedium">
          {mechanics}
        </Typography>
      </RowContent>
    )}
    <RowContent>
      <Typography color="gray600" variant="overline">
        {'STATUS: '}
      </Typography>
      <Typography color="gray600" variant="overlineMedium">
        {status}
      </Typography>
    </RowContent>
    {startDate && endDate && (
      <RowContent>
        <Typography color="gray600" variant="overline">
          {'PERÍODO: '}
          <Typography color="gray600" variant="overlineMedium">
            {`${startDate} a ${endDate}`}
          </Typography>
        </Typography>
      </RowContent>
    )}
  </>
);

export default IncentiveInfo;
