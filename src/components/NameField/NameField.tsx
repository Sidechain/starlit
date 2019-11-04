import React from 'react';
import {TextField} from 'react-native-material-textfield';

interface Props {
  setName: any
}

const NameField = (props:Props) => {
  return (
    <TextField label="Character Name" placeholder="Your character's name" onChangeText={props.setName}/>
  );
};

export default NameField;
