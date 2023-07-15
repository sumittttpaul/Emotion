import { ToastHook } from 'hooks/global/Hooks.Toast';
import { userProfileHook } from 'hooks/global/Hooks.UserProfile';
import { SignInWithPhoneNumber } from 'functions/AuthAlgorithms';
import SetupFooter from 'components/footer/SetupFooter';
import YellowBulbHint from 'components/hint/YellowBulbHint';
import SignInNextButton from 'components/button/Setup/SignInNextButton';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import SetupIconNumberTextField from 'interfaces/Setup/Input/Setup.Input.IconNumber';

function SetupLoginPhoneScreen(props: SetupLoginPhoneScreenProps) {
  const { PhoneNumber, setPhoneNumber } = userProfileHook();
  const { setToast } = ToastHook();

  const EmptyPhoneNumber = () => {
    setPhoneNumber('');
  };

  // Validation
  const ValidatePhoneNumber =
    PhoneNumber.length === 10 && PhoneNumber.length > 9;

  // Screens
  const MoveToOTPScreen = () => {
    props.setScreen('login-otp');
  };
  const MoveToSignInWithEmailAddress = () => {
    props.setScreen('login-email');
  };
  const MoveToOtherSignInOptions = () => {
    props.setScreen('login-others');
  };

  // Submit
  const PhoneSubmitClick = () => {
    if (ValidatePhoneNumber) {
      SignInWithPhoneNumber({
        PhoneNumber: parseInt(PhoneNumber),
        EmptyPhoneNumber: EmptyPhoneNumber,
        Loading: props.setLoading,
        ResetCaptcha: props.ResetCaptcha,
        setResetCaptcha: props.setResetCaptcha,
        MoveToOTPScreen: MoveToOTPScreen,
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
        Title: 'Incorrect phone number',
        Description: 'Please enter a valid phone number.',
        Type: 'Error',
        Show: true,
      });
    }
  };

  return (
    <div className={`${props.ParentDivClassName} relative w-full`}>
      <div
        className={`${props.ContentClassName} flex w-full flex-col space-y-4`}
      >
        <SetupIconNumberTextField
          Value={PhoneNumber}
          setValue={setPhoneNumber}
          HandleSubmit={PhoneSubmitClick}
          ValidateValue={ValidatePhoneNumber}
          Loading={props.Loading}
        />
        <div className="flex w-full flex-col space-y-1">
          <div className="flex w-full justify-start">
            <SignInNextButton
              Label="Sign in with email address"
              onClick={MoveToSignInWithEmailAddress}
            />
          </div>
          <div className="flex w-full justify-start">
            <SignInNextButton
              Label="Sign-in options"
              onClick={MoveToOtherSignInOptions}
            />
          </div>
        </div>
        <div className="flex justify-start">
          <YellowBulbHint
            Tooltip
            TooltipPlacement="top"
            ToottipTitle="When creating an Emotion account for the first time, new users are often presented with two primary options to initiate the registration process: they can either continue by providing their phone number or explore alternative sign-in methods, such as google account, facebook account, apple account or microsoft account."
            Label="New user continue with phone number or sign-in options."
          />
        </div>
        <SetupFooter ButtonLabel="Send OTP" />
      </div>
      <div className="flex w-full justify-end">
        <SetupSubmitButton
          Disabled={!ValidatePhoneNumber}
          onClick={PhoneSubmitClick}
        >
          Send OTP
        </SetupSubmitButton>
      </div>
    </div>
  );
}

export default SetupLoginPhoneScreen;
