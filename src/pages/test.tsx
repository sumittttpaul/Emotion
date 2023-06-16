import { NextPage } from 'next';
import { HorizontalNavBar } from '../components/navbar/Horizontal.NavBar';
import { VerticalNavBar } from '../components/navbar/Vertical.NavBar';
import { Button } from '@mui/material';
import { Fragment, useEffect, useRef, useState, FC } from 'react';
import { ToastDark } from '../components/toast/ToastDark';
import {
  motion,
  LazyMotion,
  domAnimation,
  useMotionValue,
  useAnimation,
} from 'framer-motion';
import ScrollContainer from 'react-indiana-drag-scroll';
import { RotateSlider } from '../components/slider/RotateSlider';

interface IProps {}

/**
 * @Test_Page
 **/
const TestPage: NextPage<IProps> = (props) => {
  const [Toast, setToast] = useState(false);
  const [ToastSetting, setToastSetting] = useState({
    Title: '',
    Description: '',
    Type: '',
  });

  const showToast = (type: string) => {
    setToast(true);
    setToastSetting({
      Title: 'This is the test',
      Description: 'Please cooperate with us in our test.',
      Type: type,
    });
  };

  const [DegreeValue, setDegreeValue] = useState('0');

  return (
    <div className="h-screen w-screen flex flex-col text-white items-center p-5 justify-center bg-primary-theme overflow-hidden box-border">
      <RotateSlider Degree={DegreeValue} setDegree={setDegreeValue} />
      <div className="flex flex-col max-w-[500px] mx-auto w-full h-full space-y-10 justify-center items-center">
        <VerticalNavBar />
        <HorizontalNavBar />
      </div>
      <LazyMotion features={domAnimation} strict>
        <div className="w-full flex justify-between space-x-1 sm:space-x-10 p-0 sm:p-5">
          <Button
            onClick={() => showToast('Success')}
            className="text-green-400 bg-white/5 button-text-lower w-full truncate text-xs sm:text-sm"
          >
            Success Toast
          </Button>
          <Button
            onClick={() => showToast('Error')}
            className="text-red-400 bg-white/5 button-text-lower w-full truncate text-xs sm:text-sm"
          >
            Error Toast
          </Button>
          <Button
            onClick={() => showToast('Info')}
            className="text-blue-400 bg-white/5 button-text-lower w-full truncate text-xs sm:text-sm"
          >
            Info Toast
          </Button>
          <Button
            onClick={() => showToast('Warning')}
            className="text-yellow-400 bg-white/5 button-text-lower w-full truncate text-xs sm:text-sm"
          >
            Warning Toast
          </Button>
        </div>
        <ToastDark
          Toast={{
            Open: Toast,
            onClose: setToast,
            MessageTitle: ToastSetting.Title,
            MessageDescription: ToastSetting.Description,
            Type: ToastSetting.Type,
          }}
          SlideDirection="down"
          Vertical="top"
          Horizontal="center"
          HideDuration={10}
        />
      </LazyMotion>
    </div>
  );
};

export default TestPage;
