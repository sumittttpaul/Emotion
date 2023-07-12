import { create } from 'zustand';

export const HomePageHook = create<IHomePageHook>()((set) => ({
  HomePage: 'Discover',
  setHomePage: (value) => set(() => ({ HomePage: value })),
}));
