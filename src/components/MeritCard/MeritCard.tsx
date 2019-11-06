import React from 'react';
import {
  Container,
  Header,
  Content,
  Accordion,
  Text,
  View,
  CheckBox,
} from 'native-base';

import {TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const dataArray = [
  {
    title: 'Acrobatic I-III',
    avatar: 'snowboarding',
    content: 'Add 1, 2, or 4 to your Acrobatics rolls.',
  },
  {
    title: 'Ally (II)',
    avatar: 'handshake',
    content: '',
  },
  {
    title: 'Ancient Bloodline',
    avatar: 'tint',
    content:
      'As a Mir of a bloodline of yore, you have a +2 bonus when socially interacting with tairethi or mir that knows of your heritage.',
  },
  {
    title: 'Animal Affinity',
    avatar: 'otter',
    content:
      'Animals are more positively inclined towards the character. Add +1 when socially interacting with animals.',
  },
  {
    title: 'Animal Companion I-III',
    avatar: 'dog',
    content: '',
  },
  {
    title: 'Artist I-III',
    avatar: 'broom',
    content:
      'Add 1, 2, or 4 to rolls of one creative skill of your choice. This merit may be taken more times, each time for a different skill.',
  },
  {
    title: 'Artistic (II)',
    avatar: 'brush',
    content: 'Add +1 to all creative skill rolls.',
  },
  {
    title: 'Athletic I-III',
    avatar: 'volleyball-ball',
    content: 'Add 1, 2, or 4 to your Athletics rolls.',
  },
  {
    title: 'By Any Means Necessary I-IV',
    avatar: 'fist-raised',
    content:
      'Each instance of this merit allows a character to spend an extra exertion point per action.',
  },
  {
    title: 'Charismatic (II)',
    avatar: 'certificate',
    content: 'Add +1 to all social skill rolls.',
  },
  {
    title: 'Combatant (II)',
    avatar: 'chess',
    content: 'Add +1 to all combat skill rolls.',
  },
  {
    title: 'Contact',
    avatar: 'hands-helping',
    content: '',
  },
  {
    title: 'Coolheaded I-III',
    avatar: 'snowflake',
    content: 'Add 1, 2, or 4 to your Initiative rolls.',
  },
  {
    title: 'Great Exertion II-III',
    avatar: 'star-of-life',
    content:
      'Each instance adds +1 to the bonus granted when spending an exertion point.',
  },
  {
    title: 'Enchanted Item II or IV',
    avatar: 'magic',
    content:
      'The character has an enchanted item in its possession. The II instance of this merit grants the character a Civilian grade enchanted item, and the IV instance grants a Professional grade item. This item is created together with the GM.',
  },
  {
    title: 'Extraordinary Attribute I-IV',
    avatar: 'haykal',
    content:
      'Add 1, 2, 3, or 4 to an attribute. This merit may be taken more times, each time for a different attribute. Attributes may, however, never exceed 20.',
  },
  {
    title: 'Fame (I-III)',
    avatar: 'star',
    content: '',
  },
  {
    title: 'Fleet of Foot I-III',
    avatar: 'running',
    content: 'Add 1, 2, or 3 metres to your movement speed.',
  },
  {
    title: 'Intellectual (II)',
    avatar: 'university',
    content: 'Add +1 to all knowledge skill rolls.',
  },
  {
    title: 'Knowledgeable I-III',
    avatar: 'book-reader',
    content:
      'Add 1, 2, or 4 to rolls of one knowledge skill. This merit may be taken more times, each time for a different knowledge skill.',
  },
  {
    title: 'Linguist I-III',
    avatar: 'comments',
    content:
      'Add 1, 2, or 4 to one language skill. This merit may be taken more times, each time for a different language.',
  },
  {
    title: 'Occultist (II)',
    avatar: 'crow',
    content: 'Add +1 to all magic skill rolls, if they are developed.',
  },
  {
    title: 'Mentor (III)',
    avatar: 'glasses',
    content: '',
  },
  {
    title: 'Natural Immunity I-II',
    avatar: 'leaf',
    content:
      'Add 2 or 4 to the onset difficulty for disease and poison. (See the rules for Poison and Disease).',
  },
];

function _renderHeader(item: any, expanded: any) {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#A9DAD6',
      }}>
      <CheckBox />
      <Text style={{fontWeight: '600'}}> {item.title}</Text>
      {expanded ? (
        <Icon style={{fontSize: 18}} name="chevron-circle-up" />
      ) : (
        <Icon style={{fontSize: 18}} name="chevron-circle-down" />
      )}
    </View>
  );
}

function _renderContent(item: any) {
  return (
    <Text
      style={{
        backgroundColor: '#e3f1f1',
        padding: 10,
        fontStyle: 'italic',
      }}>
      {item.content}
    </Text>
  );
}

const MeritCard = (props:any) => {
  return (
    <ScrollView style={{flex: 1}}>
      <Container>
        <Content padder style={{backgroundColor: 'white'}}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
          />
        </Content>
      </Container>
    </ScrollView>
  );
};

export default MeritCard;
