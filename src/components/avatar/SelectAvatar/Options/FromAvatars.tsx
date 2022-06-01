import React, { FC } from 'react';
import ForWomen from '../AvatarCollections/ForWomen';
import ForMen from '../AvatarCollections/ForMen';
import { useTypedSelector } from '../../../../redux/useTypeSelector';

interface IProps {
  show: () => void
  getURL: (value:string) => void;
}

/**
 * @author
 * @function @FromAvatars
 **/

const FromAvatars: FC<IProps> = (props) => {
  const { WomensAvatar } = useTypedSelector((state) => state.WomensAvatar);
  const { MensAvatar } = useTypedSelector((state) => state.MensAvatar);
  return (
    <div className="box-border overflow-none p-6 space-y-8 h-full w-full items-center flex flex-col">
      <ForWomen WomensAvatar={WomensAvatar} forward={props.show} getURL={props.getURL}/>
      <ForMen MensAvatar={MensAvatar} forward={props.show} getURL={props.getURL}/>
    </div>
  );
};

export default FromAvatars;
