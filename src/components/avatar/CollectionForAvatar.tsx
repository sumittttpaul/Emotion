import { ArrowLeftIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import { IconButton } from '@mui/material';
import React, { FC } from 'react';
import { IAvatarIconReducerState } from '../../redux/reducers/AvatarReducer';
import { CollectionMap } from './CollectionForAvatar/CollectionMap';

interface IProps {
  AvatarReducer: IAvatarIconReducerState[];
  backward?: () => void;
  forward: () => void;
  getURL: (value: string) => void;
  heading: string;
}

/**
 * @author
 * @function @CollectionForAvatar
 **/

export const CollectionForAvatar: FC<IProps> = (props) => {
  return (
    <div className=" bg-white flex flex-col scroll-smooth overflow-auto items-center h-full w-full">
      {/* Header */}
      <div className="flex w-full justify-between items-center p-1">
        <IconButton
          disableFocusRipple
          onClick={props.backward}
          className="hover:bg-[rgba(0,0,0,0.07)] p-3"
        >
          <ArrowLeftIcon className="h-5" />
        </IconButton>
        <h6 className="text-black font-medium pt-1">{props.heading}</h6>
        <IconButton
          disableFocusRipple
          className="hover:bg-[rgba(0,0,0,0.07)] p-3"
        >
          <DotsVerticalIcon className="h-5" />
        </IconButton>
      </div>
      {/* Main */}
      <CollectionMap
        AvatarReducer={props.AvatarReducer}
        forward={props.forward}
        getURL={props.getURL}
      />
    </div>
  );
};
