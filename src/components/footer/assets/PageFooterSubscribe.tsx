import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react';
import { SubscribeButton } from '../../button/SubscribeButton';

interface IProps {}

/**
 * @author
 * @function @PageFooterSubscribe
 **/

var emailExpression =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PageFooterSubscribe: FC<IProps> = (props) => {
  const [Disabled, setDisabled] = useState(true);
  const [Email, setEmail] = useState('');
  const [ValidEmail, setValidEmail] = useState(false);

  const EmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  var ValidateEmail = Email.toLowerCase().match(emailExpression);

  const EmailKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (ValidateEmail) {
      setDisabled(false);
      setValidEmail(true);
    }
  };
  return (
    <div className="overscroll-none h-full flex items-start relative">
      <div className="flex relative bg-[#121212] rounded-lg p-0">
        <input
          value={Email}
          onChange={EmailChange}
          onKeyUp={EmailKeyUp}
          placeholder="Email Address"
          type="text"
          className="text-[13px] whitespace-nowrap rounded-l-lg w-[220px] p-[10px] font-normal text-[rgba(255,255,255,0.9)] bg-[#121212] border-0 ring-0 outline-none"
        />
        <SubscribeButton
          validEmail={ValidEmail}
          disabled={Disabled}
        />
      </div>
    </div>
  );
};
