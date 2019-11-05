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
  
  const speed = 10;

  const attributeModifiers = {
    agilityMod: agility > 10 ? agility - 10 : 10 - (agility + 10),
    charismaMod: charisma > 10 ? charisma - 10 : 10 - (charisma + 10),
    conMod: constitution > 10 ? constitution- 10 : 10 - (constitution + 10),
    dexMod: dexterity > 10 ? dexterity - 10 : 10 - (dexterity + 10),
    intMod: intelligence > 10 ? intelligence - 10 : 10 - (intelligence + 10),
    perceptionMod: perception > 10 ? perception - 10 : 10 - (perception + 10),
    strengthMod: strength > 10 ? strength - 10 : 10 - (strength - 10),
    willMod: will > 10 ? will - 10 : 10 - (will - 10),
  }
  
  const derivedAttributes = {
    exertion: Math.round((attributeModifiers.willMod+attributeModifiers.conMod+3)/3),
    ether: will,
    wounds: 15 + attributeModifiers.conMod,
    speed: speed,
    exertionRecovery: Math.round((attributeModifiers.willMod + attributeModifiers.conMod)/2),
    etherRecovery: will > 10 ? attributeModifiers.willMod : 0,
    woundRecovery: constitution > 10 ? attributeModifiers.conMod : 1
  }
  
  return (
    <View>
      <View>
        <Text>Agility: {agility}</Text>
        <Text>Charisma: {charisma}</Text>
        <Text>Constitution: {constitution}</Text>
        <Text>Dexterity: {dexterity}</Text>
        <Text>Intelligence: {intelligence}</Text>
        <Text>Perception: {perception}</Text>
        <Text>Strength: {strength}</Text>
        <Text>Will: {will}</Text>

      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text>Agility Mod: {agility}</Text>
        <Text>Charisma Mod: {charisma}</Text>
        <Text>Constitution Mod: {constitution}</Text>
        <Text>Dexterity Mod: {dexterity}</Text>
        <Text>Intelligence Mod: {intelligence}</Text>
        <Text>Perception Mod: {perception}</Text>
        <Text>Strength Mod: {strength}</Text>
        <Text>Will Mod: {will}</Text>

      </View>

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

      <View>
        <Text>Exertion: {derivedAttributes.exertion}</Text>
        <Text>Ether: {derivedAttributes.ether}</Text>
        <Text>Wounds: {derivedAttributes.wounds}</Text>
        <Text>Speed: {derivedAttributes.speed}</Text>
        <Text>Ether Recovery {derivedAttributes.etherRecovery}</Text>
        <Text>Exertion Recovery: {derivedAttributes.exertionRecovery}</Text>
        <Text>Wound Recovery: {derivedAttributes.woundRecovery}</Text>
      </View>
    </View>
  );
};

export default AttributeField;
