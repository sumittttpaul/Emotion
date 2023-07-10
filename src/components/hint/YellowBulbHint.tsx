import Image from 'next/image';
import dynamic from 'next/dynamic';
import { TooltipProps } from '@mui/material';

const TooltipDark = dynamic<TooltipProps>(() =>
  import('../tooltip/TooltipDark').then((x) => x.TooltipDark)
);

interface IProps {
  Label: string;
  Tooltip?: true;
  ToottipTitle?: string;
  TooltipPlacement?:
    | 'bottom'
    | 'left'
    | 'right'
    | 'top'
    | 'bottom-end'
    | 'bottom-start'
    | 'left-end'
    | 'left-start'
    | 'right-end'
    | 'right-start'
    | 'top-end'
    | 'top-start';
}

export function YellowBulbHint(props: IProps) {
  return (
    <div className="flex justify-start w-full">
      <div className="flex py-1 pl-1 pr-2 rounded-md space-x-1 items-center bg-[#b48a0090] text-white">
        <div className="items-start h-full min-w-[15px] mt-1">
          {props.Tooltip ? (
            <TooltipDark
              arrow
              placement={props.TooltipPlacement}
              title={props.ToottipTitle}
            >
              <Image
                height={15}
                width={15}
                src="/icons/light-bulb-color.svg"
                alt=""
              />
            </TooltipDark>
          ) : (
            <Image
              height={15}
              width={15}
              src="/icons/light-bulb-color.svg"
              alt=""
            />
          )}
        </div>
        <h6 className="text-[13px] font-medium flex text-white">
          {props.Label}
        </h6>
      </div>
    </div>
  );
}
