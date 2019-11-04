import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';

import { paragons, primals } from '../../utils/characterInfoData';
import { View } from 'react-native';

interface Props {
  setParagonPrimal: any
  heritage: string
}

const ParagonPrimalField = (props:Props) => {
  return (
  <View>
    {props.heritage === 'Orc' && <Dropdown label="Primal Year" data={primals} onChangeText={props.setParagonPrimal} />}
    {props.heritage !== 'Orc' && <Dropdown label="Paragon" data={paragons} onChangeText={props.setParagonPrimal} />}
  </View>
  );
};

export default ParagonPrimalField;
