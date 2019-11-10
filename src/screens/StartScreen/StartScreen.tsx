import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import ScrollingBackground from 'react-native-scrolling-images';

interface Props {}

function StartScreen(props: Props) {
  const {} = props;

  return (
    <View style={styles.container}>
      <ScrollingBackground
        style={styles.scrollingBackground}
        speed={130}
        direction={'left'}
        images={[
          require('../../assets/starsky.jpg'),
          require('../../assets/starsky.jpg'),
        ]}
      />
      <Image
        source={require('../../assets/starlitlogo2.png')}
        style={{position: 'absolute'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  scrollingBackground: {
    backgroundColor: '#0B7483',
  },
});

export default StartScreen;
