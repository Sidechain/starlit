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
const attributesObject = [
  {Agility: 0},
  {Charisma: 0},
  {Constitution: 0},
  {Dexterity: 0},
  {Intelligence: 0},
  {Perception: 0},
  {Strength: 0},
  {Will: 0},
];

// const drawItems = () => {};

const AttributeField = (props: props) => {
  return (
    <View>
      {attributesObject.map(e => {
        return (
          <>
            <Text>
              {Object.keys(e)} {Object.values(e)}
            </Text>
            <Button title={`increase ${Object.keys(e)}`} onPress={() => null} />
          </>
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
    </View>
  );
};

export default AttributeField;
