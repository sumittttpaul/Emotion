export type AuthType =
  | 'login-phone'
  | 'login-email'
  | 'login-others'
  | 'login-otp'
  | 'login-password'
  | 'login-forgot-password'
  | 'register-name'
  | 'register-phone'
  | 'register-otp'
  | 'register-email'
  | 'register-password'
  | 'register-verify-email'
  | 'register-profile-picture'
  | 'register-date-of-birth'
  | 'register-gender'
  | null;

export type AuthAnimationType = {
  Initial: {
    x: number;
    opacity: number;
  };
  Final: {
    x: number;
    opacity: number;
  };
  Transition: {
    type: string;
  };
};

export type AuthErrorType = {
  show: boolean;
  type: 'database-not-created' | 'get-user-failed' | undefined;
};
