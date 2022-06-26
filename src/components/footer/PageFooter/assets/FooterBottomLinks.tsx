import { Link } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  label: string;
  to: string;
  className?: string;
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
      className={`${
        props.className
      } ${'text-[11.5px] font-[300] underline-offset-2 whitespace-nowrap flex text-white opacity-80'}`}
    >
      {props.label}
    </Link>
  );
};
