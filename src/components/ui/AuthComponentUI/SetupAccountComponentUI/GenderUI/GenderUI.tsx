import React, { FC, useState } from 'react';
import { GenderButton } from '../buttonUI/GenderButton';

interface IProps {}

/**
 * @author
 * @function @GenderUI
 **/

export const GenderUI: FC<IProps> = (props) => {
  const [value, setValue] = useState();
  return (
    <>
      <GenderButton
        content={['Female', 'Male', 'Others']}
        value={value}
        onChange={setValue}
      />
    </>
  );
};
