import React, { FC } from 'react';
import { AuthHeaderLogo } from '../logo/CompanyLogo';

interface IProps {
  label: string;
}

/**
 * @author
 * @function @AuthHeaderLabel
 **/

export const AuthHeaderLabel: FC<IProps> = (props) => {
  return (
    <>
      <AuthHeaderLogo />
      <h6 className="font-medium text-center text-[16px]">{props.label}</h6>
    </>
  );
};
