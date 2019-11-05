import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';

const max = 18;
const min = 3;

interface Props {
  
}

const AttributeField = (props: Props) => {
  const [agility, setAgility] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [perception, setPerception] = useState(0);
  const [strength, setStrength] = useState(0);
  const [will, setWill] = useState(0);

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
            (Math.floor(Math.random() * (max - min + 1) + min)),
          );
          setCharisma(
            (Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setConstitution(
            (Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setDexterity(
            (Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setIntelligence(
            (Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setPerception(
            (Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setStrength(
            (Math.floor(Math.random() * (max - min + 1) + min)),
          );

          setWill((Math.floor(Math.random() * (max - min + 1) + min)));
        }}
      />
    </View>
  );
};

export default AttributeField;
