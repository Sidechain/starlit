import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import NameField from './src/components/NameField';
import HeritageField from './src/components/HeritageField';
import ParagonPrimalField from './src/components/ParagonPrimalField';
import SceneField from './src/components/SceneField';
import ArchetypeField from './src/components/ArchetypeField';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1, padding: 8, backgroundColor: '#ffffff'}}>
        <ScrollView>
          <Text>STARLIT CHARACTER CREATOR</Text>
          <NameField />
          <HeritageField />
          <ParagonPrimalField />
          <SceneField />
          <ArchetypeField />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
