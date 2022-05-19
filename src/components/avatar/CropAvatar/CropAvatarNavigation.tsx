import React, { FC } from 'react';
import { SmallIconButtonDark } from '../../button/SmallIconButtonDark';

interface IProps {
  RotateLeft: () => void;
  RotateRight: () => void;
  FlipX: () => void;
  FlipY: () => void;
}

/**
 * @author
 * @function @CropAvatarNavigation
 **/

export const CropAvatarNavigation: FC<IProps> = (props) => {
  return (
    <div className="w-full justify-center p-5 space-x-3">
      <SmallIconButtonDark
        onClick={props.RotateLeft}
        content="Rotate Left"
        iconURL="/icons/rotate-left.svg"
      />
      <SmallIconButtonDark
        onClick={props.RotateRight}
        content="Rotate Right"
        iconURL="/icons/rotate-right.svg"
      />
      <SmallIconButtonDark
        onClick={props.FlipX}
        content="Flip X"
        iconURL="/icons/flip-x.svg"
      />
      <SmallIconButtonDark
        onClick={props.FlipY}
        content="Flip Y"
        iconURL="/icons/flip-y.svg"
      />
    </div>
  );
};
