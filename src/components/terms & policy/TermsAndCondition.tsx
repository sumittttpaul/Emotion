import { Link } from '@mui/material';
import React, { FC } from 'react';
import { Terms_Conditions_Link } from '../../routerLinks/RouterLinks';

interface IProps {}

/**
 * @author
 * @function @TermsAndCondition
 **/

export const TermsAndCondition: FC<IProps> = (props) => {
  return (
    <div className="flex items-center">
      <h6 className="ml-3 text-xs font-light text-[#ffffffbf]">
        I have read and agree with&#160;
        <Link
          className="text-white underline-offset-2 text-xs"
          component="button"
          underline="always"
          href={Terms_Conditions_Link}
        >
          terms & conditions
        </Link>
      </h6>
    </div>
  );
};
