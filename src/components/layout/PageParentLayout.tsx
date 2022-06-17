import React, { FC, ReactNode } from 'react';
import { PageContainerDark } from '../container/PageContainerDark';
import { PageFooter } from '../footer/PageFooter/PageFooter';
import { PageHeader } from '../header/PageHeader/PageHeader';

interface IProps {
  children: ReactNode;
  setChildPage: (value: string) => void;
}

/**
 * @author
 * @function @PageParentLayout
 **/

export const PageParentLayout: FC<IProps> = (props) => {
  return (
    <PageContainerDark>
      <PageHeader setPage={props.setChildPage} />
      {props.children}
      <PageFooter setPage={props.setChildPage} />
    </PageContainerDark>
  );
};
