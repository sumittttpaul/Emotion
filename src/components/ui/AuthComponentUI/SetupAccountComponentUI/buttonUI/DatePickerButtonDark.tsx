import React, { FC } from 'react';
import { BorderContainerDark } from '../../../../container/BorderContainerDark';
import { SetupAccountLabel } from '../../../../label/SetupAccountLabel';
import { DOBbuttonDark } from '../../../../button/DOBbuttonDark';

interface IProps {
  onClick?: () => void;
  label: string;
}

/**
 * @author
 * @function @DatePickerButtonDark
 **/

export const DatePickerButtonDark: FC<IProps> = (props) => {
  return (
    <BorderContainerDark>
      <div className="flex flex-col space-y-2 items-center w-full relative">
        <SetupAccountLabel
          heading="Date of birth"
          subheading="Get special discount and offers on your special day."
        />
        <DOBbuttonDark label={props.label} onClick={props.onClick} />
      </div>
    </BorderContainerDark>
  );
};
