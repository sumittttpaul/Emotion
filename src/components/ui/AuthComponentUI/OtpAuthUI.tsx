import React, { FC, Fragment } from 'react';
import { Link } from '@mui/material';
import OTPTextFieldDark from '../../textfield/OTPTextFieldDark';
import { Dialog, Transition } from '@headlessui/react';
import { useOtpState } from '../../../providers/state/OtpState';

interface IProps {}

/**
 * @author
 * @function @OtpAuthUI
 **/

const OtpAuthUI: FC<IProps> = (props) => {

  const {OtpState, setOtpState} = useOtpState();

  const closeModal = () => {
    setOtpState({ setShow: false})
  }

  return (
    <Transition appear show={OtpState.setShow} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-150"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-150"
            >
              <Dialog.Panel className="absolute sm:relative h-full w-full sm:w-auto sm:h-auto transform overflow-auto sm:rounded-lg bg-[#202020] text-center align-middle shadow-xl transition-all">
                <div className="flex flex-col px-14 py-10 space-y-7 items-center">
                  <h6 className="text-white font-medium text-center text-md">
                    OTP Verification
                  </h6>
                  <h6 className="text-white text-[14px] font-light opacity-75">
                    Verification code sent to 8794007993
                  </h6>
                  <div className="space-x-8 flex justify-center items-center">
                    <div className="space-x-2 flex justify-center items-center">
                      <OTPTextFieldDark
                        value=""
                        onChange={() => {}}
                        onkeyUp={() => {}}
                      />
                      <OTPTextFieldDark
                        value=""
                        onChange={() => {}}
                        onkeyUp={() => {}}
                      />
                      <OTPTextFieldDark
                        value=""
                        onChange={() => {}}
                        onkeyUp={() => {}}
                      />
                    </div>
                    <div className="space-x-2 flex justify-center items-center">
                      <OTPTextFieldDark
                        value=""
                        onChange={() => {}}
                        onkeyUp={() => {}}
                      />
                      <OTPTextFieldDark
                        value=""
                        onChange={() => {}}
                        onkeyUp={() => {}}
                      />
                      <OTPTextFieldDark
                        value=""
                        onChange={() => {}}
                        onkeyUp={() => {}}
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <h6 className="text-white text-xs font-light opacity-75">
                      Otp not send?&#160;
                    </h6>
                    <Link
                      href="#"
                      className="text-white text-xs"
                      component="button"
                      underline="always"
                    >
                      Resend OTP
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default OtpAuthUI;
