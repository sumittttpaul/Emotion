import { AnyAction } from 'redux';

export interface IEmojiAvatarState {
  EmojiAvatar: EmojiReducerState[];
}

export interface EmojiReducerState {
  iconURL: string;
}

const initialState = {
  EmojiAvatar: [
    {
      iconURL: '/images/avatar/emoji/1.png',
    },
    {
        iconURL: '/images/avatar/emoji/2.png',
      },
      {
        iconURL: '/images/avatar/emoji/3.png',
      },
      {
        iconURL: '/images/avatar/emoji/4.png',
      },
      {
        iconURL: '/images/avatar/emoji/5.png',
      },
      {
        iconURL: '/images/avatar/emoji/6.png',
      },
      {
        iconURL: '/images/avatar/emoji/7.png',
      },
      {
        iconURL: '/images/avatar/emoji/8.png',
      },
      {
        iconURL: '/images/avatar/emoji/9.png',
      },
      {
        iconURL: '/images/avatar/emoji/10.png',
      },
      {
        iconURL: '/images/avatar/emoji/11.png',
      },
      {
        iconURL: '/images/avatar/emoji/12.png',
      },
      {
        iconURL: '/images/avatar/emoji/13.png',
      },
      {
        iconURL: '/images/avatar/emoji/14.png',
      },
      {
        iconURL: '/images/avatar/emoji/15.png',
      },
      {
        iconURL: '/images/avatar/emoji/16.png',
      },
      {
        iconURL: '/images/avatar/emoji/17.png',
      },
      {
        iconURL: '/images/avatar/emoji/18.png',
      },
      {
        iconURL: '/images/avatar/emoji/19.png',
      },
      {
        iconURL: '/images/avatar/emoji/20.png',
      },
      {
        iconURL: '/images/avatar/emoji/21.png',
      },
      {
        iconURL: '/images/avatar/emoji/22.png',
      },
      {
        iconURL: '/images/avatar/emoji/23.png',
      },
      {
        iconURL: '/images/avatar/emoji/24.png',
      },
      {
        iconURL: '/images/avatar/emoji/25.png',
      },
      {
        iconURL: '/images/avatar/emoji/26.png',
      },
      {
        iconURL: '/images/avatar/emoji/27.png',
      },
      {
        iconURL: '/images/avatar/emoji/28.png',
      },
      {
        iconURL: '/images/avatar/emoji/29.png',
      },
      {
        iconURL: '/images/avatar/emoji/30.png',
      },
      {
        iconURL: '/images/avatar/emoji/31.png',
      },
      {
        iconURL: '/images/avatar/emoji/32.png',
      },
      {
        iconURL: '/images/avatar/emoji/33.png',
      },
      {
        iconURL: '/images/avatar/emoji/34.png',
      },
      {
        iconURL: '/images/avatar/emoji/35.png',
      },
      {
        iconURL: '/images/avatar/emoji/36.png',
      },
  ],
};

const EmojiAvatarReducer = (
  state: IEmojiAvatarState = initialState,
  action: AnyAction
): IEmojiAvatarState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default EmojiAvatarReducer;
