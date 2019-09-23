import firebase from 'firebase';
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDzqdL1jQLjwLvZovF3rbve0RhXr2KWfbQ',
  authDomain: 'kamereo-test.firebaseapp.com',
  databaseURL: 'https://kamereo-test.firebaseio.com',
  projectId: 'kamereo-test',
  storageBucket: 'kamereo-test.appspot.com',
  messagingSenderId: '932323117620',
  appId: '1:932323117620:web:56291fa9ae3ef00f039861',
};
firebase.initializeApp(config);

export {
  firebase as default,
}