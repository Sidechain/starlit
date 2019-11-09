import React, {Component} from 'react';
import {Text} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';
import CardFlip from 'react-native-card-flip';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../../constants/colors';

interface props {
  title: String;
  content: String;
  navigationData: Object;
}

class MeritCard extends Component<props> {
  render() {
    return (
      <CardFlip style={styles.flipCardHolder} ref={card => (this.card = card)}>
        <TouchableOpacity
          style={styles.cardFront}
          onPress={() => this.card.flip()}>
          <Text style={{fontFamily: 'monospace'}}>{this.props.title}</Text>
          <Icon style={styles.arrow} name="angle-right" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardBack}
          onPress={() => this.card.flip()}>
          <Text>{this.props.content}</Text>
          <Icon style={styles.arrow} name="angle-left" />
        </TouchableOpacity>
      </CardFlip>
    );
  }
}

const styles = StyleSheet.create({
  flipCardHolder: {
    width: 300,
    height: 100,
    marginVertical: 10,
  },
  cardFront: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.primary,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 12,
    // This is the bs code for ios, but who runs ios?!
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,
  },
  cardBack: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.light,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    elevation: 12,
  },
  arrow: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 10,
    fontSize: 24,
  },
});

export default MeritCard;