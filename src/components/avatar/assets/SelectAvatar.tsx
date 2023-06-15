import React, { FC, SyntheticEvent, useState, MouseEvent } from 'react';
import { IconButton, useTheme } from '@mui/material';
import {
  SparklesIcon,
  DeviceTabletIcon,
  DotsVerticalIcon,
  ArrowLeftIcon,
} from '@heroicons/react/outline';
import FromAvatars from './SelectAvatar/Options/FromAvatars';
import FromComputer from './SelectAvatar/Options/FromComputer';
import SelectAvatarTabItem from '../../tab/SelectAvatar/SelectAvatarTabItem';
import SelectAvatarTabs from '../../tab/SelectAvatar/SelectAvatarTabs';
import SelectAvatarTabPanel from '../../tab/SelectAvatar/SelectAvatarTabPanel';
import SwipeableViews from '../../../../packages/react-swipeable-views/src/index';
import { TooltipDark } from '../../tooltip/TooltipDark';

interface IProps {
  backward: () => void;
  moreInfo: (event: MouseEvent<HTMLElement>) => void;
  forward: () => void;
  getURL: (value: string) => void;
  ShowCollection: () => void;
  CollectionHeading: (value: string) => void;
  AvatarName: (value: string) => void;
  backBool: (value: boolean) => void;
}

/**
 * @author
 * @function @SelectAvatar
 **/

const SelectAvatar: FC<IProps> = (props) => {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  const handleChange = (event: SyntheticEvent, index: number) => {
    setValue(index);
  };

  return (
    <div className=" bg-secondary-theme SelectAvatar-container flex flex-col scroll-smooth overflow-auto items-center h-full w-full">
      {/* Header */}
      <div className="flex w-full z-10 justify-between items-center p-1">
        <TooltipDark placement="bottom" title="Back" arrow>
          <IconButton
            disableFocusRipple
            onClick={props.backward}
            className="hover:bg-white/5 p-3"
          >
            <ArrowLeftIcon className="h-5 text-white" />
          </IconButton>
        </TooltipDark>
        <div className="flex items-center justify-start sm:justify-center w-full px-1 space-x-1.5">
          <h6 className="text-white text-lg tracking-wide font-normal">
            Change profile picture
          </h6>
        </div>
        <TooltipDark placement="bottom" title="Menu" arrow>
          <IconButton
            disableFocusRipple
            onClick={props.moreInfo}
            className="hover:bg-white/5 p-3"
          >
            <DotsVerticalIcon className="h-5 text-white" />
          </IconButton>
        </TooltipDark>
      </div>
      {/* Tab & sub heading */}
      <div className="space-y-3 flex flex-col items-center justify-center w-full">
        {/* Sub Heading */}
        <h6 className="text-sm px-6 text-white/75 text-left sm:text-center w-full">
          You can choose your profile picture from our one of the best avatar
          collections.
        </h6>
        {/* Tab */}
        <SelectAvatarTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <SelectAvatarTabItem
            icon={<SparklesIcon className="h-5" />}
            label="From Avatars"
          />
          <SelectAvatarTabItem
            icon={<DeviceTabletIcon className="h-5" />}
            label="From Device"
          />
        </SelectAvatarTabs>
        {/* Tab Content */}
      </div>
      {/* Divider */}
      <div className="h-[1px] bg-white/20 w-full z-[1]" />
      {/* Main */}
      <SwipeableViews
        index={value}
        disabled={true}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        className="w-full h-full"
        id="SelectAvatarSwipeableViews"
        containerStyle={{
          height: '100%',
          width: '100%',
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
        }}
      >
        <SelectAvatarTabPanel value={value} index={0} dir={theme.direction}>
          <FromAvatars
            show={props.forward}
            getURL={props.getURL}
            backBool={props.backBool}
            ShowCollection={props.ShowCollection}
            heading={props.CollectionHeading}
            avatarName={props.AvatarName}
          />
        </SelectAvatarTabPanel>
        <SelectAvatarTabPanel value={value} index={1} dir={theme.direction}>
          <FromComputer backBool={props.backBool} show={props.forward} getURL={props.getURL} />
        </SelectAvatarTabPanel>
      </SwipeableViews>
    </div>
  );
};

export default SelectAvatar;
