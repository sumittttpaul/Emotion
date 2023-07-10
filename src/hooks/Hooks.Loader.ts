import { create } from 'zustand';

export const LoaderHook = create<ILoaderHook>()((set) => ({
    Loader: false,
    setLoader: (value) => set(() => ({ Loader: value })),
  }));