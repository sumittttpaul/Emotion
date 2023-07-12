'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SetupHeaderLabel } from 'components/label/SetupHeaderLabel';
import { Home_Link, Manage_Your_Account_Link } from 'routers/RouterLinks';
import { SignInBackButton } from 'components/button/Setup/SignInBackButton';
import { SignInNextButton } from 'components/button/Setup/SignInNextButton';
import { LoaderHook } from 'hooks/Hooks.Loader';

function UserMgmtErrorScreen() {
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

  return (
    <div className="md:h-[652px] px-5 pt-20 md:p-14 relative flex flex-col w-full h-full justify-center items-center">
      <Image
        height={100}
        width={100}
        className="opacity-30 pb-7 text-white text-xs"
        src="/vectors/emogi-face-error.svg"
        alt="setup-error"
      />
      <div className="max-w-[500px] space-y-5 relative w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="flex">
          <SetupHeaderLabel>Something went wrong</SetupHeaderLabel>
        </div>
        <h6 className="font-normal text-center w-full text-white/75 text-[15px]">
          We apologize for the inconvenience, but there seems to be an error
          with the mode process.
        </h6>
      </div>
      <div className="w-full flex-col space-y-2 mt-7 max-w-[750px]">
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

export default UserMgmtErrorScreen;
