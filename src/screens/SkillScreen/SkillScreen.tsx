import React from 'react';
import {View, Button, ScrollView} from 'react-native';
import {skills} from '../../utils/skillScreenData';
import {constants} from '../../constants/constants';
import SkillAccordion from '../../components/SkillAccordion';

interface Props {}

function SkillScreen(props: Props) {
  const characterInfo = props.navigation.getParam('characterInfo');
  const attributeData = props.navigation.getParam('attributeData');
  const navigateToMerits = () => props.navigation.navigate('Merit', {characterInfo: characterInfo, attributeData: attributeData, skills: "No skills yet"});

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
        </View>
        <Button title="Submit and go to Merits" onPress={navigateToMerits} />
      </View>
    </ScrollView>
  );
}

export default SkillScreen;
