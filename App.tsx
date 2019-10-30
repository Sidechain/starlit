import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import StartScreen from './src/screens/StartScreen';
import BottomNavigation, {
  FullTab,
  ShiftingTab,
} from 'react-native-material-bottom-navigation';

const App: () => React$Node = () => {
  const tabs = [
    {
      key: 'start',
      label: 'Start',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'start',
    },
    {
      key: 'attribute',
      label: 'Attributes',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'attribute',
    },
    {
      key: 'info',
      label: 'Info',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'info',
    },
  ];

  const renderIcon = ({isActive}) => {
    return <View />;
  };

  const renderTab = ({tab, isActive}) => {
    return (
      <FullTab
        key={tab.key}
        isActive={isActive}
        label={tab.label}
        renderIcon={renderIcon}
      />
    );
  };

  return (
    <>
      <SafeAreaView style={{flex: 1, padding: 8, backgroundColor: '#ffffff'}}>
        <ScrollView>
          <Text>STARLIT CHARACTER CREATOR</Text>
          <StartScreen />
          <BottomNavigation renderTab={renderTab} tabs={tabs} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
