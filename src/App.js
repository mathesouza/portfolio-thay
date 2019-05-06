import React from "react";
import { Provider } from "react-redux";

import store from "./store/store";
import DefaultRouter from "./routers/DefaultRouter";

function App() {
  return (
    <Provider store={store}>
      <DefaultRouter />
    </Provider>
  );
}

export default App;
