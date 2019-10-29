import React from 'react';
import {Dropdown} from 'react-native-material-dropdown';

const HeritageField = () => {
  let raceData = [
    {
      value: 'Human',
    },
    {
      value: 'Mir (Elves)',
    },
    {
      value: 'Orc',
    },
  ];
  return <Dropdown label="Cultural Heritage" data={raceData} />;
};

export default HeritageField;
