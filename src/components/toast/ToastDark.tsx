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
  close: (value: boolean) => void;
}

/**
 * @author
 * @function @GradientToastDark
 **/

const ErrorBorderColor = 'border-[#fd1616]';
const ErrorIconColor = 'text-[#fd1616]';

const SuccessBorderColor = 'border-[#00cc11cc]';
const SuccessIconColor = 'text-[#00cc11cc]';

const InfoBorderColor = 'border-[#0099ff]';
const InfoIconColor = 'text-[#0099ff]';

const WarningBorderColor = 'border-[#ffae00ea]';
const WarningIconColor = 'text-[#ffae00ea]';

export const ToastDark: FC<IProps> = (props) => {
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

  useEffect(() => {
    if (state.open === props.open) {
      return;
    }
    setState({
      ...state,
      open: props.open,
    });
  });

  if (props.type === 'error') {
    return (
      <Snackbar
        open={state.open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        anchorOrigin={{
          vertical: props.positionVertical,
          horizontal: props.positionHorizontal,
        }}
      >
        <div
          className={`${'text-white flex relative space-x-3 p-3 items-center border-l-[3px] bg-[#121212] rounded-lg max-w-[400px]'} ${ErrorBorderColor}`}
        >
          <div className="h-full items-start">
            <XCircleIcon className={`${'h-7 w-7'} ${ErrorIconColor}`} />
          </div>
          <h6 className="text-xs opacity-80 font-[350] pr-2">
            {props.message}
          </h6>
          <div className="h-full items-start">
            <motion.button
              onClick={handleCloseClick}
              whileTap={{ scale: 0.8 }}
              className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] cursor-default p-[6px] rounded-md"
            >
              <XIcon className="text-white h-[14px] w-[14px] opacity-70" />
            </motion.button>
          </div>
        </div>
      </Snackbar>
    );
  }
  if (props.type === 'success') {
    return (
      <Snackbar
        open={state.open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        anchorOrigin={{
          vertical: props.positionVertical,
          horizontal: props.positionHorizontal,
        }}
      >
        <div
          className={`${'text-white flex relative space-x-3 p-3 items-center border-l-[3px] bg-[#121212] rounded-lg max-w-[400px]'} ${SuccessBorderColor}`}
        >
          <div className="h-full items-start">
            <CheckCircleIcon className={`${'h-7 w-7'} ${SuccessIconColor}`} />
          </div>
          <h6 className="text-xs opacity-80 font-[350] pr-2">
            {props.message}
          </h6>
          <div className="h-full items-start">
            <motion.button
              onClick={handleCloseClick}
              whileTap={{ scale: 0.8 }}
              className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] cursor-default p-[6px] rounded-md"
            >
              <XIcon className="text-white h-[14px] w-[14px] opacity-70" />
            </motion.button>
          </div>
        </div>
      </Snackbar>
    );
  }
  if (props.type === 'info') {
    return (
      <Snackbar
        open={state.open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        anchorOrigin={{
          vertical: props.positionVertical,
          horizontal: props.positionHorizontal,
        }}
      >
        <div
          className={`${'text-white flex relative space-x-3 p-3 items-center border-l-[3px] bg-[#121212] rounded-lg max-w-[400px]'} ${InfoBorderColor}`}
        >
          <div className="h-full items-start">
            <InformationCircleIcon
              className={`${'h-7 w-7'} ${InfoIconColor}`}
            />
          </div>
          <h6 className="text-xs opacity-80 font-[350] pr-2">
            {props.message}
          </h6>
          <div className="h-full items-start">
            <motion.button
              onClick={handleCloseClick}
              whileTap={{ scale: 0.8 }}
              className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] cursor-default p-[6px] rounded-md"
            >
              <XIcon className="text-white h-[14px] w-[14px] opacity-70" />
            </motion.button>
          </div>
        </div>
      </Snackbar>
    );
  }
  if (props.type === 'warning') {
    return (
      <Snackbar
        open={state.open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        anchorOrigin={{
          vertical: props.positionVertical,
          horizontal: props.positionHorizontal,
        }}
      >
        <div
          className={`${'text-white flex relative space-x-3 p-3 items-center border-l-[3px] bg-[#121212] rounded-lg max-w-[400px]'} ${WarningBorderColor}`}
        >
          <div className="h-full items-start">
            <InformationCircleIcon
              className={`${'h-7 w-7'} ${WarningIconColor}`}
            />
          </div>
          <h6 className="text-xs opacity-80 font-[350] pr-2">
            {props.message}
          </h6>
          <div className="h-full items-start">
            <motion.button
              onClick={handleCloseClick}
              whileTap={{ scale: 0.8 }}
              className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] cursor-default p-[6px] rounded-md"
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
