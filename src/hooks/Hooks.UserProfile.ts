import { create } from 'zustand';

export const userProfileHook = create<IUserProfileHook>()((set) => ({
  FullName: '',
  EmailAddress: '',
  PhoneNumber: '',
  PhotoUrl: '',
  DateOfBirth: '',
  Gender: '',
  isEmailVerified: undefined,
  setFullName: (value) => set(() => ({ FullName: value })),
  setEmailAddress: (value) => set(() => ({ EmailAddress: value })),
  setPhoneNumber: (value) => set(() => ({ PhoneNumber: value })),
  setPhotoUrl: (value) => set(() => ({ PhotoUrl: value })),
  setDateOfBirth: (value) => set(() => ({ DateOfBirth: value })),
  setGender: (value) => set(() => ({ Gender: value })),
  setIsEmailVerified: (value) => set(() => ({ isEmailVerified: value })),
}));
