import React, { FC, ReactNode } from 'react';
import { ColorState } from './state/ColorState';
import { OtpState } from './state/OtpState';
import { AvatarState } from './state/AvatarState';
import { ProfileURLState } from './state/ProfileURLState';
import { DatePickerState } from './state/DatePickerState';

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
      <OtpState value={{ show: false }}>
        <AvatarState value={{ show: false }}>
          <DatePickerState value={{ show: false }}>
            <ProfileURLState value={{ URL: '/images/user.png', change: false }}>
              {props.children}
            </ProfileURLState>
          </DatePickerState>
        </AvatarState>
      </OtpState>
    </ColorState>
  );
};
