import React, { FC, ReactNode } from 'react';
import { ColorState } from './state/ColorState';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @StateProvider
 **/

export const StateProvider: FC<IProps> = (props) => {
  return <ColorState>{props.children}</ColorState>;
};
