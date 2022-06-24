import React, { FC } from 'react';
import { SetupAccountDivider } from '../../../../divider/SetupAccountDivider';
import { SetupAccountLabel } from '../../../../label/SetupAccountLabel';
import { DatePickerButton } from '../buttonUI/DatePickerButton';

export interface DatePickerUIProps {
  theme: string;
  getDOBValue: (value: string) => void;
  getHandleBoolValue: (value: boolean) => void;
}

/**
 * @author
 * @function @DatePickerUI
 **/

export const DatePickerUI: FC<DatePickerUIProps> = (props) => {
  return (
    <div className="flex flex-col w-full relative space-y-4">
      <SetupAccountDivider />
      <div className="flex flex-col space-y-2 items-center w-full relative">
        <SetupAccountLabel
          heading="Date of birth"
          subheading="Get special discount and offers on your special day."
        />
        <DatePickerButton theme={props.theme} getDOBValue={props.getDOBValue} getHandleBoolValue={props.getHandleBoolValue} />
      </div>
    </div>
  );
};
