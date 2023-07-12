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
      className={`${props.ClassName} !relative !text-[13px] !rounded-lg disabled:!opacity-50 !bg-primary-blue hover:!bg-primary-blue/70 !px-14 !py-2 !font-[700] !text-white !cursor-default !tracking-wide button-text-lower`}
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
