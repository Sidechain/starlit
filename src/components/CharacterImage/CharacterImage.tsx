import React from 'react';
import {Dimensions, TouchableHighlight, Text, Image} from 'react-native';

const CharacterImage = () => {
  return (
    <TouchableHighlight
      style={{
        borderRadius:
          Math.round(
            Dimensions.get('window').width + Dimensions.get('window').height,
          ) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        backgroundColor: '#f00',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
      underlayColor="#ccc"
      onPress={() => alert('Yaay!')}>
      <Image
        style={{
          width: Dimensions.get('window').width * 0.5,
          height: Dimensions.get('window').width * 0.5,
        }}
        source={require('../../assets/orcportrait.jpg')}
      />
    </TouchableHighlight>
  );
};

export default CharacterImage;
