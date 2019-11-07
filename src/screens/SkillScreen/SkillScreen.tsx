import React from 'react';
import {Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { skills } from '../../utils/skillScreenData'


interface Props {}

function SkillScreen(props: Props) {
  const navigateToMerits = () => props.navigation.navigate('Merit')

  return (
    <ScrollView style={{flex: 1, flexWrap: 'wrap'}}>
      <View>
        <View>
          <Text style={{fontSize: 16}}>Athletics Skills</Text>
          {skills
            .filter(skill => skill.group === 'athletic')
            .map(skillGroup => {

              return <Text>{skillGroup.name}</Text>;
            })}
        </View>
        <View>
          <Text style={{fontSize: 16}}>Combat Skills</Text>
          {skills
            .filter(skill => skill.group === 'combat')
            .map(skillGroup => {

              return <Text>{skillGroup.name}</Text>;
            })}
        </View>
        <View>
          <Text style={{fontSize: 16}}>Creative Skills</Text>
          {skills
            .filter(skill => skill.group === 'creative')
            .map(skillGroup => {
              return <Text>{skillGroup.name}</Text>;
            })}
        </View>
        <View>
          <Text style={{fontSize: 16}}>Knowledge Skills</Text>
          {skills
            .filter(skill => skill.group === 'knowledge')
            .map(skillGroup => {

              return <Text>{skillGroup.name}</Text>;
            })}
        </View>
        <View>
          <Text style={{fontSize: 16}}>Language Skills</Text>
          {skills
            .filter(skill => skill.group === 'language')
            .map(skillGroup => {

              return <Text>{skillGroup.name}</Text>;
            })}
        </View>
      </View>
      <View style={{marginLeft: 50}}>
        <View>
          <Text style={{fontSize: 16}}>Magic Skills</Text>
          {skills
            .filter(skill => skill.group === 'magic')
            .map(skillGroup => {

              return <Text>{skillGroup.name}</Text>;
            })}
        </View>
        <View>
          <Text style={{fontSize: 16}}>Magic Traditions</Text>
          {skills
            .filter(skill => skill.group === 'tradition')
            .map(skillGroup => {

              return <Text>{skillGroup.name}</Text>;
            })}
        </View>
        <View>
          <Text style={{fontSize: 16}}>Perceptive Skills</Text>
          {skills
            .filter(skill => skill.group === 'perceptive')
            .map(skillGroup => {

              return <Text>{skillGroup.name}</Text>;
            })}
        </View>
        <View>
          <Text style={{fontSize: 16}}>Social Skills</Text>
          {skills
            .filter(skill => skill.group === 'social')
            .map(skillGroup => {
              return <Text>{skillGroup.name}</Text>;
            })}
        </View>
        <View>
          <Text style={{fontSize: 16}}>Subterfuge Skills</Text>
          {skills
            .filter(skill => skill.group === 'subterfuge')
            .map(skillGroup => {

              return <Text>{skillGroup.name}</Text>;
            })}
        </View>
        <View>
          <Text style={{fontSize: 16}}>Wilderness skills</Text>
          {skills
            .filter(skill => skill.group === 'wilderness')
            .map(skillGroup => {

              return <Text>{skillGroup.name}</Text>;
            })}
        </View>
        <Button title="Submit and go to Merits" onPress={navigateToMerits} />
      </View>
    </ScrollView>
  );
}

export default SkillScreen;
