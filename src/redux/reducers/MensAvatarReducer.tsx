import { AnyAction } from 'redux';

export interface IMensAvatarState {
  MensAvatar: AvatarReducerState[];
}

export interface AvatarReducerState {
  iconURL: string;
}

const initialState = {
  MensAvatar: [
    {
      iconURL: '/images/avatar/men/men-1.svg',
    },
    {
      iconURL: '/images/avatar/men/men-2.svg',
    },
    {
      iconURL: '/images/avatar/men/men-3.svg',
    },
    {
      iconURL: '/images/avatar/men/men-4.svg',
    },
    {
      iconURL: '/images/avatar/men/men-5.svg',
    },
    {
      iconURL: '/images/avatar/men/men-6.svg',
    },
    {
      iconURL: '/images/avatar/men/men-7.svg',
    },
    {
      iconURL: '/images/avatar/men/men-8.svg',
    },
    {
      iconURL: '/images/avatar/men/men-9.svg',
    },
    {
      iconURL: '/images/avatar/men/men-10.svg',
    },
    {
      iconURL: '/images/avatar/men/men-11.svg',
    },
    {
      iconURL: '/images/avatar/men/men-12.svg',
    },
    {
      iconURL: '/images/avatar/men/men-13.svg',
    },
    {
      iconURL: '/images/avatar/men/men-14.svg',
    },
  ],
};

const MensAvatarReducer = (
  state: IMensAvatarState = initialState,
  action: AnyAction
): IMensAvatarState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default MensAvatarReducer;
