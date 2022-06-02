import React, { FC, useState } from 'react';
import { Button, CircularProgress, IconButton } from '@mui/material';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';

interface IProps {
  backward?: () => void;
  forward?: () => void;
  URL: string;
  remove: () => void;
  removedisabled: boolean;
  changedisabled: boolean;
  ShowProgress: boolean;
  Progress: string;
}

/**
 * @author
 * @function @ShowAvatar
 **/

const ShowAvatar: FC<IProps> = (props) => {
  return (
    <div className="bg-white flex flex-col w-full h-full overflow-auto items-center">
      {/* Header */}
      <div className="flex w-full z-10 justify-between items-center p-1">
        <h6 className="text-black font-medium pl-5 pt-1">Profile picture</h6>
        <IconButton
          onClick={props.backward}
          className="hover:bg-[rgba(0,0,0,0.07)] p-3"
        >
          <XIcon className="h-5" />
        </IconButton>
      </div>
      {/* Main */}
      <div className="px-6 overflow-auto h-full pb-6 space-y-5 flex flex-col items-center w-full">
        {/* Sub Heading */}
        <h6 className="text-[13px] text-black text-left w-full">
          A picture helps people recognize you and lets you know when you’re
          signed in to your account
        </h6>
        {/* Info Heading */}
        <div className="flex w-full space-x-2 pb-2">
          <Image
            height={18}
            width={18}
            src="/icons/users.svg"
            alt="user icon"
          />
          <h6 className="text-[13px] text-black text-left w-full">
            Visible across Agewear services.
          </h6>
        </div>
        {/* Center */}
        <div className="flex relative justify-center min-h-[96px] min-w-[96px] show-avatar-profile-photo">
          <img
            onClick={props.forward}
            className="rounded-[50%] cursor-pointer max-w-[288px] max-h-[288px] h-full transition-all"
            src={props.URL}
            alt="user photo"
          />
          {props.ShowProgress ? (
            <div className="absolute h-full w-full flex items-center justify-center rounded-[50%] opacity-75 bg-white">
              <CircularProgress
                size={250}
                thickness={0.3}
                sx={{
                  position: 'relative',
                  color: '#0074E4',
                  zIndex: 1,
                }}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* Bottom */}
      <div className="flex space-x-3 w-full px-6 pb-6 pt-2">
        <Button
          onClick={props.forward}
          disabled={props.changedisabled}
          sx={{
            border: '1px solid rgba(26, 115, 232, 0.5)',
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(26, 115, 232, 0.25) !important',
            },
          }} 
          className="disabled:opacity-50 button-text-lower py-[7px] disabled:text-[#1a73e8] text-[#1a73e8] w-full rounded-md hover:bg-transparent active:bg-transparent"
        >
          <div className="flex space-x-2 items-center justify-center">
            <Image
              height={18}
              width={18}
              src="/icons/edit.svg"
              alt="edit icon"
            />
            <h6 className="text-[12px]">Change</h6>
          </div>
        </Button>
        <Button
          onClick={props.remove}
          disabled={props.removedisabled}
          sx={{
            border: '1px solid rgba(26, 115, 232, 0.5)',
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(26, 115, 232, 0.25) !important',
            },
          }}
          className="disabled:opacity-50 button-text-lower py-[7px] disabled:text-[#1a73e8] text-[#1a73e8] w-full rounded-md hover:bg-transparent active:bg-transparent"
        >
          <div className="flex space-x-2 items-center justify-center">
            <Image
              height={18}
              width={18}
              src="/icons/trash.svg"
              alt="trash icon"
            />
            <h6 className="text-[12px]">Remove</h6>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ShowAvatar;
