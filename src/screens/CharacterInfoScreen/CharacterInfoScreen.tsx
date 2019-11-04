import React, { useState } from 'react';
import { Text, View } from 'react-native';

import NameField from '../../components/NameField';
import HeritageField from '../../components/HeritageField';
import ParagonPrimalField from '../../components/ParagonPrimalField';
import BackgroundField from '../../components/SceneField';
import ArchetypeField from '../../components/ArchetypeField';

interface Props {}

function CharacterInfoScreen(props: Props) {
  const {} = props;
  const [name, setName] = useState('')
  const [heritage, setHeritage] = useState('')
  const [paragonPrimal, setParagonPrimal] = useState('')
  const [background, setBackground] = useState('')
  const [archetype, setArchetype] = useState('')

  return (
    <View>
    {console.log(name)}
      <Text>WHO R U</Text>
      <NameField setName={setName}/>
      <HeritageField setHeritage={setHeritage}/>
      <ParagonPrimalField heritage={heritage} setParagonPrimal={setParagonPrimal}/>
      <BackgroundField/>
      <ArchetypeField/>
    </View>
  )
}

export default CharacterInfoScreen;
