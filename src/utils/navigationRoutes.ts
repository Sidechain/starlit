import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import AttributeScreen from '../../src/screens/AttributeScreen';
import CharacterInfoScreen from '../../src/screens/CharacterInfoScreen';
import MeritScreen from '../../src/screens/MeritScreen';
import SkillScreen from '../../src/screens/SkillScreen';
import StartScreen from '../../src/screens/StartScreen';

const AppNavigator = createBottomTabNavigator(
  {
    Start: {
      screen: StartScreen,
    },
    Info: {
      screen: CharacterInfoScreen,
    },
    Attribute: {
      screen: AttributeScreen,
    },
    Skill: {
      screen: SkillScreen,
    },
    Merit: {
      screen: MeritScreen,
    },
  },
  {
    initialRouteName: 'Start',
  },
);

export const AppContainer = createAppContainer(AppNavigator);
