import React from 'react';

const AppLogo = React.memo(() => {
  return <p className="text-sm text-muted-foreground">LOGO</p>;
});

AppLogo.displayName = 'AppLogo';

export default AppLogo;
