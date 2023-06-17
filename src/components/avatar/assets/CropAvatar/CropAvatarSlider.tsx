import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { RotateSlider } from '../../../slider/RotateSlider';

interface IProps {
  setRotateValue: Dispatch<SetStateAction<number>>;
  rotate: (value: number) => void;
  SliderRef: RefObject<HTMLElement>;
}

/**
 * @author
 * @function @CropAvatarSlider
 **/

export const CropAvatarSlider: FC<IProps> = (props) => {
  return (
    <div className="px-5 pt-5 w-full max-w-[650px] mx-auto relative">
      <RotateSlider
        SliderRef={props.SliderRef}
        getValue={(value) => {
          props.rotate(parseInt(value.toString()));
          props.setRotateValue(parseInt(value.toString()));
        }}
      />
    </div>
  );
};
