import Image from 'next/image';
import { IconButton, Button } from '@mui/material';
import {
  CameraIcon,
  DotsVerticalIcon,
  PencilIcon,
  TrashIcon,
  XIcon,
} from '@heroicons/react/outline';
import { UsersIcon } from '@heroicons/react/solid';
import { TooltipDark } from 'components/tooltip/TooltipDark';
import { Circle_BlurDataURL } from 'components/loader/BlurDataURL';
import dynamic from 'next/dynamic';

const LoadingLinearProgress = dynamic(
  () => import('components/loader/Loading.LinearProgress')
);

interface IProps {
  backward: () => void;
  moreInfo: (event: React.MouseEvent<HTMLElement>) => void;
  forward: () => void;
  URL: string;
  remove: () => void;
  removedisabled: boolean;
  changedisabled: boolean;
  ShowProgress: boolean;
  Progress: string;
}

function ShowAvatar(props: IProps) {
  return (
    <div className="bg-secondary-theme Show-Avatar-Container text-white flex flex-col w-full h-full scroll-smooth overflow-y-auto overflow-x-hidden items-center">
      {/* Header */}
      <div className="flex w-full z-10 justify-between items-center p-1">
        <TooltipDark placement="bottom" title="Close profile picture" arrow>
          <IconButton
            disableFocusRipple
            onClick={props.backward}
            className="hover:bg-white/5 p-3"
          >
            <XIcon className="h-5 text-white" />
          </IconButton>
        </TooltipDark>
        <div className="flex items-center justify-start sm:justify-center w-full px-1 space-x-1.5">
          <h6 className="text-white text-xl tracking-wide font-[600]">
            Emotion
          </h6>
          <h6 className="text-white/[0.95] text-xl font-normal">Account</h6>
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
      {/* Main */}
      <div className="px-5 pt-2 overflow-y-auto overflow-x-hidden scroll-smooth h-full pb-5 space-y-2 flex flex-col items-center w-full">
        {/* Heading */}
        <h6 className="w-full text-left text-white text-lg font-normal">
          Profile picture
        </h6>
        {/* Sub Heading */}
        <h6 className="text-sm text-white/75 text-left w-full">
          A picture helps people recognize you and lets you know when
          you&apos;re signed in to your account.
        </h6>
        {/* Info Heading */}
        <div className="flex w-full space-x-2 pt-2 pb-4 items-center">
          <UsersIcon className="h-5 text-white opacity-75" />
          <h6 className="text-sm text-white/75 text-left w-full">
            Visible across Emotion services.
          </h6>
        </div>
        {/* Center */}
        <div className="flex h-full w-full justify-center items-center relative">
          <div className="flex box-content rounded-[50%] overflow-hidden relative justify-center min-h-[96px] min-w-[96px] show-avatar-profile-photo">
            <div className="rounded-full relative w-full h-full">
              <Image
                fill
                onClick={props.forward}
                className="cursor-default rounded-[50%] overflow-hidden transition-all"
                src={props.URL ? props.URL : '/images/loader/dark-circle.png'}
                style={{
                  objectFit: 'fill',
                }}
                alt=""
                placeholder="blur"
                blurDataURL={Circle_BlurDataURL}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex space-x-2 w-full px-5 pb-5 pt-2">
        <Button
          disableFocusRipple
          aria-label="change-image-button"
          onClick={props.forward}
          disabled={props.changedisabled}
          className="disabled:opacity-50 disabled:cursor-not-allowed cursor-default button-text-lower py-2 disabled:text-sky-400 text-sky-400 w-full rounded-lg border border-solid border-white/30 hover:bg-transparent active:bg-transparent"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff80 !important',
            },
          }}
        >
          <div className="flex space-x-2 items-center justify-center">
            {!props.removedisabled ? (
              <PencilIcon className="h-[18px] block" />
            ) : (
              <CameraIcon className="h-[18px] block" />
            )}
            <h6 className="text-sm flex truncate pt-[2px] font-[600]">
              {!props.removedisabled ? 'Change' : 'Add profile picture'}
            </h6>
          </div>
        </Button>
        {!props.removedisabled && (
          <Button
            aria-label="remove-image-button"
            disableFocusRipple
            onClick={props.remove}
            disabled={props.changedisabled}
            className="disabled:opacity-50 disabled:cursor-not-allowed cursor-default button-text-lower py-2 disabled:text-sky-400 text-sky-400 w-full rounded-lg border border-solid border-white/30 hover:bg-transparent active:bg-transparent"
            sx={{
              '.MuiTouchRipple-child': {
                backgroundColor: '#ffffff80 !important',
              },
            }}
          >
            <div className="flex space-x-2 items-center justify-center">
              <TrashIcon className="h-[18px] block" />
              <h6 className="text-sm flex truncate pt-[2px] font-[600]">
                Remove
              </h6>
            </div>
          </Button>
        )}
      </div>
      {props.ShowProgress && <LoadingLinearProgress />}
    </div>
  );
}

export default ShowAvatar;
