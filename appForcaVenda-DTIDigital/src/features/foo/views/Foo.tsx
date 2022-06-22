import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../shared/redux/reduxStore';
import { updateShowFoo } from '../redux';
import { loadFooData } from '../redux/FooOperations.esig';
import { FlexContainer, Typography } from '../../../shared/components';

interface FooProps {}

const Foo: React.FC<FooProps> = () => {
  const fooState = useSelector((state: RootState) => state.foo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFooData.run());
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateShowFoo.run(true));
  }, [dispatch]);

  return (
    <FlexContainer testID="fooScreen">
      <Typography>
        Foosfsa:
        {String(fooState.showFoo)}
      </Typography>
      <Typography>
        Loading:
        {String(fooState.loading)}
      </Typography>
    </FlexContainer>
  );
};

export default Foo;
