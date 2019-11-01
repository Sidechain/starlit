import {createStackNavigator, createAppContainer} from 'react-navigation-stack';
import App from '../App';

const AppNavigator = createStackNavigator({
  App: App,
});

export default createAppContainer(AppNavigator);
