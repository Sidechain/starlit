import React from 'react';
import {Dropdown} from 'react-native-material-dropdown';

const ArchetypeField = () => {
  let archetypeData = [
    {
      value: 'Craftsman',
    },
    {
      value: 'Entertainer',
    },
    {
      value: 'Mage',
    },
    {
      value: 'Scholar',
    },
    {
      value: 'Scoundrel',
    },
    {
      value: 'Scout',
    },
    {
      value: 'Soldier',
    },
  ];
  return <Dropdown label="Background Archetype" data={archetypeData} />;
};

export default ArchetypeField;
