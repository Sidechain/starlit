import React, {useState} from 'react';
import {Text, Button, View} from 'react-native';
import {constants} from '../../constants/constants';

const max = 18;
const min = 3;

interface Props {
  navigationData: Object;
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
    conMod: constitution - 10,
    dexMod: dexterity - 10,
    intMod: intelligence - 10,
    perceptionMod: perception - 10,
    strengthMod: strength - 10,
    willMod: will - 10,
  };

  const derivedAttributes = {
    exertion:
      attributeModifiers.willMod + attributeModifiers.conMod >= 10
        ? Math.round(
            (attributeModifiers.willMod + attributeModifiers.conMod + 3) / 3,
          )
        : 1,
    ether: will,
    wounds: 15 + attributeModifiers.conMod,
    speed: speed,
    exertionRecovery:
      attributeModifiers.willMod + attributeModifiers.conMod >= 10
        ? Math.round(
            (attributeModifiers.willMod + attributeModifiers.conMod) / 3,
          )
        : 1,
    etherRecovery: will > 10 ? attributeModifiers.willMod : 1,
    woundRecovery: constitution > 10 ? attributeModifiers.conMod : 1,
  };

  const navigateToSkill = () => props.navigationData.navigate('Skill');

  return (
    <View
      style={{
        padding: constants.screenPadding,
        flex: 1,
        backgroundColor: 'black',
      }}>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <View>
            <Text
              style={{color: 'white', textAlign: 'right', fontWeight: 'bold'}}>
              ATTRIBUTE
            </Text>
            <Text style={{color: 'white', textAlign: 'right'}}>Agility:</Text>
            <Text style={{color: 'white', textAlign: 'right'}}>Charisma:</Text>
            <Text style={{color: 'white', textAlign: 'right'}}>
              Constitution:
            </Text>
            <Text style={{color: 'white', textAlign: 'right'}}>Dexterity:</Text>
            <Text style={{color: 'white', textAlign: 'right'}}>
              Intelligence:
            </Text>
            <Text style={{color: 'white', textAlign: 'right'}}>
              Perception:
            </Text>
            <Text style={{color: 'white', textAlign: 'right'}}>Strength:</Text>
            <Text style={{color: 'white', textAlign: 'right'}}>Will:</Text>
          </View>
          <View>
            <Text
              style={{color: 'white', textAlign: 'right', fontWeight: 'bold'}}>
              SCORE
            </Text>

            <Text style={{color: 'white', textAlign: 'center'}}>{agility}</Text>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {charisma}
            </Text>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {constitution}
            </Text>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {dexterity}
            </Text>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {intelligence}
            </Text>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {perception}
            </Text>
            <Text style={{color: 'white', textAlign: 'center'}}>
              {strength}
            </Text>
            <Text style={{color: 'white', textAlign: 'center'}}>{will}</Text>
          </View>
          <View>
            <Text
              style={{color: 'white', textAlign: 'right', fontWeight: 'bold'}}>
              MODIFIER
            </Text>

            <Text style={{color: 'gray'}}>
              Mod: {attributeModifiers.agilityMod}
            </Text>
            <Text style={{color: 'gray'}}>
              Mod: {attributeModifiers.charismaMod}
            </Text>
            <Text style={{color: 'gray'}}>
              Mod: {attributeModifiers.conMod}
            </Text>
            <Text style={{color: 'gray'}}>
              Mod: {attributeModifiers.dexMod}
            </Text>
            <Text style={{color: 'gray'}}>
              Mod: {attributeModifiers.intMod}
            </Text>
            <Text style={{color: 'gray'}}>
              Mod: {attributeModifiers.perceptionMod}
            </Text>
            <Text style={{color: 'gray'}}>
              Mod: {attributeModifiers.strengthMod}
            </Text>
            <Text style={{color: 'gray'}}>
              Mod: {attributeModifiers.willMod}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 50,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                Exertion: {derivedAttributes.exertion}
              </Text>
              <Text style={{color: 'gray', textAlign: 'center'}}>
                Exertion Recovery: {derivedAttributes.exertionRecovery}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                Ether: {derivedAttributes.ether}
              </Text>
              <Text style={{color: 'gray', textAlign: 'center'}}>
                Ether Recovery: {derivedAttributes.etherRecovery}{' '}
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                Wounds: {derivedAttributes.wounds}
              </Text>
              <Text style={{color: 'gray', textAlign: 'center'}}>
                Wound Recovery: {derivedAttributes.woundRecovery}
              </Text>
            </View>
            <View
              style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                Speed: {derivedAttributes.speed}
              </Text>
            </View>
          </View>
          <Button
            title="roll All"
            onPress={() => {
              setAgility(Math.floor(Math.random() * (max - min + 1) + min));
              setCharisma(Math.floor(Math.random() * (max - min + 1) + min));
              setConstitution(
                Math.floor(Math.random() * (max - min + 1) + min),
              );
              setDexterity(Math.floor(Math.random() * (max - min + 1) + min));
              setIntelligence(
                Math.floor(Math.random() * (max - min + 1) + min),
              );
              setPerception(Math.floor(Math.random() * (max - min + 1) + min));
              setStrength(Math.floor(Math.random() * (max - min + 1) + min));
              setWill(Math.floor(Math.random() * (max - min + 1) + min));
            }}
          />
        </View>
      </View>

      <Button title="Submit and go to Skills" onPress={navigateToSkill} />
    </View>
  );
};

export default AttributeField;
