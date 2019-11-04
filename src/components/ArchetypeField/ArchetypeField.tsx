import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';

import { archetypes } from '../../utils/characterInfoData'

interface Props {
  setArchetype: any
}

const ArchetypeField = (props: Props) => {
  return <Dropdown label="Background Archetype" data={archetypes} onChangeText={props.setArchetype}/>;
};

export default ArchetypeField;
