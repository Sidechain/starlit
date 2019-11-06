import React from 'react';
import {AppContainer} from './src/utils/navigationRoutes';
import {Provider} from 'react-redux';
import store from './src/redux/reducers/index';

export default class App extends React.Component {
  raiseAgility = () => {};
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
