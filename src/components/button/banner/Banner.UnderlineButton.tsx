import { Button } from '@mui/material';

interface IProps {
  label: string;
}

function BannerUnderlineButton(props: IProps) {
  return (
    <Button
      className="text-white absolute bottom-0 block whitespace-nowrap mx-5 mb-4 p-0 text-[14px] hover:underline underline-offset-4 font-sans font-normal button-text-lower"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff00 !important',
        },
      }}
    >
      {props.label}
    </Button>
  );
}

export default BannerUnderlineButton;
