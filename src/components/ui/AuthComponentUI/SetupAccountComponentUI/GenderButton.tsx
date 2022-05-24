import React, { FC } from 'react';
import { BorderContainerDark } from '../../../container/BorderContainerDark';
import { SetupAccountLabel } from '../../../label/SetupAccountLabel';
import { RadioGroupDark } from '../../../radiogroup/RadioGroupDark';

interface IProps {
  value: Array<string>;
}

/**
 * @author
 * @function @GenderButton
 **/

export const GenderButton: FC<IProps> = (props) => {
  return (
    <BorderContainerDark>
      <div className="flex flex-col space-y-2 items-center w-full relative">
        <SetupAccountLabel
          heading="Gender"
          subheading="We will customize our product list according to you."
        />
        <RadioGroupDark value={props.value}/>
      </div>
    </BorderContainerDark>
  );
};
