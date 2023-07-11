import {
  ArrowLeftIcon,
  DotsVerticalIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import { TooltipDark } from '../../tooltip/TooltipDark';
import Image from 'next/image';
import { Circle_BlurDataURL } from '../../loader/BlurDataURL';

interface IProps {
  backward: () => void;
  moreInfo: (event: React.MouseEvent<HTMLElement>) => void;
  URL: string;
  remove: () => void;
}

export function RemoveAvatar(props: IProps) {
  return (
    <div className=" bg-secondary-theme Remove-Avatar-Container flex flex-col justify-between scroll-smooth overflow-auto items-center h-full w-full">
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
      <div className="flex h-full w-full justify-center items-center relative">
        <div className="px-5 overflow-y-auto overflow-x-hidden scroll-smooth flex flex-col items-center w-full">
          {/* Center */}
          <div className="flex box-content rounded-[50%] overflow-hidden relative justify-center min-h-[96px] min-w-[96px] remove-avatar-profile-photo">
            <div className="rounded-full relative w-full h-full">
              <Image
                fill
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
          {/* Heading */}
          <h6 className="mt-5 w-full text-center text-white text-xl font-normal">
            Remove profile picture ?
          </h6>
          {/* Sub Heading */}
          <h6 className="mt-1 text-sm text-center text-white/75 w-full max-w-[300px]">
            A picture helps people recognize you and lets you know when
            you&apos;re signed in to your account.
          </h6>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex space-x-2 w-full px-5 pb-5 pt-2">
        <Button
          disableFocusRipple
          onClick={props.backward}
          aria-label="cancel-image-button"
          className="cursor-default button-text-lower py-2 text-red-400 text-sm font-[600]  w-full rounded-lg bg-white/5 hover:bg-white/[0.03]"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#ffffff80 !important',
            },
          }}
        >
          Cancel
        </Button>
        <Button
          disableFocusRipple
          onClick={props.remove}
          aria-label="remove-image-button"
          className="cursor-default button-text-lower py-2 text-sky-400 w-full rounded-lg bg-dark-blue hover:bg-dark-blue/70"
          sx={{
            '.MuiTouchRipple-child': {
              backgroundColor: '#38bdf880 !important',
            },
          }}
        >
          <div className="flex space-x-2 items-center justify-center">
            <TrashIcon className="h-[18px] block" />
            <h6 className="text-sm flex truncate pt-[2px] font-[700]">
              Remove
            </h6>
          </div>
        </Button>
      </div>
    </div>
  );
}
