import { m } from 'framer-motion';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import SignInBackButton from 'components/button/Setup/SignInBackButton';
import { PasswordReset } from 'functions/AuthAlgorithms';
import { userProfileHook } from 'hooks/Hooks.UserProfile';
import { ToastHook } from 'hooks/Hooks.Toast';
import { useState } from 'react';

function SetupLoginForgotPasswordScreen(
  props: SetupLoginForgotPasswordScreenProps,
) {
  const { EmailAddress } = userProfileHook();
  const { setToast } = ToastHook();

  const [SubmitHide, setSubmitHide] = useState(false);

  // Screens
  const BackToPasswordScreen = () => {
    props.setScreen('login-password');
  };

  const PasswordResetClick = () => {
    if (EmailAddress) {
      PasswordReset({
        EmailAddress: EmailAddress,
        Loading: props.setLoading,
        Next: () => setSubmitHide(true),
        ShowToast: (Title, Description, Type, Show) =>
          setToast({
            Title: Title,
            Description: Description,
            Type: Type,
            Show: Show,
          }),
      });
    } else {
      setToast({
        Title: 'Email Address is empty',
        Description:
          'Please provide your email address to get password reset link',
        Type: 'Error',
        Show: true,
      });
    }
  };

  return (
    <m.div
      className={`${props.AnimationDivClassName} relative w-full`}
      initial={props.Animation.Initial}
      animate={props.Animation.Final}
      transition={props.Animation.Transition}
    >
      <div
        className={`${props.ContentClassName} flex w-full flex-col space-y-4`}
      >
        <p className="w-full text-left text-sm font-normal tracking-wide text-white/75">
          An email will be sent to the email address you provided earlier. You
          can use the link in the email to reset your password.
        </p>
        <div className="flex w-full justify-start">
          <SignInBackButton Label="Back" onClick={BackToPasswordScreen} />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex">
          {SubmitHide === false && (
            <SetupSubmitButton
              Disabled={SubmitHide}
              onClick={PasswordResetClick}
            >
              Reset Password
            </SetupSubmitButton>
          )}
        </div>
      </div>
    </m.div>
  );
}

export default SetupLoginForgotPasswordScreen;
