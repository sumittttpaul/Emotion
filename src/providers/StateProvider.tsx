import React, { FC, ReactNode } from 'react';
import { ShowAvatarState } from './state/ShowAvatarState';
import { ColorState } from './state/ColorState';
import { OtpState } from './state/OtpState';
import { SelectAvatarState } from './state/SelectAvatarState';

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
      <ShowAvatarState value={{ setShow: false }}>
        <SelectAvatarState value={{ setShow: false}}>
          <OtpState value={{ setShow: false}}>
            {props.children}
          </OtpState>
        </SelectAvatarState>
      </ShowAvatarState>
    </ColorState>
  );
};
