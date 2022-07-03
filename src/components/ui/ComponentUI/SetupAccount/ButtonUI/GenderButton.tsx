import React, { Dispatch, FC, SetStateAction } from 'react';
import { RadioGroupDark } from '../../../../radiogroup/RadioGroupDark';

interface IProps {
  theme: string;
  content: Array<string>;
  value?: string;
  onChange: Dispatch<SetStateAction<any>>;
}

/**
 * @author
 * @function @GenderButton
 **/

export const GenderButton: FC<IProps> = (props) => {
  return (
    <RadioGroupDark
      theme={props.theme}
      content={props.content}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
