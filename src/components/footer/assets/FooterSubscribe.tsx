import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react';
import { SubscribeButton } from '../../button/SubscribeButton';
import { TooltipDark } from '../../tooltip/TooltipDark';

interface IProps {}

var emailExpression =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * @author
 * @function @FooterSubscribe
 **/

export const FooterSubscribe: FC<IProps> = (props) => {
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

  const EmptyEmail = () => {
    setDisabled(true);
    setValidEmail(false);
    setEmail('');
  };
  return (
    <div className="overscroll-none h-full flex py-2 items-start relative">
      <div className="flex relative bg-[#0f0f0f] rounded-lg p-0">
        <TooltipDark
          placement="bottom-start"
          title={
            <h6 className="font-[400]">
              Subscribe our newsletter to never miss an update
            </h6>
          }
        >
          <input
            value={Email}
            onChange={EmailChange}
            onKeyUp={EmailKeyUp}
            placeholder="Email Address"
            type="text"
            autoComplete="email"
            className="text-[13px] whitespace-nowrap rounded-l-lg w-[220px] p-[10px] font-normal text-[#ffffffe6] bg-[#191919] border-0 ring-0 outline-none"
          />
        </TooltipDark>
        <SubscribeButton
          validEmail={ValidEmail}
          disabled={Disabled}
          emailEmpty={EmptyEmail}
        />
      </div>
    </div>
  );
};
