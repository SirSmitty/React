import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Firebase, { FirebaseContext } from './components/Firebase'

const root = ReactDOM.createRoot(document.getElementById('root'));

//ensure Firebase is only injected is only instantiated once and that it is injected via React's Context API to Reacts's components tree. 
root.render(

  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
