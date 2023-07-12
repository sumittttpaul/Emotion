import { CalendarIcon } from '@heroicons/react/outline';
import { Button } from '@mui/material';

interface IProps {
  onClick?: () => void;
  label: string;
}

function DatePickerCustomButton(props: IProps) {
  return (
    <Button
      aria-label="select-dob-button"
      disableFocusRipple
      onClick={props.onClick}
      className="rounded-lg py-3 px-4 button-text-lower text-white bg-[#0f0f0f] hover:bg-[#0f0f0f] opacity-100 hover:opacity-75 transition-opacity cursor-default"
      sx={{
        '.MuiTouchRipple-child': {
          backgroundColor: '#ffffff80 !important',
        },
      }}
    >
      <div className="flex space-x-3">
        <CalendarIcon className="h-5 text-white" />
        <h6 className="text-white text-sm font-[600]">{props.label}</h6>
      </div>
    </Button>
  );
}

export default DatePickerCustomButton;
