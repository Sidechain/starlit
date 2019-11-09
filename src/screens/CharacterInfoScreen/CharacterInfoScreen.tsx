import React, {useState} from 'react';
import {View, ScrollView, Button} from 'react-native';

import CharacterImage from '../../components/CharacterImage';
import NameField from '../../components/NameField';
import HeritageField from '../../components/HeritageField';
import ParagonPrimalField from '../../components/ParagonPrimalField';
import BackgroundField from '../../components/SceneField';
import ArchetypeField from '../../components/ArchetypeField';
import {constants} from '../../constants/constants';

interface Props {}

function CharacterInfoScreen(props: Props) {
  const [name, setName] = useState('');
  const [heritage, setHeritage] = useState('');
  const [paragon, setParagon] = useState('');
  const [background, setBackground] = useState('');
  const [archetype, setArchetype] = useState('');
  const [season, setSeason] = useState('');
  const [primal, setPrimal] = useState('');

  const info = {
    name: name,
    heritage: heritage,
    paragon: paragon,
    background: background,
    archetype: archetype,
    primal: primal,
    season: season
  }

  const navigateToAttribute = () => props.navigation.navigate('Attribute', {characterInfo: info})

  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View
        style={{
          flex: 1,
          margin: constants.screenPadding,
        }}>
        <View style={{alignSelf: 'center'}}>
          <CharacterImage />
        </View>
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
        <Button
          title="Submit and go to Attributes"
          onPress={navigateToAttribute}
        />
      </View>
    </ScrollView>
  );
}
export default CharacterInfoScreen;
