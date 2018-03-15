import * as React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './containers/App';
import Reader from './containers/Reader';
import './index.css';

const stateString = localStorage.getItem('redux-state');
let preloadedState;
if (stateString) {
  preloadedState = JSON.parse(stateString);
}

const store = createStore(rootReducer, preloadedState);
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('redux-state', JSON.stringify(state));
});

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exect={true} path="/" component={App} />
        <Route exect={true} path="/reader" component={Reader} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
