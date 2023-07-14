import { Button } from '@mui/material';

interface IProps {
  Disabled: boolean;
  onClick: () => void;
  ClassName?: string;
  children: React.ReactNode;
}

function SetupSubmitButton(props: IProps) {
  return (
    <Button
      disableFocusRipple
      disabled={props.Disabled}
      onClick={props.onClick}
      className={`${props.ClassName} button-text-lower !relative !cursor-default !rounded-lg !bg-primary-blue !px-14 !py-2 !text-[13px] !font-[700] !tracking-wide !text-white hover:!bg-primary-blue/70 disabled:!opacity-50`}
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff80 !important',
        },
      }}
    >
      {props.children}
    </Button>
  );
}

export default SetupSubmitButton;
