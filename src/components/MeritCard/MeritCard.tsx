import React, {Component} from 'react';
import {Text} from 'native-base';
import {TouchableOpacity, StyleSheet} from 'react-native';
import CardFlip from 'react-native-card-flip';

interface props {
  title: String;
  content: String;
}

class MeritCard extends Component<props> {
  render() {
    return (
      <CardFlip style={styles.flipCardHolder} ref={card => (this.card = card)}>
        <TouchableOpacity
          style={styles.cardFront}
          onPress={() => this.card.flip()}>
          <Text>{this.props.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardBack}
          onPress={() => this.card.flip()}>
          <Text>{this.props.content}</Text>
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
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBack: {
    flex: 1,
    padding: 10,
    backgroundColor: 'red',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default MeritCard;
