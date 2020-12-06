import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import  'firebase/database'
import 'firebase/storage'
import { createStore } from 'redux'
import {
    ReactReduxFirebaseProvider,
} from 'react-redux-firebase';
import {
    OtterKegReducer, initialOtterKegState
} from "./state/OtterKegState"

const firebaseConfig = {
    apiKey: "AIzaSyC5xINCCmZAtz4mgr5_1xSwn9C63y6maTw",
    authDomain: "otter-keg.firebaseapp.com",
    databaseURL: "https://otter-keg.firebaseio.com",
    projectId: "otter-keg",
    storageBucket: "otter-keg.appspot.com",
    messagingSenderId: "1034936297122",
    appId: "1:1034936297122:web:85c0461a584fa92fd699fb"
};

const rrfConfig = {
    userProfile: 'users'
}

firebase.initializeApp(firebaseConfig)


const store = createStore(OtterKegReducer, initialOtterKegState)

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
              <App />
          </ReactReduxFirebaseProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
