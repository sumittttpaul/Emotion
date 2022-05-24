import React, { FC } from 'react';
import { AvatarCircularButton } from '../../../button/AvatarCircularButton';
import { BorderContainerDark } from '../../../container/BorderContainerDark';
import { SetupAccountLabel } from '../../../label/SetupAccountLabel';

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
        <SetupAccountLabel
          heading="Profile photo"
          subheading="Try our new avatar collections for women & men."
        />
        <AvatarCircularButton
          onClick={props.onClick}
          profileURL={props.profileURL}
        />
      </div>
    </BorderContainerDark>
  );
};
