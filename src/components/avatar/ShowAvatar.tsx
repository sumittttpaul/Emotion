import React, { FC } from 'react';
import { Button, CircularProgress, IconButton } from '@mui/material';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/legacy/image';
import { Square_BlurDataURL, Circle_BlurDataURL } from '../loader/BlurDataURL';

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
    <div className="bg-white flex flex-col w-full h-full scroll-smooth  overflow-y-auto overflow-x-hidden items-center">
      {/* Header */}
      <div className="flex w-full z-10 justify-between items-center p-1">
        <h6 className="text-black font-medium pl-5 pt-1">Profile picture</h6>
        <IconButton
          disableFocusRipple
          onClick={props.backward}
          className="hover:bg-[#00000012] p-3"
        >
          <XIcon className="h-5" />
        </IconButton>
      </div>
      {/* Main */}
      <div className="px-6 overflow-y-auto overflow-x-hidden scroll-smooth h-full pb-6 space-y-5 flex flex-col items-center w-full">
        {/* Sub Heading */}
        <h6 className="text-[13px] text-black text-left w-full">
          A picture helps people recognize you and lets you know when you’re
          signed in to your account
        </h6>
        {/* Info Heading */}
        <div className="flex w-full space-x-2 pb-2">
          <Image height={18} width={18} src="/icons/users.svg" alt="" />
          <h6 className="text-[13px] text-black text-left w-full">
            Visible across Emotion services.
          </h6>
        </div>
        {/* Center */}
        <div className="flex box-content rounded-[50%] overflow-hidden relative justify-center min-h-[96px] min-w-[96px] show-avatar-profile-photo">
          <div className="rounded-full scale-[.99] relative w-full h-full">
            <Image
              onClick={props.forward}
              layout="fill"
              objectFit="scale-down"
              className="cursor-pointer rounded-[50%] overflow-hidden transition-all"
              src={props.URL}
              alt=""
              placeholder="blur"
              blurDataURL={Circle_BlurDataURL}
              priority
            />
          </div>
          {/* <img
            onClick={props.forward}
            className="rounded-[50%] cursor-pointer max-w-[288px] max-h-[288px] h-full transition-all"
            src={props.URL}
            alt=""
          /> */}
          {props.ShowProgress ? (
            <div className="absolute overflow-hidden h-full w-full flex items-center justify-center rounded-[50%] opacity-90 bg-white">
              <CircularProgress
                style={{ padding: '15px' }}
                size="100%"
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
          disableFocusRipple
          aria-label="change-image-button"
          onClick={props.forward}
          disabled={props.changedisabled}
          sx={{
            border: '1px solid #1a73e880',
            '.MuiTouchRipple-child': {
              backgroundColor: '#1a73e880 !important',
            },
          }}
          className="disabled:opacity-50 disabled:cursor-not-allowed button-text-lower py-[7px] disabled:text-[#1a73e8] text-[#1a73e8] w-full rounded-md hover:bg-transparent active:bg-transparent"
        >
          <div className="flex space-x-2 items-center justify-center">
            <Image height={18} width={18} src="/icons/edit.svg" alt="" />
            <h6 className="text-[12px]">Change</h6>
          </div>
        </Button>
        <Button
          aria-label="remove-image-button"
          disableFocusRipple
          onClick={props.remove}
          disabled={props.removedisabled}
          sx={{
            border: '1px solid #1a73e880',
            '.MuiTouchRipple-child': {
              backgroundColor: '#1a73e880 !important',
            },
          }}
          className="disabled:opacity-50 disabled:cursor-not-allowed button-text-lower py-[7px] disabled:text-[#1a73e8] text-[#1a73e8] w-full rounded-md hover:bg-transparent active:bg-transparent"
        >
          <div className="flex space-x-2 items-center justify-center">
            <Image
              height={18}
              width={18}
              src="/icons/trash.svg"
              alt=""
            />
            <h6 className="text-[12px]">Remove</h6>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ShowAvatar;
