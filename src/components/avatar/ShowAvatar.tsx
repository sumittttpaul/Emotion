import React, { FC, Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Button, IconButton } from '@mui/material';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';

interface IProps {
  setShow: boolean;
  setHide: (arg: boolean) => void;
}

/**
 * @author
 * @function @ShowAvatar
 **/

const ShowAvatar: FC<IProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
    props.setHide(isOpen);
  }

  useEffect(() => {
    setIsOpen(props.setShow);
  }, [props.setShow]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
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
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-50"
            >
              <Dialog.Panel className="absolute sm:relative h-full w-full sm:w-auto sm:h-auto transform overflow-hidden sm:rounded-lg bg-white text-center align-middle shadow-xl transition-all">
                <div className="flex flex-col justify-center items-center">
                  {/* Header */}
                  <div className="flex w-full justify-between items-center p-1">
                    <h6 className="text-black font-medium pl-4">
                      Profile picture
                    </h6>
                    <IconButton className="hover:bg-[rgba(0,0,0,0.07)] p-3">
                      <XIcon className="h-5" />
                    </IconButton>
                  </div>
                  {/* Main */}
                  <div className="px-5 pb-5 space-y-5 flex flex-col items-center justify-center w-full">
                    <h6 className="text-[13px] text-black text-left w-full">
                      A picture helps people recognize you and lets you know
                      when you’re signed in to your account.
                    </h6>
                    <Button className='h-[288px] w-[288px] rounded-full p-0'>
                      <Image height={288} width={288} src="/images/user.jpg"/>
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
