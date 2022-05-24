import React, { FC } from 'react';
import { GenderButton } from '../GenderButton';

interface IProps {}

/**
 * @author
 * @function @GenderUI
 **/

export const GenderUI: FC<IProps> = (props) => {
  return (
    <>
      <GenderButton />
    </>
  );
};
