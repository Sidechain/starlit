import React from 'react';
import {Card, ListItem, Button, Avatar} from 'react-native-elements';
import {TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const merits = [
  {
    name: 'Acrobatic I-III',
    avatar: 'snowboarding',
    text: 'Add 1, 2, or 4 to your Acrobatics rolls.',
  },
  {
    name: 'Ally (II)',
    avatar: 'handshake',
    text: '',
  },
  {
    name: 'Ancient Bloodline',
    avatar: 'tint',
    text:
      'As a Mir of a bloodline of yore, you have a +2 bonus when socially interacting with tairethi or mir that knows of your heritage.',
  },
  {
    name: 'Animal Affinity',
    avatar: 'otter',
    text:
      'Animals are more positively inclined towards the character. Add +1 when socially interacting with animals.',
  },
  {
    name: 'Animal Companion I-III',
    avatar: 'dog',
    text: '',
  },
  {
    name: 'Artist I-III',
    avatar: 'broom',
    text:
      'Add 1, 2, or 4 to rolls of one creative skill of your choice. This merit may be taken more times, each time for a different skill',
  },
  {
    name: 'Artistic (II)',
    avatar: 'brush',
    text: 'Add +1 to all creative skill rolls.',
  },
  {
    name: 'Athletic I-III',
    avatar: 'volleyball-ball',
    text: 'Add 1, 2, or 4 to your Athletics rolls.',
  },
  {
    name: 'By Any Means Necessary I-IV',
    avatar: 'fist-raised',
    text:
      'Each instance of this merit allows a character to spend an extra exertion point per action.',
  },
  {
    name: 'Charismatic (II)',
    avatar: 'certificate',
    text: 'Add +1 to all social skill rolls.',
  },
  {
    name: 'Combatant (II)',
    avatar: 'chess',
    text: 'Add +1 to all combat skill rolls.',
  },
  {
    name: 'Contact',
    avatar: 'hands-helping',
    text: '',
  },
];

const MeritCard = () => {
  return (
    <ScrollView>
      {merits.map((u, i) => {
        return (
          <TouchableOpacity>
            <Card containerStyle={{padding: 0}}>
              <Icon name={u.avatar} size={20} />
              <ListItem key={i} title={u.name} />
            </Card>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default MeritCard;
