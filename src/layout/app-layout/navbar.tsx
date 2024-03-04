import AppLogo from '@/components/app-logo';
import React from 'react';

const Navbar = React.memo(() => {
  return (
    <div className="h-full w-14 overflow-y-hidden border-r">
      <div className="flex h-full flex-col items-center justify-between p-2">
        <div className="flex flex-col space-y-2">
          <AppLogo />
          {/* <ShellNavbarList items={navbarCogfig.items} /> */}
        </div>
      </div>
    </div>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
