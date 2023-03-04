import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from './rootReducer';

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
