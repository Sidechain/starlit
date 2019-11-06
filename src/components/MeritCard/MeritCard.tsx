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
  {
    title: 'Paragon Blessing',
    avatar: 'snowboarding',
    content:
      'You are blessed by the stars. You gain a power thematically appropriate to your birth sign. This power is created together with the GM using the toolbox in the magic section. The character spends Ether and uses 2d10+Will-mod to activate the power. If the character has the Channel Power skill, it may add its skill to the roll.',
  },
  {
    title: 'Perceptive I-III',
    avatar: 'handshake',
    content: 'Add 1, 2, or 4 to either Perception rolls.',
  },
  {
    title: 'Quick Healer',
    avatar: 'tint',
    content:
      'Consider your Con-mod 3 points higher for the purposes of regaining wounds.',
  },
  {
    title: 'Quick Recovery',
    avatar: 'otter',
    content:
      'Consider your Con-mod and Will-mod 3 points higher for the purposes of calculating Exertion recovery.',
  },
  {
    title: 'Read/Write',
    avatar: 'dog',
    content:
      'You know how to read and write in one of the languages you know. Your language skill, however, still limits your ability to express yourself in text. This merit may be taken more times, each time for a different language skill.',
  },
  {
    title: 'Rich (II)',
    avatar: 'broom',
    content:
      'You start with 5 marks. Your house or business may provide you with monetary support. The amount provided depends on the success of a skill-roll (which skill is to be used is to be discussed with the GM).',
  },
  {
    title: 'Savant II or IV',
    avatar: 'brush',
    content:
      'The character is either an extremely talented or driven person, or has had more opportunity to learn due to circumstances or age. The character may purchase ranks in a skill (II) or a skill group (IV) beyond the standard 8 at character creation. This merit may be taken more times, each time for a different skill or skill group.',
  },
  {
    title: 'Skill Specialisation I-III',
    avatar: 'volleyball-ball',
    content:
      'Add 1, 2, or 5 to skill-rolls when doing what you are specialised in. Some examples of specialisation are: Hide (Stealth), Sneak (Stealth), Jump (Athletics), Climb (Athletics)…',
  },
  {
    title: 'Skulk (II)',
    avatar: 'fist-raised',
    content: 'Add +1 to all subterfuge skill rolls.',
  },
  {
    title: 'Status (I-III)',
    avatar: 'certificate',
    content: 'Add +1 to all social skill rolls.',
  },
  {
    title: 'Stealthy I-III',
    avatar: 'chess',
    content: 'Add 1, 2, or 4 to your Stealth rolls.',
  },
  {
    title: 'Strong-willed I-III',
    avatar: 'hands-helping',
    content:
      'The character is particularly strong willed and may add 1, 2, or 4 to rolls to resist mind-affecting magic or possession (this also affects the resistance rolls caused by the flaw Spirit Haunt).',
  },
  {
    title: 'Survivalist (II)',
    avatar: 'snowflake',
    content: 'Add +1 to all survival skill rolls.',
  },
  {
    title: 'Tireless I-III',
    avatar: 'star-of-life',
    content:
      'Add 2 to the character’s exertion value per instance of this merit.',
  },
  {
    title: 'Tough as Nails (III)',
    avatar: 'magic',
    content:
      'The character is able to power through the pain of damage it has suffered. The penalty suffered from damage and fatigue is halved. The character may spend a point of Exertion to ignore all penalties for Conmod minutes (min 1).',
  },
  {
    title: 'Tough I-III',
    avatar: 'haykal',
    content: 'Add 2, 4, 8 wounds.',
  },
  {
    title: 'Well-mannered I-III',
    avatar: 'star',
    content:
      'Add 1, 2, or 4 to either Etiquette or Streetwise rolls. This merit may be taken more times, each time for a different skill.',
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

const MeritCard = () => {
  return (
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
  );
};

export default MeritCard;
