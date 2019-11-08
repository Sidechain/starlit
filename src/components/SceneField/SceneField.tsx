import React from 'react';
import {Dropdown} from 'react-native-material-dropdown';

import {backgroundScenes} from '../../utils/characterInfoData';

interface Props {
  setBackground: any;
}

const SceneField = (props: Props) => {
  return (
    <Dropdown
      label="Background Scene"
      data={backgroundScenes}
      onChangeText={props.setBackground}
      textColor="white"
      baseColor="gray"
      itemColor="gray"
      selectedItemColor="white"
      pickerStyle={{backgroundColor: 'black'}}
    />
  );
};

export default SceneField;
