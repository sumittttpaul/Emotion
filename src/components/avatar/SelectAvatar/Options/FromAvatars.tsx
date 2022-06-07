import React, { FC, useState } from 'react';
import { AnimalReducerState } from '../../../../redux/reducers/AnimalAvatarReducer';
import { useTypedSelector } from '../../../../redux/useTypeSelector';
import { Animal } from '../AvatarCollections/Animal';
import { AvatarCollections } from '../AvatarCollections/Collections/AvatarCollections';
import { Emoji } from '../AvatarCollections/Emoji';

interface IProps {
  show: () => void;
  getURL: (value: string) => void;
}

/**
 * @author
 * @function @FromAvatars
 **/

const FromAvatars: FC<IProps> = (props) => {
  const [ collection, setCollection] = useState<AnimalReducerState[]>();
  const { AnimalAvatar } = useTypedSelector((state) => state.AnimalAvatar);
  const { EmojiAvatar } = useTypedSelector((state) => state.EmojiAvatar);
  return (
    <div className="box-border scroll-smooth overflow-auto p-3 space-y-2 h-full w-full items-center flex flex-col">
      {/* <Animal
        AnimalAvatar={AnimalAvatar}
        forward={props.show}
        getURL={props.getURL}
      /> */}
      <AvatarCollections/>
      {/* <Emoji
        EmojiAvatar={EmojiAvatar}
        forward={props.show}
        getURL={props.getURL}
      /> */}
    </div>
  );
};

export default FromAvatars;
