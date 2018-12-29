import {createStore, compose , applyMiddleware} from 'redux';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger'

const enhancerList = [];
const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === 'function') {
  enhancerList.push(devToolsExtension());
}

//const composedEnhancer = compose( applyMiddleware(logger), ...enhancerList);

const initStore = () => createStore(rootReducer, applyMiddleware(logger));

module.exports = {
  initStore
};