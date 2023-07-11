import { ArrowLeftIcon, DotsVerticalIcon } from '@heroicons/react/outline';
import { IconButton } from '@mui/material';
import { CollectionMap } from './CollectionForAvatar/CollectionMap';
import { TooltipDark } from 'components/tooltip/TooltipDark';
import { SetupAvatarContentProps } from 'contents/setup/Setup.Avatar';

interface IProps {
  AvatarReducer: SetupAvatarContentProps[];
  backward: () => void;
  moreInfo: (event: React.MouseEvent<HTMLElement>) => void;
  forward: () => void;
  getURL: (value: string) => void;
  heading: string;
}

function CollectionForAvatar(props: IProps) {
  return (
    <div className=" bg-secondary-theme text-white flex flex-col scroll-smooth overflow-auto items-center h-full w-full">
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
            {props.heading}
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
      {/* Main */}
      <CollectionMap
        AvatarReducer={props.AvatarReducer}
        forward={props.forward}
        getURL={props.getURL}
      />
    </div>
  );
}

export default CollectionForAvatar;
