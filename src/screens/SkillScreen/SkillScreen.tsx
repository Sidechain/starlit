import React from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
import {skills} from '../../utils/skillScreenData';
import {constants} from '../../constants/constants';
import SkillAccordion from '../../components/SkillAccordion';

interface Props {}

function SkillScreen(props: Props) {
  const navigateToMerits = () => props.navigation.navigate('Merit');

  return (
    <ScrollView style={{flex: 1, margin: constants.screenPadding}}>
      <View>
        <View>
          <SkillAccordion title="Athletics" skillGroup={skills.filter(skill => skill.group === 'athletic')}/>
          <SkillAccordion title="Combat" skillGroup={skills.filter(skill => skill.group === 'combat')}/>
          <SkillAccordion title="Creative" skillGroup={skills.filter(skill => skill.group === 'creative')}/>
          <SkillAccordion title="Knowledge" skillGroup={skills.filter(skill => skill.group === 'knowledge')}/>
          <SkillAccordion title="Language" skillGroup={skills.filter(skill => skill.group === 'language')}/>
          <SkillAccordion title="Magic" skillGroup={skills.filter(skill => skill.group === 'magic')}/>
          <SkillAccordion title="Magic Traditions" skillGroup={skills.filter(skill => skill.group === 'tradition')}/>
          <SkillAccordion title="Perceptive Skills" skillGroup={skills.filter(skill => skill.group === 'perceptive')}/>
          <SkillAccordion title="Social" skillGroup={skills.filter(skill => skill.group === 'social')}/>
          <SkillAccordion title="Subterfuge" skillGroup={skills.filter(skill => skill.group === 'subterfuge')}/>
          <SkillAccordion title="Wilderness" skillGroup={skills.filter(skill => skill.group === 'wilderness')}/>
          {/* <Text style={{fontSize: 16}}>Athletics Skills</Text>
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
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
            })} */}
        </View>
        <Button title="Submit and go to Merits" onPress={navigateToMerits} />
      </View>
    </ScrollView>
  );
}

export default SkillScreen;
