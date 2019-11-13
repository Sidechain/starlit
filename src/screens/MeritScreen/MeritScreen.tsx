import React from 'react';
import MeritCard from '../../components/MeritCard';
import {View, ScrollView, Button} from 'react-native';
import {merits} from '../../utils/meritCardData';
import {colors} from '../../constants/colors';

interface Props {}

function MeritScreen(props: Props) {
  const characterInfo = props.navigation.getParam('characterInfo')
  const attributeData = props.navigation.getParam('attributeData')
  const navigateToSummary = () => props.navigation
    .navigate('Summary', {
        characterInfo: characterInfo,
        attributeData: attributeData, 
        skills: "No skills yet", 
        merits: "No merits yet"});

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.dark,
        }}>
        {merits.map((item, index) => {
          return <MeritCard title={item.title} content={item.content} navigationData={props.navigation}/>;
        })}
      </View>
      <Button title="Submit and go to Summary" onPress={navigateToSummary}/>
    </ScrollView>
  );
}

export default MeritScreen;
