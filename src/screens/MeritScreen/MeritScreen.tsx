import React from 'react';
import MeritCard from '../../components/MeritCard';
import {View, ScrollView} from 'react-native';
import {merits} from '../../utils/meritCardData';
import {colors} from '../../constants/colors';

interface Props {}

function MeritScreen(props: Props) {
  const {} = props;

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.dark,
        }}>
        {merits.map((item, index) => {
          return <MeritCard title={item.title} content={item.content} />;
        })}
      </View>
    </ScrollView>
  );
}

export default MeritScreen;
