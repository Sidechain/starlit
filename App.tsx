import React from 'react';
import {Text, View} from 'react-native';
import BottomNavigation, {
  ShiftingTab,
} from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class App extends React.Component {
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
      key: 'mattribute',
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
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          {/* Your screen contents depending on current tab. */}
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
