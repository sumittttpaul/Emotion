import { AnyAction } from 'redux';

export interface IAvatarState {
  Names: AvatarReducerState[];
}

export interface AvatarReducerState {
  fullName: string;
}

const initialState = {
  Names: [
    {
      fullName: 'sumit paul',
    },
  ],
};

const AvatarReducer = (
  state: IAvatarState = initialState,
  action: AnyAction
): IAvatarState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AvatarReducer;
