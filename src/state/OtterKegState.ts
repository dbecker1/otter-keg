import {combineReducers} from "redux";
import { firebaseReducer} from 'react-redux-firebase';

export const OtterKegReducer = combineReducers({
    firebase: firebaseReducer
    // firestore: firestoreReducer // <- needed if using firestore
});

export type OtterKegState = ReturnType<typeof OtterKegReducer>;

// (mbrickell) Would rather have an actual defined initial states
export const initialOtterKegState = {};