import { create } from 'zustand';

interface IHomePageHook {
  HomePage: 'Discover' | 'Offers' | 'Collections';
  setHomePage: Dispatch<'Discover' | 'Offers' | 'Collections'>;
}

export const HomePageHook = create<IHomePageHook>()((set) => ({
  HomePage: 'Discover',
  setHomePage: (value) => set(() => ({ HomePage: value })),
}));
