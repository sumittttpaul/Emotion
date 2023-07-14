import DialogContainerDark from 'components/dialog/DialogContainerDark';
import { Button } from '@mui/material';
import { LoaderHook } from 'hooks/Hooks.Loader';
import { useRouter } from 'next/navigation';

export interface SetupSkipDialogProps {
  Open: boolean;
  onClose: () => void;
}

function SetupSkipDialog(props: SetupSkipDialogProps) {
  const { setLoader } = LoaderHook();
  const router = useRouter();

  const handleContinue = () => {
    props.onClose();
    setLoader(true);
    router.push('/');
  };

  return (
    <DialogContainerDark
      show={props.Open}
      onClose={props.onClose}
      disableClickAwayClose
    >
      <div className="p-5 max-w-[400px] w-full h-full relative space-y-4 flex flex-col items-center justify-center overflow-hidden">
        <h5 className="text-white text-xl truncate tracking-wide font-bold flex">
          Are you sure ?
        </h5>
        <h6 className="text-white/75 px-5 text-sm font-normal flex space-x-1">
          It is important to add your details to get personalized results. You
          can do this later in the Manage My Account section.
        </h6>
        <div className="flex w-full space-x-2 pt-10">
          <div className="flex h-10 w-full">
            <Button
              disableFocusRipple
              onClick={props.onClose}
              className="text-sm w-full truncate text-red-400 bg-transparent hover:bg-white/5 rounded-lg px-7 py-2 font-medium cursor-default tracking-wide button-text-lower transition-all"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: '#ffffff80 !important',
                },
              }}
            >
              Cancel
            </Button>
          </div>
          <div className="flex h-10 w-full">
            <Button
              disableFocusRipple
              onClick={handleContinue}
              className="text-sm w-full truncate text-sky-400 bg-dark-blue hover:bg-dark-blue/70 rounded-lg px-7 py-2 font-medium cursor-default tracking-wide button-text-lower transition-all"
              sx={{
                '.MuiTouchRipple-child': {
                  backgroundColor: '#38bdf880 !important',
                },
              }}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </DialogContainerDark>
  );
}

export default SetupSkipDialog;
