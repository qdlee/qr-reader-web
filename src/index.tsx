import * as React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
})

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
