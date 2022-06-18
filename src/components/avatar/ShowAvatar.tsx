import React, { FC } from 'react';
import { Button, CircularProgress, IconButton } from '@mui/material';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
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
          className="hover:bg-[rgba(0,0,0,0.07)] p-3"
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
          <Image
            height={18}
            width={18}
            src="/icons/users.svg"
            alt="user icon"
            placeholder="blur"
            blurDataURL={Square_BlurDataURL}
          />
          <h6 className="text-[13px] text-black text-left w-full">
            Visible across Agewear services.
          </h6>
        </div>
        {/* Center */}
        <div className="flex box-content rounded-[50%] overflow-hidden relative justify-center min-h-[96px] min-w-[96px] show-avatar-profile-photo">
          <Image
            onClick={props.forward}
            layout="fill"
            objectFit="scale-down"
            className="cursor-pointer rounded-[50%] overflow-hidden transition-all"
            src={props.URL}
            alt="user photo"
            placeholder="blur"
            blurDataURL={Circle_BlurDataURL}
          />
          {/* <img
            onClick={props.forward}
            className="rounded-[50%] cursor-pointer max-w-[288px] max-h-[288px] h-full transition-all"
            src={props.URL}
            alt="user photo"
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
            border: '1px solid rgba(26, 115, 232, 0.5)',
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(26, 115, 232, 0.25) !important',
            },
          }}
          className="disabled:opacity-50 disabled:cursor-not-allowed button-text-lower py-[7px] disabled:text-[#1a73e8] text-[#1a73e8] w-full rounded-md hover:bg-transparent active:bg-transparent"
        >
          <div className="flex space-x-2 items-center justify-center">
            <Image
              height={18}
              width={18}
              src="/icons/edit.svg"
              alt="edit icon"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%231a73e8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-edit'%3E%3Cpath d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'%3E%3C/path%3E%3Cpath d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'%3E%3C/path%3E%3C/svg%3E`}
            />
            <h6 className="text-[12px]">Change</h6>
          </div>
        </Button>
        <Button
          aria-label="remove-image-button"
          disableFocusRipple
          onClick={props.remove}
          disabled={props.removedisabled}
          sx={{
            border: '1px solid rgba(26, 115, 232, 0.5)',
            '.MuiTouchRipple-child': {
              backgroundColor: 'rgba(26, 115, 232, 0.25) !important',
            },
          }}
          className="disabled:opacity-50 disabled:cursor-not-allowed button-text-lower py-[7px] disabled:text-[#1a73e8] text-[#1a73e8] w-full rounded-md hover:bg-transparent active:bg-transparent"
        >
          <div className="flex space-x-2 items-center justify-center">
            <Image
              height={18}
              width={18}
              src="/icons/trash.svg"
              alt="trash icon"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%231a73e8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' class='feather feather-trash-2'%3E%3Cpolyline points='3 6 5 6 21 6'%3E%3C/polyline%3E%3Cpath d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'%3E%3C/path%3E%3Cline x1='10' y1='11' x2='10' y2='17'%3E%3C/line%3E%3Cline x1='14' y1='11' x2='14' y2='17'%3E%3C/line%3E%3C/svg%3E`}
            />
            <h6 className="text-[12px]">Remove</h6>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ShowAvatar;
