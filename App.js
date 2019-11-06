import React from 'react';
import {AppContainer} from './src/utils/navigationRoutes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 'start'};
  }

  render() {
    return <AppContainer />;
  }
}
