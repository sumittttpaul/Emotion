import React, { FC } from 'react';
import { AvatarCollections } from '../AvatarCollections/AvatarCollections';
import { IllustrationCollections } from '../AvatarCollections/IllustrationCollections';

interface IProps {
  show: () => void;
  ShowCollection: ()=> void;
  getURL: (value: string) => void;
  heading: (value: string) => void;
  avatarName: (value: string) => void;
}

/**
 * @author
 * @function @FromAvatars
 **/

const FromAvatars: FC<IProps> = (props) => {
  const AnimalClick = () => {
    props.heading('Animals');
    props.avatarName('Animal');
    props.ShowCollection();
  };
  const EmojiClick = () => {
    props.heading('Emojies');
    props.avatarName('Emoji');
    props.ShowCollection();
  };
  const FestivalClick = () => {
    props.heading('Festivals');
    props.avatarName('Festival');
    props.ShowCollection();
  };
  const HandDrwaingClick = () => {
    props.heading('Hand Drawings');
    props.avatarName('Handdrawing');
    props.ShowCollection();
  };
  const FlatClick = () => {
    props.heading('Flats');
    props.avatarName('Flat');
    props.ShowCollection();
  };
  const HipsterClick = () => {
    props.heading('Hipsters');
    props.avatarName('Hipster');
    props.ShowCollection();
  };
  const PaintClick = () => {
    props.heading('Paints');
    props.avatarName('Paint');
    props.ShowCollection();
  };
  const MinimalClick = () => {
    props.heading('Minimals');
    props.avatarName('Minimal');
    props.ShowCollection();
  };
  const PlainClick = () => {
    props.heading('Plains');
    props.avatarName('Plain');
    props.ShowCollection();
  };
  return (
    <div className="box-border scroll-smooth overflow-auto p-3 space-y-3 h-full w-full items-center flex flex-col">
      <AvatarCollections
        AnimalClick={AnimalClick}
        EmojiClick={EmojiClick}
        FestivalClick={FestivalClick}
        HandDrawingClick={HandDrwaingClick}
        FlatClick={FlatClick}
        HispterClick={HipsterClick}
        PaintClick={PaintClick}
        MinimalClick={MinimalClick}
        PlainClick={PlainClick}
      />
      <IllustrationCollections />
    </div>
  );
};

export default FromAvatars;
