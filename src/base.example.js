const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
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
