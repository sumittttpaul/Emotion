import React, { FC } from 'react';
import Image from 'next/image';
import { AuthHeaderLabel } from '../../../label/AuthHeaderLabel';
import { AuthHeaderDescription } from '../../../label/AuthHeaderDescription';
import { AuthSubmitButton } from '../../../button/Auth/AuthSubmitButton';
import Router from 'next/router';
import { useLoaderState } from '../../../../providers/state/LoadingState';

export interface FinishAuthUIProps {}

/**
 * @author
 * @function @FinishAuthUI
 **/

export const FinishAuthUI: FC<FinishAuthUIProps> = (props) => {
  const { setLoader } = useLoaderState();

  const handleFinish = () => {
    setLoader({ show: true });
    Router.push('/');
  };

  return (
    <div className="p-5 md:p-14 space-y-7 w-full h-full md:h-[652px] flex flex-col relative items-center justify-center">
      <div className="pt-14 md:pt-0 w-full relative flex justify-center items-center">
        <Image
          height={275} //320
          width={600} //700
          src="/vectors/register-finish.svg"
          alt="register-finish"
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
          <AuthHeaderLabel>You are all set</AuthHeaderLabel>
        </div>
        <div className="w-full flex flex-col max-w-[500px] -space-y-3">
          <AuthHeaderDescription ClassName="text-center">
            &quot;The only way to do great work is to love what you do.&quot;
          </AuthHeaderDescription>
          <AuthHeaderDescription ClassName="text-right">
            - Steve Jobs
          </AuthHeaderDescription>
        </div>
      </div>
      <div className="relative md:absolute p-5 md:p-14 flex h-full w-full items-end justify-end">
        <AuthSubmitButton Disabled={false} onClick={handleFinish}>
          Finish
        </AuthSubmitButton>
      </div>
    </div>
  );
};
