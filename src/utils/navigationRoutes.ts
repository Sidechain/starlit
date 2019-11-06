import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer, createNavigationContainer} from 'react-navigation';
import AttributeScreen from '../../src/screens/AttributeScreen';
import CharacterInfoScreen from '../../src/screens/CharacterInfoScreen';
import MeritScreen from '../../src/screens/MeritScreen';
import SkillScreen from '../../src/screens/SkillScreen';
import StartScreen from '../../src/screens/StartScreen';
import CharacterCreationScreen from '../screens/CharacterCreationScreen';

const AppNavigator = createBottomTabNavigator(
  {
    Start: {
      screen: StartScreen,
    },
    Character: {
      screen: CharacterCreationScreen,
    }
  },
  {
    initialRouteName: 'Start',
  },
);

const CharacterCreationStack = createStackNavigator({
  Info: {
    screen: CharacterInfoScreen
  },
  Attribute: {
    screen: AttributeScreen
  },
  Skill: {
    screen: SkillScreen
  },
  Merit: {
    screen: MeritScreen
  },
  
});

export const CharacterCreationStackContainer = createAppContainer(CharacterCreationStack)
export const AppContainer = createAppContainer(AppNavigator);
