import React from 'react';
import {View} from 'react-native';
import Text from 'shared/text';
import c from 'theme/colors';

import s from './styles';

export default function Header({children}) {
  return (
    <View style={s.text_container}>
      <Text size={20} color={c.white} type={'medium'} align={'left'}>
        {children}
      </Text>
    </View>
  );
}
