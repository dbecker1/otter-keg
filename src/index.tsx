import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import  'firebase/database'
import 'firebase/storage'
import {
    ReactReduxFirebaseProvider,
} from 'react-redux-firebase';
import { store } from "./state/OtterKegState"
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

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


// const store = createStore(
//     OtterKegReducer, 
//     initialOtterKegState,
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch
    // createFirestoreInstance // <- needed if using firestore
};

document.body.className = "bp3-dark";

console.log("help");

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
