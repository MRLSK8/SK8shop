import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { ApplicationState, AppDispatch } from '~/store';

export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();