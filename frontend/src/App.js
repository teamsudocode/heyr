import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./redux/configureStore";

import Main from "./components/Main";
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

export default App;
