import React, { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button, IconButton } from '@mui/material';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useShowAvatarState } from '../../providers/state/ShowAvatarState';
import { useSelectAvatarState } from '../../providers/state/SelectAvatarState';

interface IProps {}

/**
 * @author
 * @function @ShowAvatar
 **/

const ShowAvatar: FC<IProps> = (props) => {
  const { ShowAvatar, setShowAvatar } = useShowAvatarState();
  const { setSelectAvatar } = useSelectAvatarState();

  const closeModal = () => {
    setShowAvatar({ setShow: false });
  };

  const handleSelectClick = () => {
    setTimeout(() => {
      setShowAvatar({ setShow: false });
      setSelectAvatar({ setShow: true });
    }, 250);
  };

  return (
    <Transition appear show={ShowAvatar.setShow} as={Fragment}>
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
              enterFrom="opacity-0 scale-75"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-75"
            >
              <Dialog.Panel className="absolute sm:max-w-[400px] sm:relative h-full w-full sm:w-auto sm:h-auto transform overflow-hidden sm:rounded-lg bg-white text-center align-middle shadow-xl transition-all">
                <div className="flex flex-col w-full h-full justify-center items-center">
                  {/* Header */}
                  <div className="flex w-full justify-between items-center p-1">
                    <h6 className="text-black font-medium pl-5 pt-1">
                      Profile picture
                    </h6>
                    <IconButton
                      onClick={() => {
                        closeModal();
                      }}
                      className="hover:bg-[rgba(0,0,0,0.07)] p-3"
                    >
                      <XIcon className="h-5" />
                    </IconButton>
                  </div>
                  {/* Main */}
                  <div className="px-6 h-full pb-6 space-y-5 flex flex-col items-center w-full">
                    {/* Sub Heading */}
                    <h6 className="text-[13px] text-black text-left w-full">
                      A picture helps people recognize you and lets you know
                      when you’re signed in to your account.
                    </h6>
                    {/* Info Heading */}
                    <div className="flex w-full space-x-2">
                      <Image height={18} width={18} src="/icons/users.svg" />
                      <h6 className="text-[13px] text-black text-left w-full">
                        Visible across Agewear services.
                      </h6>
                    </div>
                    {/* Center */}
                    <Button
                      onClick={handleSelectClick}
                      className="h-[288px] w-[288px] flex rounded-full p-0"
                    >
                      <Image
                        layout="fill"
                        src="/images/user.png"
                        alt="user photo"
                      />
                    </Button>
                  </div>
                  {/* Bottom */}
                  <div className="flex space-x-3 w-full px-6 pb-6 pt-2">
                    <Button
                      onClick={handleSelectClick}
                      sx={{
                        border: '1px solid rgba(26, 115, 232, 0.5)',
                      }}
                      className="button-text-lower py-[6px] text-[#1a73e8] w-full hover:bg-transparent active:bg-transparent"
                    >
                      <div className="flex space-x-2 items-center justify-center">
                        <Image height={18} width={18} src="/icons/edit.svg" />
                        <h6 className="text-[13px]">Change</h6>
                      </div>
                    </Button>
                    <Button
                      sx={{
                        border: '1px solid rgba(26, 115, 232, 0.5)',
                      }}
                      className="button-text-lower py-[6px] text-[#1a73e8] w-full hover:bg-transparent active:bg-transparent"
                    >
                      <div className="flex space-x-2 items-center justify-center">
                        <Image height={18} width={18} src="/icons/trash.svg" />
                        <h6 className="text-[13px]">Remove</h6>
                      </div>
                    </Button>
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

export default ShowAvatar;
