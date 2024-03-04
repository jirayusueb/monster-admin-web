import { Home, LucideIcon, PackagePlus, Receipt } from 'lucide-react';

export interface SidebarNavItems {
  title: string;
  href: string;
  icon?: LucideIcon;
}

export interface AppLayoutConfig {
  sidebarNavItems: SidebarNavItems[];
}

export const AppLayoutConfig: AppLayoutConfig = {
  sidebarNavItems: [
    { title: 'Home', href: '/home', icon: Home },
    { title: 'Product', href: '/product', icon: PackagePlus },
    { title: 'Order', href: '/order', icon: Receipt },
  ],
};
