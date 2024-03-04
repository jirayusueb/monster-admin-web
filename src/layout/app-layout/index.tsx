import AppLogo from '@/components/app-logo';
import { AppLayoutConfig } from '@/config/app-layout-config';
import { UserCircle } from 'lucide-react';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full bg-background">
        <div className="relative">
          <div className="transition-width flex h-full w-14 duration-150 ease-in-out">
            <div className="transition-width w-14 bg-secondary"></div>
            <div className="w-3 border-r bg-secondary"></div>
          </div>
          <div className="absolute inset-y-0 flex w-full flex-col justify-between gap-2 border border-y-0 border-l-0 bg-background opacity-100 transition-opacity duration-150 ease-in-out">
            <div className="mx-auto mt-2">
              <ul>
                <li className="size-9 flex items-center justify-center rounded-lg transition-all duration-300">
                  <Link href="#">
                    <AppLogo />
                  </Link>
                </li>
              </ul>
            </div>
            <nav className="mx-auto flex h-full flex-col justify-between overflow-y-auto">
              <ul className="flex flex-col gap-1">
                {AppLayoutConfig.sidebarNavItems.map((item, index) => (
                  <li
                    key={index}
                    className="size-9 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-muted"
                  >
                    <Link href={item.href}>
                      {item.icon ? (
                        <item.icon
                          size={20}
                          className="text-muted-foreground"
                        />
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mx-auto">
              <div className="m-4">
                <UserCircle size={24} className="text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-w-[0px] flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
