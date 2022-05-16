import React, { FC } from 'react';
import ForWomen from '../AvatarCollections/ForWomen';
import ForMen from '../AvatarCollections/ForMen';
import { useTypedSelector } from '../../../../redux/useTypeSelector';

interface IProps {
  name?: string;
}

/**
 * @author
 * @function @FromAvatars
 **/

const FromAvatars: FC<IProps> = (props) => {
  const { WomensAvatar } = useTypedSelector((state) => state.WomensAvatar);
  const { MensAvatar } = useTypedSelector((state) => state.MensAvatar);
  return (
    <div className="sm:h-[600px] box-border overflow-auto p-6 space-y-8 h-full w-full items-center flex flex-col">
      <ForWomen WomensAvatar={WomensAvatar} />
      <ForMen MensAvatar={MensAvatar}/>
    </div>
  );
};

export default FromAvatars;
