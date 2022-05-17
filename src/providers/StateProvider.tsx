import React, { FC, ReactNode } from 'react';
import { ShowAvatarState } from './state/ShowAvatarState';
import { ColorState } from './state/ColorState';
import { OtpState } from './state/OtpState';
import { SelectAvatarState } from './state/SelectAvatarState';
import { CropAvatarState } from './state/CropAvatarState';

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
        <ShowAvatarState value={{ setShow: false }}>
          <SelectAvatarState value={{ setShow: false }}>
            <CropAvatarState value={{ setShow: true }}>
              {props.children}
            </CropAvatarState>
          </SelectAvatarState>
        </ShowAvatarState>
      </OtpState>
    </ColorState>
  );
};
