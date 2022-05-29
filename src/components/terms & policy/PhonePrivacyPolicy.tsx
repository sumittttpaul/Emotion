import { Link } from '@mui/material';
import React, { FC } from 'react';

interface IProps {}

/**
 * @author
 * @function @PhonePrivacyPolicy
 **/

export const PhonePrivacyPolicy: FC<IProps> = (props) => {
  return (
    <div className="flex items-center">
      <h6 className="ml-3 text-xs font-light text-[rgba(255,255,255,0.75)]">
        I agree with&#160;
        <Link
          className="text-white text-xs"
          component="button"
          underline="always"
        >
          privacy policy
        </Link>
      </h6>
    </div>
  );
};
