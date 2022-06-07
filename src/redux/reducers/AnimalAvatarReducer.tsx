import { AnyAction } from 'redux';

export interface IAnimalAvatarState {
  AnimalAvatar: AnimalReducerState[];
}

export interface AnimalReducerState {
  iconURL: string;
}

const initialState = {
  AnimalAvatar: [
    {
      iconURL: '/images/avatar/animal/1.png',
    },
    {
      iconURL: '/images/avatar/animal/2.png',
    },
    {
      iconURL: '/images/avatar/animal/3.png',
    },
    {
      iconURL: '/images/avatar/animal/4.png',
    },
    {
      iconURL: '/images/avatar/animal/5.png',
    },
    {
      iconURL: '/images/avatar/animal/6.png',
    },
    {
      iconURL: '/images/avatar/animal/7.png',
    },
    {
      iconURL: '/images/avatar/animal/8.png',
    },
    {
      iconURL: '/images/avatar/animal/9.png',
    },
    {
      iconURL: '/images/avatar/animal/10.png',
    },
    {
      iconURL: '/images/avatar/animal/11.png',
    },
    {
      iconURL: '/images/avatar/animal/12.png',
    },
    {
      iconURL: '/images/avatar/animal/13.png',
    },
    {
      iconURL: '/images/avatar/animal/14.png',
    },
    {
      iconURL: '/images/avatar/animal/15.png',
    },
    {
      iconURL: '/images/avatar/animal/16.png',
    },
    {
      iconURL: '/images/avatar/animal/17.png',
    },
    {
      iconURL: '/images/avatar/animal/18.png',
    },
  ],
};

const AnimalAvatarReducer = (
  state: IAnimalAvatarState = initialState,
  action: AnyAction
): IAnimalAvatarState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AnimalAvatarReducer;
