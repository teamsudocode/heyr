import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "./redux/configureStore";

import Home from "./components/Home";
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
);

export default App;
