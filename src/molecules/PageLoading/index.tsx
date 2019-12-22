import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

interface PageLoadingProps {}

const PageLoading: React.FC<PageLoadingProps> = props => {
  return (
    <Backdrop open={true}>
      <CircularProgress />
    </Backdrop>
  );
};

export default PageLoading;
