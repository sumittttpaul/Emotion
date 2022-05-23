import React, { FC, Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';

interface IProps {
  children: ReactNode;
  show?: boolean;
  close: () => void;
}

/**
 * @author
 * @function @DatePickerContainerDialog
 **/

export const DatePickerContainerDialog: FC<IProps> = (props) => {
  return (
    <Transition appear show={props.show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.close}>
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
              <Dialog.Panel className="h-auto w-auto relative">
                <motion.div className="relative w-auto h-auto transform overflow-auto rounded-lg bg-[#202020] text-center align-middle shadow-xl transition-all ease-in">
                  {props.children}
                </motion.div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
