import { Button } from '@mui/material';

interface IProps {
  onClick: () => void;
  ClassName?: string;
  children: React.ReactNode;
}

function SetupSkipAllButton(props: IProps) {
  return (
    <div className="flex h-10">
      <Button
        disableFocusRipple
        onClick={props.onClick}
        className={`${props.ClassName} text-[13px] truncate text-sky-400 bg-transparent hover:bg-white/5 rounded-lg px-14 py-2 font-medium cursor-default tracking-wide button-text-lower transition-all`}
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#38bdf880 !important',
          },
        }}
      >
        {props.children}
      </Button>
    </div>
  );
}

export default SetupSkipAllButton;
