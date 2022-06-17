import React, { FC, ReactNode } from 'react';
import { PageContainerDark } from '../container/PageContainerDark';
import { PageFooter } from '../footer/PageFooter/PageFooter';
import { PageHeader } from '../header/PageHeader/PageHeader';

interface IProps {
  children: ReactNode;
  setPage: (value: string) => void;
}

/**
 * @author
 * @function @PageParentLayout
 **/

export const PageParentLayout: FC<IProps> = (props) => {
  return (
    <PageContainerDark>
      <PageHeader setPage={props.setPage} />
      {props.children}
      <PageFooter setPage={props.setPage} />
    </PageContainerDark>
  );
};
