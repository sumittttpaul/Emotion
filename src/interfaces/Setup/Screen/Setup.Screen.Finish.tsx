import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SetupHeaderLabel from 'components/label/SetupHeaderLabel';
import SetupSubmitButton from 'components/button/Setup/SetupSubmitButton';
import { LoaderHook } from 'hooks/Hooks.Loader';

export interface SetupFinishScreenProps {
  ClassName: string;
}

function SetupFinishScreen(props: SetupFinishScreenProps) {
  const { setLoader } = LoaderHook();
  const router = useRouter();

  const handleFinish = () => {
    setLoader(true);
    router.push('/');
  };

  return (
    <div
      className={`${props.ClassName} p-5 md:p-14 space-y-7 w-full flex flex-col relative items-center justify-center`}
    >
      <div className="pt-14 md:pt-0 w-full relative flex justify-center items-center">
        <Image
          height={275} //320
          width={600} //700
          src="/vectors/register-finish-1.svg"
          alt="register-finish"
          className="text-white text-xs"
        />
      </div>
      <div className="space-y-4 w-full flex flex-col items-center justify-center">
        <div className="relative flex space-x-5 items-center">
          <Image
            height={30}
            width={30}
            src="/icons/check-circle-green.svg"
            alt=""
          />
          <SetupHeaderLabel>You are all set</SetupHeaderLabel>
        </div>
        <div className="w-full flex flex-col max-w-[550px] space-y-3">
          <p className="ml-0 md:ml-3 font-normal line-clamp-2 text-center w-full text-white/75 text-[15px]">
            &quot;The only way to do great work is to love what you do.&quot;
          </p>
          <p className="ml-0 md:ml-3 font-normal line-clamp-2 text-right w-full text-white/75 text-[15px]">
            - Steve Jobs
          </p>
        </div>
      </div>
      <div className="relative md:absolute p-5 md:p-14 flex h-full w-full items-end justify-end">
        <SetupSubmitButton Disabled={false} onClick={handleFinish}>
          Finish
        </SetupSubmitButton>
      </div>
    </div>
  );
}

export default SetupFinishScreen;
