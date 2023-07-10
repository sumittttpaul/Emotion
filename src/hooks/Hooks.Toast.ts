import { create } from 'zustand';

export const ToastHook = create<IToastHook>()((set) => ({
    Toast: { Show: false, Title: '', Description: '', Type: '' },
    setToast: (value) => set(() => ({ Toast: value })),
  }));