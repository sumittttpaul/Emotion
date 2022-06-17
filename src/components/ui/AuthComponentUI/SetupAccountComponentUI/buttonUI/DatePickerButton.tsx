import React, { FC } from 'react';
import { SetupAccountLabel } from '../../../../label/SetupAccountLabel';
import { DOBbutton } from '../../../../button/DOBbutton';
import { SetupAccountDivider } from '../../../../divider/SetupAccountDivider';

interface IProps {
  onClick?: () => void;
  label: string;
}

/**
 * @author
 * @function @DatePickerButton
 **/

export const DatePickerButton: FC<IProps> = (props) => {
  return (
    <div className="flex flex-col w-full relative space-y-4">
      <SetupAccountDivider />
      <div className="flex flex-col space-y-2 items-center w-full relative">
        <SetupAccountLabel
          heading="Date of birth"
          subheading="Get special discount and offers on your special day."
        />
        <DOBbutton theme='dark' label={props.label} onClick={props.onClick} />
      </div>
    </div>
  );
};
