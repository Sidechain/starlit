import React from 'react';
import {TextField} from 'react-native-material-textfield';

import { paragons, primals } from '../../utils/paragonPrimals'

interface Props {
  setParagonPrimal: any
  heritage: string
}

const ParagonPrimalField = (props:Props) => {
  return (
    <TextField
      label="Paragon Sign / Primal Year"
      placeholder="Fill in Paragon Sign OR Primal Year"
    />
  );
};

export default ParagonPrimalField;
