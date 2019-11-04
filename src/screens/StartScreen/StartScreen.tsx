import React from 'react';
import {Text, Image, View} from 'react-native';

interface Props {}

function StartScreen(props: Props) {
  const {} = props;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Image source={require('../../assets/starlitlogo.png')} />
    </View>
  );
}

export default StartScreen;
