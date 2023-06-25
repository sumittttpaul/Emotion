import React, { FC, ReactNode, useState } from 'react';
import { useReduxSelector } from '../../../redux/useReduxSelector';
import { ContainerDark } from '../../container/ContainerDark';
import { SidePanel } from '../../sidepanel/SidePanel';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @HomeAndGalleryParentLayout
 **/

export const HomeAndGalleryParentLayout: FC<IProps> = (props) => {
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
