import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XIcon,
} from '@heroicons/react/solid';
import React, { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Slide, SlideProps, Snackbar } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

interface IProps {
  message: string;
  slideDirection: any;
  positionVertical: any;
  positionHorizontal: any;
  open: boolean;
  type: string;
  bgColor: string;
  autoHideDuration: number;
  close: (value: boolean) => void;
}

const textColor = 'text-white opacity-100';
const maxWidth = 'max-w-[400px]';

const ErrorBorderColor = 'border-[#fd1616]';
const ErrorIconColor = 'text-[#FF2828]';

const SuccessBorderColor = 'border-[#00cc11cc]';
const SuccessIconColor = 'text-[#00cc11cc]';

const InfoBorderColor = 'border-[#0099ff]';
const InfoIconColor = 'text-[#0099ff]';

const WarningBorderColor = 'border-[#ffae00ea]';
const WarningIconColor = 'text-[#ffae00ea]';

/**
 * @author
 * @function @ToastDark
 **/

export const ToastDark: FC<IProps> = (props) => {
  const bgColor = props.bgColor;
  const autoHideDuration = props.autoHideDuration;

  const SlideTransition = (prop: SlideProps) => {
    return <Slide {...prop} direction={props.slideDirection} />;
  };

  const [state, setState] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: SlideTransition,
  });

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
    props.close(false);
  };

  const handleCloseClick = () => {
    setTimeout(() => {
      setState({
        ...state,
        open: false,
      });
      props.close(false);
    }, 200);
  };

  // @ts-ignore: Unreachable code error
  useEffect(() => {
    if (state.open === props.open) {
      return;
    }
    setState({
      ...state,
      open: props.open,
    });
  }, [props.open, state]);

  if (props.type.toLowerCase() === 'error') {
    return (
      <Snackbar
        open={state.open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        anchorOrigin={{
          vertical: props.positionVertical,
          horizontal: props.positionHorizontal,
        }}
      >
        <div
          className={`${'text-white flex relative space-x-3 p-3 items-center border-l-[3px] rounded-lg'} ${maxWidth} ${ErrorBorderColor} ${bgColor}`}
        >
          <div className="h-full items-start">
            <XCircleIcon className={`${'h-7 w-7'} ${ErrorIconColor}`} />
          </div>
          <h6 className={`${'text-xs font-[350] pr-10'} ${textColor}`}>
            {props.message}
          </h6>
          <div className="h-full absolute block top-3 right-3">
            <motion.button
              onClick={handleCloseClick}
              whileTap={{ scale: 0.8 }}
              className="bg-[#ffffff1a] hover:bg-[#ffffff1a] cursor-default p-[6px] rounded-md"
            >
              <XIcon className="text-white h-[14px] w-[14px] opacity-70" />
            </motion.button>
          </div>
        </div>
      </Snackbar>
    );
  }
  if (props.type.toLowerCase() === 'success') {
    return (
      <Snackbar
        open={state.open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        anchorOrigin={{
          vertical: props.positionVertical,
          horizontal: props.positionHorizontal,
        }}
      >
        <div
          className={`${'text-white flex relative items-center border-l-[3px] space-x-3 p-3 rounded-lg'} ${maxWidth} ${SuccessBorderColor} ${bgColor}`}
        >
          <div className="h-full items-start">
            <CheckCircleIcon className={`${'h-7 w-7'} ${SuccessIconColor}`} />
          </div>
          <h6 className={`${'text-xs font-[350] pr-10'} ${textColor}`}>
            {props.message}
          </h6>
          <div className="h-full absolute block top-3 right-3">
            <motion.button
              onClick={handleCloseClick}
              whileTap={{ scale: 0.8 }}
              className="bg-[#ffffff1a] hover:bg-[#ffffff1a] cursor-default p-[6px] relative block rounded-md"
            >
              <XIcon className="text-white h-[14px] w-[14px] opacity-70" />
            </motion.button>
          </div>
        </div>
      </Snackbar>
    );
  }
  if (props.type.toLowerCase() === 'info') {
    return (
      <Snackbar
        open={state.open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        anchorOrigin={{
          vertical: props.positionVertical,
          horizontal: props.positionHorizontal,
        }}
      >
        <div
          className={`${'text-white flex relative space-x-3 p-3 items-center border-l-[3px] rounded-lg'} ${maxWidth} ${InfoBorderColor} ${bgColor}`}
        >
          <div className="h-full items-start">
            <InformationCircleIcon
              className={`${'h-7 w-7'} ${InfoIconColor}`}
            />
          </div>
          <h6 className={`${'text-xs font-[350] pr-10'} ${textColor}`}>
            {props.message}
          </h6>
          <div className="h-full absolute block top-3 right-3">
            <motion.button
              onClick={handleCloseClick}
              whileTap={{ scale: 0.8 }}
              className="bg-[#ffffff1a] hover:bg-[#ffffff1a] cursor-default p-[6px] rounded-md"
            >
              <XIcon className="text-white h-[14px] w-[14px] opacity-70" />
            </motion.button>
          </div>
        </div>
      </Snackbar>
    );
  }
  if (props.type.toLowerCase() === 'warning') {
    return (
      <Snackbar
        open={state.open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        anchorOrigin={{
          vertical: props.positionVertical,
          horizontal: props.positionHorizontal,
        }}
      >
        <div
          className={`${'text-white flex relative space-x-3 p-3 items-center border-l-[3px] rounded-lg'} ${maxWidth} ${WarningBorderColor} ${bgColor}`}
        >
          <div className="h-full items-start">
            <InformationCircleIcon
              className={`${'h-7 w-7'} ${WarningIconColor}`}
            />
          </div>
          <h6 className={`${'text-xs font-[350] pr-10'} ${textColor}`}>
            {props.message}
          </h6>
          <div className="h-full absolute block top-3 right-3">
            <motion.button
              onClick={handleCloseClick}
              whileTap={{ scale: 0.8 }}
              className="bg-[#ffffff1a] hover:bg-[#ffffff1a] cursor-default p-[6px] rounded-md"
            >
              <XIcon className="text-white h-[14px] w-[14px] opacity-70" />
            </motion.button>
          </div>
        </div>
      </Snackbar>
    );
  } else {
    return null;
  }
};
