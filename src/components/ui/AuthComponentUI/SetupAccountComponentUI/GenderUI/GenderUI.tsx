import React, { Dispatch, FC, SetStateAction } from 'react';
import { GenderButton } from '../buttonUI/GenderButton';

interface IProps {
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
      <GenderButton
        content={props.GenderContent}
        value={props.GenderValue}
        onChange={props.GenderValueChange}
      />
    </>
  );
};
