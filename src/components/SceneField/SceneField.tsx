import React from 'react';
import {Dropdown} from 'react-native-material-dropdown';

const SceneField = () => {
  let sceneData = [
    {
      value: 'City',
    },
    {
      value: 'Cloister',
    },
    {
      value: 'Coastal',
    },
    {
      value: 'Court',
    },
    {
      value: 'Nature',
    },
    {
      value: 'Rural',
    },
    {
      value: 'Studies',
    },
    {
      value: 'Underworld',
    },
  ];
  return <Dropdown label="Background Scene" data={sceneData} />;
};

export default SceneField;
