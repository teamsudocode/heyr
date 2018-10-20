import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

import Main from "./components/Main";
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
