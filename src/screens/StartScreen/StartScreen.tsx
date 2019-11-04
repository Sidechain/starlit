import React from 'react';
import { Image, View } from 'react-native';

interface Props {}

function StartScreen(props: Props) {
  const {} = props;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image source={require('../../assets/starlitlogo2.png')} />
    </View>
  );
}

export default StartScreen;
