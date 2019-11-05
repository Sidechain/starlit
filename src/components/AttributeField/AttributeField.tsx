import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';

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
        title="roll All"
        onPress={() => {
          setAgility(
            (agility = Math.floor(Math.random() * (max - min + 1) + min)),
          );
          setCharisma(
            (charisma = Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setConstitution(
            (constitution = Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setDexterity(
            (dexterity = Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setIntelligence(
            (intelligence = Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setPerception(
            (perception = Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setStrength(
            (strength = Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setWill((will = Math.floor(Math.random() * (max - min + 1) + min)));
        }}
      />
    </View>
  );
};

export default AttributeField;
