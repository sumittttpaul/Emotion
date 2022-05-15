import React, { FC } from 'react';
import ForWomen from '../Collections/ForWomen';
import ForMen from '../Collections/ForMen';
import { useTypedSelector } from '../../../redux/useTypeSelector';

interface IProps {
  name?: string;
}

/**
 * @author
 * @function @FromAvatars
 **/

const FromAvatars: FC<IProps> = (props) => {
  const { Names } = useTypedSelector((state) => state.Avatar);
  return (
    <div className="sm:h-[500px] box-border overflow-auto p-6 space-y-4 h-full w-full items-center flex flex-col">
      <ForWomen Names={Names} />
      <ForMen />
    </div>
  );
};

export default FromAvatars;
