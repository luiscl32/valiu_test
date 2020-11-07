import React from 'react';
import {Pressable} from 'react-native';
import {ripple_config} from 'utils/ripple-config';

export default function Btn({onPress, children, style = {}}) {
  return (
    <Pressable android_ripple={ripple_config} style={style} onPress={onPress}>
      {children}
    </Pressable>
  );
}
