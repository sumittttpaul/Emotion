import React, { FC, ReactNode } from 'react';
import { AvatarState } from './state/AvatarState';
import { ColorState } from './state/ColorState';
import { OtpState } from './state/OtpState';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @StateProvider
 **/

export const StateProvider: FC<IProps> = (props) => {
  return (
    <ColorState>
      <AvatarState value={{ setShow: false }}>
        <OtpState value={{ setShow: false}}>
          {props.children}
          </OtpState>
      </AvatarState>
    </ColorState>
  );
};
