interface UserMgmtEmailVerifiedScreenProps {
  MainClassName: string;
  oobCode: string | null;
  Animation: AuthAnimationType;
  isEmailVerified?: boolean;
}

interface UserMgmtResetPasswordScreenProps {
  AnimationDivClassName: string;
  ContentClassName: string;
  oobCode: string | null;
  Animation: AuthAnimationType;
  setLoading: Dispatch<boolean>;
  Loading: boolean;
}
