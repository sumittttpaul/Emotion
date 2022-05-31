import { Link } from '@mui/material';
import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @TermsAndCondition
 **/

export const TermsAndCondition: FC<IProps> = (props) => {
  return (
    <div className="flex items-center">
      <h6 className="ml-3 text-xs font-light text-[rgba(255,255,255,0.75)]">
        I have read and agree with&#160;
        <Link
          className="text-white text-xs"
          component="button"
          underline="always"
        >
          terms & conditions
        </Link>
      </h6>
    </div>
  );
};
