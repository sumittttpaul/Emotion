import React, { FC, ReactNode, useState } from 'react';
import { useReduxSelector } from '../../../redux/ReduxHooks';
import { ContainerDark } from '../../container/ContainerDark';
import { SidePanel } from '../../sidepanel/SidePanel';
import { SelectDevice } from '../../../redux/reducers/DeviceReducer';

interface IProps {
  children: ReactNode;
}

/**
 * @author
 * @function @HomeAndGalleryParentLayout
 **/

export const HomeAndGalleryParentLayout: FC<IProps> = (props) => {
  const [Active, setActive] = useState('Home');
  const { isMobile } = useReduxSelector(SelectDevice);

  if (isMobile) return <ContainerDark>{props.children}</ContainerDark>;

  return (
    <ContainerDark>
      <SidePanel Active={Active} setActive={setActive} />
      {props.children}
    </ContainerDark>
  );
};
