import React, {useState, useEffect} from 'react';
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
// const attributesObject = [
//   {Agility: 0},
//   {Charisma: 0},
//   {Constitution: 0},
//   {Dexterity: 0},
//   {Intelligence: 0},
//   {Perception: 0},
//   {Strength: 0},
//   {Will: 0},
// ];

const max = 18;
const min = 3;

const AttributeField = (props: props) => {
  let [agility, setAgility] = useState(0);
  let [charisma, setCharisma] = useState(0);
  let [constitution, setConstitution] = useState(0);
  let [dexterity, setDexterity] = useState(0);
  let [intelligence, setIntelligence] = useState(0);
  let [perception, setPerception] = useState(0);
  let [strength, setStrength] = useState(0);
  let [will, setWill] = useState(0);

  return (
    <View>
      <Text>Agility: {agility}</Text>
      <Text>Charisma: {charisma}</Text>
      <Text>Constitution: {constitution}</Text>
      <Text>Dexterity: {dexterity}</Text>
      <Text>Intelligence: {intelligence}</Text>
      <Text>Perception: {perception}</Text>
      <Text>Strength: {strength}</Text>
      <Text>Will: {will}</Text>

      <Button
        title="roll Agility"
        onPress={() => {
          setAgility(
            (agility = Math.floor(Math.random() * (max - min + 1) + min)),
          );
        }}
      />

      <Button
        title="roll Charisma"
        onPress={() => {
          setCharisma(
            (charisma = Math.floor(Math.random() * (max - min + 1) + min)),
          );
        }}
      />

      <Button
        title="roll Constitution"
        onPress={() => {
          setConstitution(
            (constitution = Math.floor(Math.random() * (max - min + 1) + min)),
          );
        }}
      />

      <Button
        title="roll Dexterity"
        onPress={() => {
          setDexterity(
            (dexterity = Math.floor(Math.random() * (max - min + 1) + min)),
          );
        }}
      />

      <Button
        title="roll Intelligence"
        onPress={() => {
          setIntelligence(
            (intelligence = Math.floor(Math.random() * (max - min + 1) + min)),
          );
        }}
      />

      <Button
        title="roll Perception"
        onPress={() => {
          setPerception(
            (perception = Math.floor(Math.random() * (max - min + 1) + min)),
          );
        }}
      />

      <Button
        title="roll Strength"
        onPress={() => {
          setStrength(
            (strength = Math.floor(Math.random() * (max - min + 1) + min)),
          );
        }}
      />

      <Button
        title="roll Will"
        onPress={() => {
          setWill((will = Math.floor(Math.random() * (max - min + 1) + min)));
        }}
      />

      {/* {attributesObject.map(e => {
        let name = Object.keys(e);
        let value = Object.values(e);
        return (
          <>
            <Text>
              {Object.keys(e)} {Object.values(e)}
            </Text>
            <Button
              title={`increase ${Object.keys(e)}`}
              onPress={() => {
                console.log('this is the name ', ...name);
                console.log('this is the value ', ...value);
              }}
            />
          </>
        );
      })} */}
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
