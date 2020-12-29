import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { firebaseReducer} from 'react-redux-firebase';
import { ActiveKegsSlice } from './ActiveKegsSlice';

export const OtterKegReducer = combineReducers({
    firebase: firebaseReducer,
    activeKegs: ActiveKegsSlice.reducer
});

export const store = configureStore({
    reducer: OtterKegReducer,
    
  })

export type OtterKegState = ReturnType<typeof OtterKegReducer>;
export type OtterKegDispatch = typeof store.dispatch
export const useOtterKegDispatch = () => useDispatch<OtterKegDispatch>()

// (mbrickell) Would rather have an actual defined initial states
// (dbecker) we all want things in life madeleine 
export const initialOtterKegState = {};