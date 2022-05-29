import React, { FC, useState, useEffect } from 'react';

interface IProps {
  min: number;
  sec: number;
  resend: () => void;
}

/**
 * @author
 * @function @OTPTimer
 **/

export const OTPTimer: FC<IProps> = (props) => {
  const { min, sec } = props;
  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          props.resend();
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? null : (
        <h6 className="text-white text-xs font-light flex opacity-75">
          {'Resend OTP in '}
          <h6 className="text-white text-xs font-light pl-1">
            {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
            {' min'}
          </h6>
        </h6>
      )}
    </div>
  );
};
