import React, {useState} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationActions } from 'react-navigation';

import CharacterImage from '../../components/CharacterImage';
import NameField from '../../components/NameField';
import HeritageField from '../../components/HeritageField';
import ParagonPrimalField from '../../components/ParagonPrimalField';
import BackgroundField from '../../components/SceneField';
import ArchetypeField from '../../components/ArchetypeField';
import { Button } from 'native-base';

interface Props {}

function CharacterInfoScreen(props: Props) {
  const {} = props;
  const [name, setName] = useState('');
  const [heritage, setHeritage] = useState('');
  const [paragon, setParagon] = useState('');
  const [background, setBackground] = useState('');
  const [archetype, setArchetype] = useState('');
  const [season, setSeason] = useState('');
  const [primal, setPrimal] = useState('');

  const navigateToAttributes = () => NavigationActions.navigate({
      routeName: 'Attribute', 
      params: {},
      action: NavigationActions.navigate({ routeName: 'Attribute' })}
  )

  return (
    <ScrollView style={{flex: 1, alignSelf: 'center'}}>
      <Button onPress={props.navigation.dispatch(navigateToAttributes)}/>
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
