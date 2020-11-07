import React from 'react';
import {View} from 'react-native';
import Btn from 'shared/button/Btn';
import Icon from 'react-native-vector-icons/Entypo';
import c from 'theme/colors';

import s from './styles';

export default function BackButton({onPress}) {
  return (
    <Btn onPress={onPress} style={s.btn}>
      <View style={s.icon}>
        <Icon color={c.white} name={'chevron-left'} size={30} />
      </View>
    </Btn>
  );
}
