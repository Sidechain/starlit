import React from 'react'
import {Text} from 'react-native'
import axios from 'axios'
import { View } from 'native-base';

interface Props {}

function SummaryScreen(props: Props) {
  const characterInfo = props.navigation.getParam('characterInfo');
  const attributeData = props.navigation.getParam('attributeData');
  const skills = props.navigation.getParam('skills');
  const merits = props.navigation.getParam('merits');

    const characterSummary = {
      characterInfo: characterInfo,
      attributes: attributeData,
      skills: skills,
      merits: merits,
    }
    return (
        <View>
          <Text>WOW, YOU KINDA MADE A CHARACTER! LOOK AT ALL THOSE STATS... Eeeerhm... Yeah...</Text>
        </View>
    )
}

export default SummaryScreen
