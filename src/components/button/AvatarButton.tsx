import React, { FC } from 'react';
import { AvatarCircularButton } from './AvatarCircularButton';
import { BorderContainerDark } from '../container/BorderContainerDark';

interface IProps {
  onClick?: () => void;
  profileURL: string;
}

/**
 * @author
 * @function @AvatarButton
 **/

export const AvatarButton: FC<IProps> = (props) => {
  return (
    <BorderContainerDark>
      <div className="flex flex-col space-y-2 items-center w-full relative">
        <h6 className="text-xs text-white">Profile photo</h6>
        <AvatarCircularButton
          onClick={props.onClick}
          profileURL={props.profileURL}
        />
        <h6 className="text-[10px] opacity-60 font-[350] text-white">
          Try our new avatar collections for women & men
        </h6>
      </div>
    </BorderContainerDark>
  );
};
