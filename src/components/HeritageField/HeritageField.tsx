import React from 'react';
import {Dropdown} from 'react-native-material-dropdown';

interface Props {
  setHeritage: any;
}

const HeritageField = (props: Props) => {
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
  return (
    <Dropdown
      label="Cultural Heritage"
      data={raceData}
      onChangeText={props.setHeritage}
      textColor="white"
      baseColor="gray"
      itemColor="gray"
      selectedItemColor="white"
      pickerStyle={{backgroundColor: 'black'}}
    />
  );
};

export default HeritageField;
