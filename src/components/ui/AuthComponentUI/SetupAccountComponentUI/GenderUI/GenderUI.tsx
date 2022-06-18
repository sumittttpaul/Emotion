import React, { Dispatch, FC, SetStateAction } from 'react';
import { SetupAccountDivider } from '../../../../divider/SetupAccountDivider';
import { SetupAccountLabel } from '../../../../label/SetupAccountLabel';
import { GenderButton } from '../buttonUI/GenderButton';

interface IProps {
  theme: string;
  GenderContent: Array<string>;
  GenderValue?: string;
  GenderValueChange: Dispatch<SetStateAction<any>>;
}

/**
 * @author
 * @function @GenderUI
 **/

export const GenderUI: FC<IProps> = (props) => {
  return (
    <>
      <div className="flex flex-col w-full relative space-y-4 pb-1">
        <SetupAccountDivider />
        <div className="flex flex-col space-y-2 items-center w-full relative">
          <SetupAccountLabel
            heading="Gender"
            subheading="We will customize our product list according to you."
          />
          <GenderButton
            theme={props.theme}
            content={props.GenderContent}
            value={props.GenderValue}
            onChange={props.GenderValueChange}
          />
        </div>
      </div>
    </>
  );
};
