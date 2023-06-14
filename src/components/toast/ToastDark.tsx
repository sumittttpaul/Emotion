import React, {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { Slide, SlideProps } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { ToastDarkContentProps } from './ToastDarkContent';
import dynamic from 'next/dynamic';

const ToastDarkContent = dynamic<ToastDarkContentProps>(
  () => import('./ToastDarkContent').then((x) => x.ToastDarkContent),
  { ssr: false }
);

export interface ToastDarkProps {
  SlideDirection: 'left' | 'right' | 'up' | 'down';
  Vertical: 'top' | 'bottom';
  Horizontal: 'left' | 'center' | 'right';
  HideDuration: number;
  Toast: {
    Open: boolean;
    onClose: Dispatch<SetStateAction<boolean>>;
    MessageTitle: string;
    MessageDescription: string;
    Type: string;
  };
}

/**
 * @author
 * @function @ToastDark
 **/

export const ToastDark: FC<ToastDarkProps> = (props) => {
  const SlideTransition = (prop: SlideProps) => {
    return (
      <Slide
        {...prop}
        style={{ marginTop: 0, paddingTop: 0 }}
        direction={props.SlideDirection}
      />
    );
  };

  const [state, setState] = useState<{
    Open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    Open: false,
    Transition: SlideTransition,
  });

  const handleClose = () => {
    setState({
      ...state,
      Open: false,
    });
    props.Toast.onClose(false);
  };

  useEffect(() => {
    if (state.Open === props.Toast.Open) {
      return;
    }
    setState({
      ...state,
      Open: props.Toast.Open,
    });
  }, [props.Toast.Open, state]);

  return (
    <Fragment>
      {props.Toast.Type.toLowerCase() === 'error' && (
        <ToastDarkContent
          Open={state.Open}
          Color="bg-dark-red"
          Icon="/icons/x-circle-thin.svg"
          MessageTitle={props.Toast.MessageTitle}
          MessageDescription={props.Toast.MessageDescription}
          HideDuration={props.HideDuration}
          onClose={handleClose}
          Transition={state.Transition}
          Vertical={props.Vertical}
          Horizontal={props.Horizontal}
        />
      )}
      {props.Toast.Type.toLowerCase() === 'success' && (
        <ToastDarkContent
          Open={state.Open}
          Color="bg-dark-green"
          Icon="/icons/check-circle-thin.svg"
          MessageTitle={props.Toast.MessageTitle}
          MessageDescription={props.Toast.MessageDescription}
          HideDuration={props.HideDuration}
          onClose={handleClose}
          Transition={state.Transition}
          Vertical={props.Vertical}
          Horizontal={props.Horizontal}
        />
      )}
      {props.Toast.Type.toLowerCase() === 'info' && (
        <ToastDarkContent
          Open={state.Open}
          Color="bg-dark-blue"
          Icon="/icons/alert-circle-thin.svg"
          MessageTitle={props.Toast.MessageTitle}
          MessageDescription={props.Toast.MessageDescription}
          HideDuration={props.HideDuration}
          onClose={handleClose}
          Transition={state.Transition}
          Vertical={props.Vertical}
          Horizontal={props.Horizontal}
        />
      )}
      {props.Toast.Type.toLowerCase() === 'warning' && (
        <ToastDarkContent
          Open={state.Open}
          Color="bg-dark-orange"
          Icon="/icons/alert-triangle-thin.svg"
          MessageTitle={props.Toast.MessageTitle}
          MessageDescription={props.Toast.MessageDescription}
          HideDuration={props.HideDuration}
          onClose={handleClose}
          Transition={state.Transition}
          Vertical={props.Vertical}
          Horizontal={props.Horizontal}
        />
      )}
    </Fragment>
  );
};
