import React, { FC, ReactNode, useState } from 'react';
import { useReduxSelector } from '../../redux/useReduxSelector';
import { ContainerDark } from '../container/ContainerDark';
import { SidePanel } from '../sidepanel/SidePanel';
import { Header } from '../header/Header';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @ParentLayout
 **/

export const ParentLayout: FC<IProps> = (props) => {
  const [Active, setActive] = useState('Home');
  const { isMobile } = useReduxSelector((state) => state.Device);

  if (isMobile) return <ContainerDark>{props.children}</ContainerDark>;

  return (
    <ContainerDark>
      <SidePanel Active={Active} setActive={setActive} />
      {props.children}
    </ContainerDark>
  );
};
