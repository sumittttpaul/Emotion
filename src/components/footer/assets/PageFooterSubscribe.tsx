import React, { FC } from 'react';
import { SubscribeButton } from '../../button/SubscribeButton';

interface IProps {}

/**
 * @author
 * @function @PageFooterSubscribe
 **/

export const PageFooterSubscribe: FC<IProps> = (props) => {
  return (
    <div className="overscroll-none">
      <SubscribeButton />
    </div>
  );
};
