import { Button } from '@mui/material';

interface IProps {
  label: string;
  onClick?: () => void;
}

export function BannerSmallButtonForBannerFour(props: IProps) {
  return (
    <Button
      onClick={props.onClick}
      className="absolute bg-white/5 hover:bg-white/10 tracking-wide cursor-default text-white block whitespace-nowrap bottom-0 px-3 py-2 m-4 text-xs font-normal button-text-lower rounded-lg"
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
