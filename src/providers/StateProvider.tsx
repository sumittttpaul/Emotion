import React, { FC, ReactNode } from 'react';
import { ColorState } from './state/ColorState';
import { OtpState } from './state/OtpState';
import { AvatarState } from './state/AvatarState';

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
      <OtpState value={{ setShow: false }}>
        <AvatarState value={{ show: false }}>{props.children}</AvatarState>
      </OtpState>
    </ColorState>
  );
};
