import React from 'react';

interface SiteLogoProps {}

const SiteLogo: React.FC<SiteLogoProps> = props => {
  return <img src={'/img/siteLogo.png'} width={'48px'} />;
};

export default SiteLogo;
