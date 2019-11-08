import React from 'react';
import AttributeField from '../../components/AttributeField';
import {View} from 'react-native';

interface Props {}

function AttributeScreen(props: Props) {
  const {} = props;

  return <AttributeField navigationData={props.navigation} />;
}

export default AttributeScreen;
