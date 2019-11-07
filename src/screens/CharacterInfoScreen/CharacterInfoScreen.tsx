import React, {useState, Component} from 'react';
import {View, TouchableOpacity, ScrollView, Text, Button} from 'react-native';
import { NavigationActions } from 'react-navigation';

import CharacterImage from '../../components/CharacterImage';
import NameField from '../../components/NameField';
import HeritageField from '../../components/HeritageField';
import ParagonPrimalField from '../../components/ParagonPrimalField';
import BackgroundField from '../../components/SceneField';
import ArchetypeField from '../../components/ArchetypeField';

interface Props {}

function CharacterInfoScreen(props: Props) {
  const [name, setName] = useState('');
  const [heritage, setHeritage] = useState('');
  const [paragon, setParagon] = useState('');
  const [background, setBackground] = useState('');
  const [archetype, setArchetype] = useState('');
  const [season, setSeason] = useState('');
  const [primal, setPrimal] = useState('');

  const navigateToAttribute = () => props.navigation.navigate('Attribute')

  return (
    <ScrollView style={{flex: 1, alignSelf: 'center'}}>
      <Button title="Submit" onPress={navigateToAttribute}/>
      <CharacterImage />
      <NameField setName={setName} />
      <HeritageField setHeritage={setHeritage} />
      <ParagonPrimalField
        heritage={heritage}
        setParagon={setParagon}
        setPrimal={setPrimal}
        setSeason={setSeason}
      />
      <BackgroundField setBackground={setBackground} />
      <ArchetypeField setArchetype={setArchetype} />
    </ScrollView>
  );
}
export default CharacterInfoScreen;