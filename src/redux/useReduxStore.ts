import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './rootReducer';

export const useReduxStore: TypedUseSelectorHook<RootState> = useSelector;
