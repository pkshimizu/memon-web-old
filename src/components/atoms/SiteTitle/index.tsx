import React from 'react';
import { Typography } from '@material-ui/core';

interface SiteTitleProps {}

const SiteTitle: React.FC<SiteTitleProps> = props => {
  return <Typography variant={'h6'}>memon</Typography>;
};

export default SiteTitle;
