import React from 'react'
import { AppContainer } from './src/utils/navigationRoutes'
import { constants } from './src/constants/constants'

export default class App extends React.Component {
  raiseAgility = () => {}
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
