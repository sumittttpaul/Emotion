import { AnyAction } from 'redux';

export interface IWomensAvatarState {
  WomensAvatar: AvatarReducerState[];
}

export interface AvatarReducerState {
  iconURL: string;
}

const initialState = {
  WomensAvatar: [
    {
      iconURL: '/images/avatar/women/women-1.svg',
    },
    {
      iconURL: '/images/avatar/women/women-2.svg',
    },
    {
      iconURL: '/images/avatar/women/women-3.svg',
    },
    {
      iconURL: '/images/avatar/women/women-4.svg',
    },
    {
      iconURL: '/images/avatar/women/women-5.svg',
    },
    {
      iconURL: '/images/avatar/women/women-6.svg',
    },
    {
      iconURL: '/images/avatar/women/women-7.svg',
    },
    {
      iconURL: '/images/avatar/women/women-8.svg',
    },
    {
      iconURL: '/images/avatar/women/women-9.svg',
    },
    {
      iconURL: '/images/avatar/women/women-10.svg',
    },
    {
      iconURL: '/images/avatar/women/women-11.svg',
    },
    {
      iconURL: '/images/avatar/women/women-12.svg',
    },
    {
      iconURL: '/images/avatar/women/women-13.svg',
    },
    {
      iconURL: '/images/avatar/women/women-14.svg',
    },
    {
      iconURL: '/images/avatar/women/women-15.svg',
    },
    {
      iconURL: '/images/avatar/women/women-16.svg',
    },
    {
      iconURL: '/images/avatar/women/women-17.svg',
    },
    {
      iconURL: '/images/avatar/women/women-18.svg',
    },
    {
      iconURL: '/images/avatar/women/women-19.svg',
    },
    {
      iconURL: '/images/avatar/women/women-20.svg',
    },
    {
      iconURL: '/images/avatar/women/women-21.svg',
    },
    {
      iconURL: '/images/avatar/women/women-22.svg',
    },
  ],
};

const WomensAvatarReducer = (
  state: IWomensAvatarState = initialState,
  action: AnyAction
): IWomensAvatarState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default WomensAvatarReducer;
