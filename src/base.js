const config = {
  apiKey: "AIzaSyB9BSN58F1KojMqVcCMHocpDVdU47guF20",
  authDomain: "portfolio-thay.firebaseapp.com",
  databaseURL: "https://portfolio-thay.firebaseio.com",
  projectId: "portfolio-thay",
  storageBucket: "portfolio-thay.appspot.com",
  messagingSenderId: "501851486038"
};

const Rebase = require("re-base");
const firebase = require("firebase/app");

require("firebase/database");
require("firebase/storage");
require("firebase/auth");

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export const Storage = app.storage();
export const auth = firebase.auth();
export default base;
