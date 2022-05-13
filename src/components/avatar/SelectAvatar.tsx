import React, {
  FC,
  Fragment,
  SyntheticEvent,
  ReactNode,
  useState,
  Component,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IconButton, Tabs, Tab, styled } from '@mui/material';
import { DotsVerticalIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import { useSelectAvatarState } from '../../providers/state/SelectAvatarState';
import { useShowAvatarState } from '../../providers/state/ShowAvatarState';

interface IProps {}

/**
 * @author
 * @function @SelectAvatar
 **/

interface StyledTabProps {
  label: string;
}

interface StyledTabsProps {
  children?: ReactNode;
  value: number;
  onChange: (event: SyntheticEvent, newValue: number) => void
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props} 
    variant="fullWidth"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& ': {
    width: '100%',
  },
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 60,
    width: '100%',
    backgroundColor: '#1a73e8',
  },
});

const StyledTab = styled((props: StyledTabProps) => <Tab {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.9)',
    '&.Mui-selected': {
      color: '#1a73e8',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
);

const SelectAvatar: FC<IProps> = (props) => {
  const { SelectAvatar, setSelectAvatar } = useSelectAvatarState();
  const { setShowAvatar } = useShowAvatarState();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const closeModal = () => {
    setSelectAvatar({ setShow: false });
    setShowAvatar({ setShow: true });
  };
  return (
    <Transition appear show={SelectAvatar.setShow} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={closeModal}>
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
              <Dialog.Panel className="absolute sm:max-w-[500px] sm:relative h-full w-full sm:w-auto sm:h-auto transform overflow-hidden sm:rounded-lg bg-white text-center align-middle shadow-xl transition-all">
                <div className="flex flex-col justify-center items-center">
                  {/* Header */}
                  <div className="flex w-full justify-between items-center p-1">
                    <IconButton
                      onClick={() => {
                        closeModal();
                      }}
                      className="hover:bg-[rgba(0,0,0,0.07)] p-3"
                    >
                      <ArrowLeftIcon className="h-5" />
                    </IconButton>
                    <h6 className="text-black font-medium pt-1">
                      Change profile picture
                    </h6>
                    <IconButton className="hover:bg-[rgba(0,0,0,0.07)] p-3">
                      <DotsVerticalIcon className="h-5" />
                    </IconButton>
                  </div>
                  {/* Main */}
                  <div className="px-6 pb-6 space-y-2 flex flex-col items-center justify-center w-full">
                    {/* Sub Heading */}
                    <h6 className="text-[13px] text-black text-left w-full">
                      You can choose your profile picture from our one of the
                      best avatar collections.
                    </h6>
                    <StyledTabs
                      value={value}
                      onChange={handleChange}
                      aria-label="styled tabs example"
                    >
                      <StyledTab label="From Avatars"/>
                      <StyledTab label="From Computer"/>
                    </StyledTabs>
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

export default SelectAvatar;
