import React, {useState} from 'react';
import {Dimensions, TouchableHighlight, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const CharacterImage = () => {
  const [avatar, setAvatar] = useState(require('../../assets/orcportrait.jpg'));

  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  return (
    <TouchableHighlight
      style={{
        borderRadius:
          Math.round(
            Dimensions.get('window').width + Dimensions.get('window').height,
          ) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        justifyContent: 'center',
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 5,
        alignItems: 'center',
        overflow: 'hidden',
      }}
      underlayColor="#ccc"
      onPress={() => {
        ImagePicker.launchImageLibrary(options, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = {uri: response.uri};

            setAvatar(source);
          }
        });
      }}>
      <Image
        style={{
          width: Dimensions.get('window').width * 0.5,
          height: Dimensions.get('window').width * 0.5,
        }}
        source={avatar}
      />
    </TouchableHighlight>
  );
};

export default CharacterImage;
