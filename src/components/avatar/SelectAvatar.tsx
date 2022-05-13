import React, {
  FC,
  Fragment,
  SyntheticEvent,
  ReactNode,
  useState,
  ReactElement,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IconButton, Tabs, Tab, styled } from '@mui/material';
import { DotsVerticalIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import { SparklesIcon, DesktopComputerIcon } from '@heroicons/react/outline';
import { useSelectAvatarState } from '../../providers/state/SelectAvatarState';
import { useShowAvatarState } from '../../providers/state/ShowAvatarState';
import { FromAvatars } from './options/FromAvatars';
import { FromComputer } from './options/FromComputer';
import { AvatarContainer } from '../container/AvatarContainer';

interface IProps {}

/**
 * @author
 * @function @SelectAvatar
 **/

interface StyledTabProps {
  label: string;
  icon: ReactElement;
}

interface StyledTabsProps {
  children?: ReactNode;
  value: number;
  onChange: (event: SyntheticEvent, newValue: number) => void;
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
    maxWidth: 80,
    width: '100%',
    backgroundColor: '#1a73e8',
  },
});

const StyledTab = styled((props: StyledTabProps) => <Tab {...props} />)(
  ({ theme }) => ({
    paddingTop: 0,
    paddingBottom: 0,
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(14),
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
  const [TabValue, setTabValue] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setTabValue((prev) => !prev);
    console.log(TabValue);
  };

  const closeModal = () => {
    setSelectAvatar({ setShow: false });
    setShowAvatar({ setShow: true });
  };
  return (
    <AvatarContainer show={SelectAvatar.setShow} as={Fragment} onClose={closeModal}>
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
        {/* Tab & sub heading */}
        <div className="space-y-3 flex flex-col items-center justify-center w-full">
          {/* Sub Heading */}
          <h6 className="text-[13px] px-6 text-black text-left w-full">
            You can choose your profile picture from our one of the best avatar
            collections.
          </h6>
          {/* Tab */}
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab
              icon={<SparklesIcon className="h-5 opacity-70" />}
              label="From Avatars"
            />
            <StyledTab
              icon={<DesktopComputerIcon className="h-5 opacity-70" />}
              label="From Computer"
            />
          </StyledTabs>
          {/* Tab Content */}
        </div>
        {/* Divider */}
        <div className="h-[1px] opacity-20 bg-black w-full" />
        {/* Main */}
        <div className="p-6 space-y-3 flex flex-col items-center justify-center w-full">
          {TabValue ? <FromComputer /> : <FromAvatars />}
        </div>
      </div>
    </AvatarContainer>
  );
};

export default SelectAvatar;
