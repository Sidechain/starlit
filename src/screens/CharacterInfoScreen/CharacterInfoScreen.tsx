import React, {useState} from 'react';
import {View} from 'react-native';

import CharacterImage from '../../components/CharacterImage';
import NameField from '../../components/NameField';
import HeritageField from '../../components/HeritageField';
import ParagonPrimalField from '../../components/ParagonPrimalField';
import BackgroundField from '../../components/SceneField';
import ArchetypeField from '../../components/ArchetypeField';

interface Props {}

function CharacterInfoScreen(props: Props) {
  const {} = props;
  const [name, setName] = useState('');
  const [heritage, setHeritage] = useState('');
  const [paragonPrimal, setParagonPrimal] = useState('');
  const [background, setBackground] = useState('');
  const [archetype, setArchetype] = useState('');

  return (
    <View style={{flex: 1, alignSelf: 'center'}}>
      {console.log(
        `Name: ${name}, heritage: ${heritage}, paragon/primal: ${paragonPrimal}, background: ${background}, archetype: ${archetype}`,
      )}
      <CharacterImage />
      <NameField setName={setName} />
      <HeritageField setHeritage={setHeritage} />
      <ParagonPrimalField
        heritage={heritage}
        setParagonPrimal={setParagonPrimal}
      />
      <BackgroundField setBackground={setBackground} />
      <ArchetypeField setArchetype={setArchetype} />
    </View>
  );
}

export default CharacterInfoScreen;
