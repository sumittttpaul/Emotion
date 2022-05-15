import { AnyAction } from 'redux';

export interface IAvatarState {
  Avatar: AvatarReducerState;
}

export interface AvatarReducerState {
  myName: string;
}

const initialState: AvatarReducerState = {
  myName: 'Sumit Paul',
};

const AvatarReducer = (
  state: AvatarReducerState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AvatarReducer;
