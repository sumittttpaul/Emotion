import { m } from 'framer-motion';
import React, { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  ClassName?: string;
}

/**
 * @author
 * @function @AuthTransitionContainer
 **/

export const AuthTransitionContainer: FC<IProps> = (props) => {
  return (
    <m.div
      className={`${props.ClassName} w-full relative`}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'tween' }}
    >
      {props.children}
    </m.div>
  );
};
