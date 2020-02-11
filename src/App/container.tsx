import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../stores';
import React, { useEffect } from 'react';
import App from './index';
import PageLoading from '../components/molecules/PageLoading';
import { loadUser } from '../stores/Users/actions';

const AppContainer: React.FC = () => {
  const loading = useSelector<RootState, boolean>(state => state.system.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  if (loading) {
    return <PageLoading />;
  }
  return <App />;
};

export default AppContainer;
