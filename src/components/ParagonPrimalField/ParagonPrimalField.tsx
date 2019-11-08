import React from 'react';
import {Dropdown} from 'react-native-material-dropdown';

import {paragons, primals, seasons} from '../../utils/characterInfoData';
import {View} from 'react-native';

interface Props {
  setSeason: any;
  setParagon: any;
  setPrimal: any;
  heritage: string;
}

const ParagonPrimalField = (props: Props) => {
  return (
    <View>
      {props.heritage === 'Orc' && (
        <>
          {props.setParagon('')}
          <Dropdown
            label="Primal Year"
            data={primals}
            onChangeText={props.setPrimal}
            textColor="white"
            baseColor="gray"
            itemColor="gray"
            selectedItemColor="white"
            pickerStyle={{backgroundColor: 'black'}}
          />
          <Dropdown
            label="Season"
            data={seasons}
            onChangeText={props.setSeason}
            textColor="white"
            baseColor="gray"
            itemColor="gray"
            selectedItemColor="white"
            pickerStyle={{backgroundColor: 'black'}}
          />
        </>
      )}
      {props.heritage !== 'Orc' && (
        <>
          {props.setSeason('')}
          {props.setPrimal('')}
          <Dropdown
            label="Paragon"
            data={paragons}
            onChangeText={props.setParagon}
            textColor="white"
            baseColor="gray"
            itemColor="gray"
            selectedItemColor="white"
            pickerStyle={{backgroundColor: 'black'}}
          />
        </>
      )}
    </View>
  );
};

export default ParagonPrimalField;
