import React from 'react';
import { View } from 'react-native';

import CodeCore from '@core/CodeCore';
import Core from '@core/Core';

import Api from '@services/api';
import User from '@services/user';

import Demo from './Demo';
import Test from './Test';

interface TestableAa {
  a: string;
}

const Welcome = () => {
  const _test = 'TEST';
  const url =
    'http://aaaaaaaa/asdsa/asd/asda/sadasd/asd/asdas/sada/asdas/asdsa/asdas/asdsa/asdas/asdas/asdas/asdas/sad';

  for (let i = 1; i < 9; i++) {
    console.log('test');
  }

  const arr = [0, 1, 2, 3];

  Api;
  Core;
  CodeCore;
  User;

  return (
    <View>
      <Demo />
      <Test />
      {arr.map(_ => (
        <Test key={1} />
      ))}
    </View>
  );
};

export default Welcome;
