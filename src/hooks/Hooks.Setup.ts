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

// IMP : Screen = null, MainScreen = CheckInfo
export const SetupHook = create<ISetupHook>()((set) => ({
  ResetCaptcha: false,
  setResetCaptcha: (value) => set(() => ({ SkipDialog: value })),
  SkipDialog: false,
  setSkipDialog: (value) => set(() => ({ SkipDialog: value })),
  Loading: false,
  setLoading: (value) => set(() => ({ Loading: value })),
  Screen: null, // null
  setScreen: (value) => set(() => ({ Screen: value })),
  ErrorType: undefined,
  setErrorType: (value) => set(() => ({ ErrorType: value })),
  MainScreen: 'CheckInfo', // CheckInfo
  setMainScreen: (value) => set(() => ({ MainScreen: value })),
}));
