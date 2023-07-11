import { XIcon } from '@heroicons/react/solid';
import { Snackbar } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { useEffect, useRef } from 'react';
import { m, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

export interface ToastDarkContentProps {
  Open: boolean;
  MessageTitle: string;
  MessageDescription: string;
  HideDuration: number;
  Icon: string;
  Color: string;
  Vertical: 'top' | 'bottom';
  Horizontal: 'left' | 'center' | 'right';
  onClose: () => void;
  Transition: React.ComponentType<
    TransitionProps & {
      children: React.ReactElement<any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
    }
  >;
}

function ToastDarkContent(props: ToastDarkContentProps) {
  const animate = useAnimationControls();
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClose = (event: React.SyntheticEvent | Event, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    if (reason === 'escapeKeyDown') {
      return;
    } else {
      props.onClose();
    }
  };

  const handlePointerEnter = () => {
    animate.stop();
  };

  const handlePointerLeave = () => {
    animate.start({
      width: '0%',
      transition: { duration: ResumeTime() },
    });
  };

  const handleAnimationComplete = () => {
    const progress = progressRef.current;
    if (progress) {
      const width = progress.offsetWidth;
      if (width < 1 || width == 0) props.onClose();
    }
  };

  const ResumeTime = () => {
    const progress = progressRef.current;
    const container = containerRef.current;
    if (progress && container) {
      const currentWidth = progress.offsetWidth;
      const totalWidth = container.offsetWidth;
      const getWidth = currentWidth / totalWidth;
      const calculatedWidth = getWidth * 100;
      const percentage = parseInt(calculatedWidth.toString().split('.')[0]);
      const decible = percentage / 100;
      return decible * props.HideDuration;
    }
  };

  useEffect(() => {
    animate.start({ width: '0%' });
  }, [props.Open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Snackbar
      open={props.Open}
      onClose={handleClose}
      TransitionComponent={props.Transition}
      disableWindowBlurListener
      anchorOrigin={{
        vertical: props.Vertical,
        horizontal: props.Horizontal,
      }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className={`${props.Color} h-full text-white md:max-w-[500px] flex flex-col space-y-1 border border-solid border-white/20 rounded-xl overflow-hidden Toast-DropShadow`}
      >
        <div className="w-full h-full flex space-x-3 p-1">
          <div className="flex h-full pl-2 py-3 items-start">
            <Image height={40} width={40} src={props.Icon} alt="" />
          </div>
          <div className="flex flex-col py-2 w-full">
            <h5 className="text-white text-[15px] font-[600]">
              {props.MessageTitle}
            </h5>
            <h6 className="text-white/[0.85] text-[13px] leading-4 font-medium">
              {props.MessageDescription}
            </h6>
          </div>
          <div className="h-full flex flex-col items-start justify-center">
            <m.button
              onClick={props.onClose}
              whileTap={{ scale: 0.9 }}
              className="bg-transparent hover:bg-white/10 cursor-default p-2.5 m-0 rounded-full"
            >
              <XIcon className="text-white h-4 w-4" />
            </m.button>
          </div>
        </div>
        <div ref={containerRef} className="w-full flex">
          <m.div
            ref={progressRef}
            onAnimationComplete={handleAnimationComplete}
            initial={{ width: '100%' }}
            animate={animate}
            transition={{ duration: props.HideDuration }}
            className="w-full h-[2px] bg-white/75"
          />
        </div>
      </div>
    </Snackbar>
  );
}

export default ToastDarkContent;
