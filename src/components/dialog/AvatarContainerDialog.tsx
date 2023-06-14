import React, { FC, ReactNode, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface IProps {
  children: ReactNode;
  className?: string;
  show?: boolean;
  close: () => void;
}

/**
 * @author
 * @function @AvatarContainerDialog
 **/

const AvatarContainerDialog: FC<IProps> = (props) => {
  const classes =
    'box-border absolute sm:relative h-full w-full transform overflow-hidden sm:rounded-xl bg-black text-center align-middle shadow-xl transition-all ease-in';

  return (
    <Transition appear show={props.show} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={props.close}>
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

        <div className="fixed inset-0 overflow-hidden overscroll-none">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <Dialog.Panel className="absolute h-full w-full sm:relative sm:h-suto sm:w-auto">
                <div className={`${classes} ${props.className}`}>
                  {props.children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AvatarContainerDialog;
