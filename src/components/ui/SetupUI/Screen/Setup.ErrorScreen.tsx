import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SetupHeaderLabel } from 'components/label/SetupHeaderLabel';
import { SignInBackButton } from 'components/button/Setup/SignInBackButton';
import { SignInNextButton } from 'components/button/Setup/SignInNextButton';
import { YellowBulbHint } from 'components/hint/YellowBulbHint';
import { Home_Link, Manage_Your_Account_Link } from 'routers/RouterLinks';
import { LoaderHook } from 'hooks/Hooks.Loader';

export interface SetupErrorScreenProps {
  Type: 'databases-not-created' | 'get-user-failed' | undefined;
  ToastTitle: string;
  ToastDescription: string;
  ClassName?: string;
}

function SetupErrorScreen(props: SetupErrorScreenProps) {
  const { setLoader } = LoaderHook();
  const router = useRouter();

  const handleBackToHome = () => {
    setLoader(true);
    router.push(Home_Link);
  };

  const handleMoveToManageAccount = () => {
    setLoader(true);
    router.push(Manage_Your_Account_Link);
  };

  const handleReloadThePage = () => {
    router.refresh();
  };

  return (
    <div
      className={`${props.ClassName}  px-5 pt-20 md:p-14 relative flex flex-col w-full justify-center items-center`}
    >
      <Image
        height={100}
        width={100}
        className="opacity-30 pb-7"
        src="/vectors/emogi-face-error.svg"
        alt="setup-error"
      />
      <div className="max-w-[500px] space-y-5 relative w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="flex">
          <SetupHeaderLabel>
            {props.Type === 'databases-not-created' && 'Something went wrong'}
            {props.Type === 'get-user-failed' && 'Something went wrong'}
            {props.Type === undefined && props.ToastTitle}
          </SetupHeaderLabel>
        </div>
        <h6 className="font-normal text-center w-full text-white/75 text-[15px]">
          {props.Type === 'databases-not-created' &&
            'We apologize for the inconvenience, but there seems to be an error with the process of creation of databases.'}
          {props.Type === 'get-user-failed' &&
            'We apologize for the inconvenience, but there seems to be an error with the validating process.'}
          {props.Type === undefined && props.ToastDescription}
        </h6>
        {props.Type !== undefined && (
          <div className="flex">
            <YellowBulbHint
              Tooltip
              TooltipPlacement="top"
              ToottipTitle={
                (props.Type === 'get-user-failed' &&
                  'Encountered a content loading failure. To resolve the issue, we recommend refreshing the page for a fresh attempt at loading the content.') ||
                (props.Type === 'databases-not-created' &&
                  'To resolve the issue, please refresh your page to delete your account and then proceed to authenticate again. This will ensure a secure user experience.') ||
                ''
              }
              Label={
                (props.Type === 'get-user-failed' &&
                  'Pick up where you left off by simply reloading the page.') ||
                (props.Type === 'databases-not-created' &&
                  'Proceed a fresh start by simply reloading the page.') ||
                ''
              }
            />
          </div>
        )}
      </div>
      <div className="w-full flex-col space-y-2 mt-7 max-w-[750px]">
        {props.Type !== undefined && (
          <div className="w-full flex justify-start items-center">
            <SignInNextButton
              onClick={handleReloadThePage}
              Label="Reload the page"
            />
          </div>
        )}
        <div className="w-full flex justify-start items-center">
          <SignInNextButton
            onClick={handleMoveToManageAccount}
            Label="Move to manage account"
          />
        </div>
        <div className="w-full flex justify-start items-center">
          <SignInBackButton onClick={handleBackToHome} Label="Back to home" />
        </div>
      </div>
    </div>
  );
}

export default SetupErrorScreen;
