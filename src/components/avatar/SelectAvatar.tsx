import React, { FC, SyntheticEvent, useState } from 'react';
import { IconButton, useTheme } from '@mui/material';
import { DotsVerticalIcon, ArrowLeftIcon } from '@heroicons/react/solid';
import { SparklesIcon, DesktopComputerIcon } from '@heroicons/react/outline';
import FromAvatars from './SelectAvatar/Options/FromAvatars';
import FromComputer from './SelectAvatar/Options/FromComputer';
import SwipeableViews from 'react-swipeable-views';
import SelectAvatarTabItem from '../tab/SelectAvatarTabItem';
import SelectAvatarTabs from '../tab/SelectAvatarTabs';
import SelectAvatarTabPanel from '../tab/SelectAvatarTabPanel';

interface IProps {
  backward?: () => void;
  forward: () => void;
  getURL: (value: string) => void;
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

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className=" bg-white flex flex-col overflow-auto items-center h-full w-full">
      {/* Header */}
      <div className="flex w-full justify-between items-center p-1">
        <IconButton
          onClick={props.backward}
          className="hover:bg-[rgba(0,0,0,0.07)] p-3"
        >
          <ArrowLeftIcon className="h-5" />
        </IconButton>
        <h6 className="text-black font-medium pt-1">Change profile picture</h6>
        <IconButton className="hover:bg-[rgba(0,0,0,0.07)] p-3">
          <DotsVerticalIcon className="h-5" />
        </IconButton>
      </div>
      {/* Tab & sub heading */}
      <div className="space-y-3 flex flex-col items-center justify-center w-full">
        {/* Sub Heading */}
        <h6 className="text-[13px] px-6 text-black text-left sm:text-center w-full">
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
            icon={<SparklesIcon className="h-5 opacity-70" />}
            label="From Avatars"
          />
          <SelectAvatarTabItem
            icon={<DesktopComputerIcon className="h-5 opacity-70" />}
            label="From Computer"
          />
        </SelectAvatarTabs>
        {/* Tab Content */}
      </div>
      {/* Divider */}
      <div className="h-[1px] opacity-20 bg-black w-full" />
      {/* Main */}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        className="w-full h-full"
        id="SwipeableViews"
        containerStyle={{
          height: '100%',
          width: '100%',
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
        }}
      >
        <SelectAvatarTabPanel value={value} index={0} dir={theme.direction}>
          <FromAvatars show={props.forward} getURL={props.getURL} />
        </SelectAvatarTabPanel>
        <SelectAvatarTabPanel value={value} index={1} dir={theme.direction}>
          <FromComputer show={props.forward} getURL={props.getURL} />
        </SelectAvatarTabPanel>
      </SwipeableViews>
    </div>
  );
};

export default SelectAvatar;
