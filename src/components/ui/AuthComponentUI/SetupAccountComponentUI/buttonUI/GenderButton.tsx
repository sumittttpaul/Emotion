import React, { Dispatch, FC, SetStateAction } from 'react';
import { BorderContainerDark } from '../../../../container/BorderContainerDark';
import { SetupAccountLabel } from '../../../../label/SetupAccountLabel';
import { RadioGroupDark } from '../../../../radiogroup/RadioGroupDark';

interface IProps {
  content: Array<string>;
  value?: string;
  onChange: Dispatch<SetStateAction<any>>
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
        <RadioGroupDark content={props.content} value={props.value} onChange={props.onChange}/>
      </div>
    </BorderContainerDark>
  );
};
