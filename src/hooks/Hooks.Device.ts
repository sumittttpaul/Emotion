import { create } from 'zustand';

export const DeviceHook = create<IDeviceHook>()((set) => ({
  isMobile: false,
  setIsMobile: (value) => set(() => ({ isMobile: value })),
}));
