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
    agilityMod: agility - 10,
    charismaMod: charisma - 10,
    conMod: constitution- 10,
    dexMod: dexterity - 10,
    intMod: intelligence - 10,
    perceptionMod: perception - 10,
    strengthMod: strength - 10,
    willMod: will - 10
  }
  
  const derivedAttributes = {
    exertion: attributeModifiers.willMod + attributeModifiers.conMod >= 10 ? Math.round((attributeModifiers.willMod + attributeModifiers.conMod + 3)/3) : 1,
    ether: will,
    wounds: 15 + attributeModifiers.conMod,
    speed: speed,
    exertionRecovery: attributeModifiers.willMod + attributeModifiers.conMod >= 10 ? Math.round((attributeModifiers.willMod + attributeModifiers.conMod)/3) : 1,
    etherRecovery: will > 10 ? attributeModifiers.willMod : 1,
    woundRecovery: constitution > 10 ? attributeModifiers.conMod : 1
  }
  
  return (
    <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>
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
            <View>
              <Text>Agility Mod: {attributeModifiers.agilityMod}</Text>
              <Text>Charisma Mod: {attributeModifiers.charismaMod}</Text>
              <Text>Constitution Mod: {attributeModifiers.conMod}</Text>
              <Text>Dexterity Mod: {attributeModifiers.dexMod}</Text>
              <Text>Intelligence Mod: {attributeModifiers.intMod}</Text>
              <Text>Perception Mod: {attributeModifiers.perceptionMod}</Text>
              <Text>Strength Mod: {attributeModifiers.strengthMod}</Text>
              <Text>Will Mod: {attributeModifiers.willMod}</Text>
            </View>

          </View>
          <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginBottom: 50}}>
            <View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Exertion: {derivedAttributes.exertion}</Text>
                <Text>Ether: {derivedAttributes.ether}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Wounds: {derivedAttributes.wounds}</Text>
                <Text>Speed: {derivedAttributes.speed}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>Ether Recovery: {derivedAttributes.etherRecovery}      </Text>
                <Text>Exertion Recovery: {derivedAttributes.exertionRecovery}</Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                <Text>Wound Recovery: {derivedAttributes.woundRecovery}</Text>  
              </View>
            </View>
        </View>
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

     
    </View>
  );
};

export default AttributeField;
