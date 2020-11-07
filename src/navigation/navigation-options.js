import {TransitionPresets} from '@react-navigation/stack';
import HeaderLeft from 'shared/header/left';
import HeaderTitle from 'shared/header/title';
import HeaderStyle from 'shared/header/styles';

export const options = {
  ...TransitionPresets.RevealFromBottomAndroid,
  headerForceInset: {top: 'never', bottom: 'never'},
  headerStyle: HeaderStyle.header,
  headerLeft: HeaderLeft,
  headerTitle: HeaderTitle,
  headerTransparent: false,
};
