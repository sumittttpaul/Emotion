import { CheckIcon, XIcon } from '@heroicons/react/solid';
import { Button } from '@mui/material';

interface IProps {
  cancel: () => void;
  submit: () => void;
  submitActive: boolean;
}

function DatePickerDialogBottom(props: IProps) {
  return (
    <div className="p-3 flex space-x-3 relative justify-end">
      <Button
        aria-label="dob-cancel-button"
        disableFocusRipple
        onClick={props.cancel}
        className="group rounded-lg h-8 w-[calc(100%/3)] bg-white/5 hover:bg-white/5 outline-none cursor-default"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff80 !important',
          },
        }}
      >
        <XIcon className="h-5 text-red-400 group-hover:text-white" />
      </Button>
      <Button
        aria-label="dob-submit-button"
        disableFocusRipple
        disabled={!props.submitActive}
        onClick={props.submit}
        className="disabled:opacity-50 disabled:cursor-not-allowed group rounded-lg h-8 w-[calc(100%/3)] bg-dark-blue hover:bg-dark-blue outline-none cursor-default"
        sx={{
          '.MuiTouchRipple-child': {
            backgroundColor: '#ffffff80 !important',
          },
        }}
      >
        <CheckIcon className="h-6 text-sky-400 group-hover:text-white" />
      </Button>
    </div>
  );
}

export default DatePickerDialogBottom;
