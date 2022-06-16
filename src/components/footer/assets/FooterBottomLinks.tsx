import { Link } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  label: string;
  to: string;
}

/**
 * @author
 * @function @FooterBottomLinks
 **/

export const FooterBottomLinks: FC<IProps> = (props) => {
  return (
    <Link
      href={props.to}
      underline="hover"
      className="text-[11.5px] pt-2 font-[300] whitespace-nowrap flex text-white opacity-80"
    >
      {props.label}
    </Link>
  );
};
