import React from 'react';
import {Text, Button, View} from 'react-native';

interface props {
  Agility: Number;
  Charisma: Number;
  Constitution: Number;
  Dexterity: Number;
  Intelligence: Number;
  Perception: Number;
  Strength: Number;
  Will: Number;
}
const attributeArray = [
  'Agility',
  'Charisma',
  'Constitution',
  'Dexterity',
  'Intelligence',
  'Perception',
  'Strength',
  'Will',
];

const AttributeField = (props: props) => {
  return (
    <>
      {attributeArray.map(attribute => {
        return (
          <View>
            <Text>{attribute}: </Text>
            <Button title={`Roll ${attribute}`} onPress={() => null} />
          </View>
        );
      })}
      {/* <Text>Agility: {attributes.Agility}</Text>
      <Button title="roll Agility" onPress={() => null} />

      <Text>Charisma: {attributes.Charisma}</Text>
      <Button title="roll Charisma" onPress={() => null} />

      <Text>Constitution: {attributes.Constitution}</Text>
      <Button title="roll Constitution" onPress={() => null} />

      <Text>Dexterity: {attributes.Dexterity}</Text>
      <Button title="roll Dexterity" onPress={() => null} />

      <Text>Intelligence: {attributes.Intelligence}</Text>
      <Button title="roll Intelligence" onPress={() => null} />

      <Text>Perception: {attributes.Perception}</Text>
      <Button title="roll Perception" onPress={() => null} />

      <Text>Strength: {attributes.Strength}</Text>
      <Button title="roll Strength" onPress={() => null} />

      <Text>Will: {attributes.Will}</Text>
      <Button title="roll Will" onPress={() => null} /> */}
    </>
  );
};

export default AttributeField;
