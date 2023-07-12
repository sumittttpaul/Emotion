import { Button } from '@mui/material';

interface IProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export function BannerSmallButton(props: IProps) {
  return (
    <Button
      onClick={props.onClick}
      className={`${props.className} bg-transparent hover:bg-white/10 tracking-wide cursor-default text-white block whitespace-nowrap px-3 py-2 m-0 text-xs font-normal button-text-lower rounded-lg`}
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff50 !important',
        },
      }}
    >
      {props.label}
    </Button>
  );
}
