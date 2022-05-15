import React, { FC } from 'react';
import ForWomen from '../Collections/ForWomen';
import ForMen from '../Collections/ForMen';
import { useSelector } from 'react-redux';
import { IAvatarState } from '../../../redux/reducers/AvatarReducer';

interface IProps {}

/**
 * @author
 * @function @FromAvatars
 **/

const FromAvatars: FC<IProps> = (props) => {
  const name = useSelector<IAvatarState>((state) => state.Avatar.myName);
  return (
    <div className="sm:h-[500px] box-border overflow-auto p-6 space-y-4 h-full w-full items-center flex flex-col">
      <ForWomen Name={`${name}`} />
      <ForMen />
    </div>
  );
};

export default FromAvatars;
