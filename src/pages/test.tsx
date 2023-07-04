import { NextPage } from 'next';
import { Button } from '@mui/material';
import { useState } from 'react';
import { ToastDark } from '../components/toast/ToastDark';
import { LazyMotion, domAnimation } from 'framer-motion';
import { CalculateAge, CalculateMonthNumber } from '../algorithms/UIAlgorithms';

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
    ShowToast(
      true,
      'This is the test',
      'Please cooperate with us in our test.',
      type
    );
  };

  const ShowToast = (
    Toast: boolean,
    Title: string,
    Description: string,
    Type: string
  ) => {
    setToast(Toast);
    setToastSetting({
      Title: Title,
      Description: Description,
      Type: Type,
    });
  };

  return (
    <div className="h-screen w-screen flex flex-col text-white items-center p-5 justify-center bg-primary-theme overflow-hidden box-border">
      <div className="flex flex-col max-w-[500px] mx-auto w-full h-full space-y-10 justify-center items-center">
        {/* <VerticalNavBar /> */}
        {/* <HorizontalNavBar /> */}
      </div>
      {/* {CalculateAge('16-10-2002').toString()} */}
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
          HideDuration={6}
        />
      </LazyMotion>
    </div>
  );
};

export default TestPage;
