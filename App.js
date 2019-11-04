import React from 'react';
import {View} from 'react-native';
import BottomNavigation, {
  ShiftingTab,
} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AttributeScreen from './src/screens/AttributeScreen';
import CharacterInfoScreen from './src/screens/CharacterInfoScreen';
import EquipmentScreen from './src/screens/EquipmentScreen';
import MeritScreen from './src/screens/MeritScreen';
import SkillScreen from './src/screens/SkillScreen';
import StartScreen from './src/screens/StartScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 'start'};
  }

  tabs = [
    {
      key: 'start',
      icon: 'home',
      label: 'Start',
      barColor: '#5800DC',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'info',
      icon: 'info',
      label: 'Character Info',
      barColor: '#84dc00',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'attribute',
      icon: 'book',
      label: 'Attributes',
      barColor: '#c600dc',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'merit',
      icon: 'medal',
      label: 'Merits',
      barColor: '#dc0084',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
    {
      key: 'skill',
      icon: 'hand-rock',
      label: 'Skills',
      barColor: '#dc5800',
      pressColor: 'rgba(255, 255, 255, 0.16)',
    },
  ];

  renderIcon = icon => ({isActive}) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({tab, isActive}) => (
    <ShiftingTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  render() {
    let activeTab  = this.state.activeTab 
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          {activeTab === 'start' && <StartScreen/>}
          {activeTab === 'attribute' && <AttributeScreen />}
          {activeTab == 'info' && <CharacterInfoScreen/>}
          {activeTab == 'equipment' && <EquipmentScreen />}
          {activeTab == 'merit' && <MeritScreen />}
          {activeTab == 'skill' && <SkillScreen />}
        </View>
        <BottomNavigation
          onTabPress={newTab => this.setState({activeTab: newTab.key})}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  }
}
