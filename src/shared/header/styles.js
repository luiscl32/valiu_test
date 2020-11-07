import {StyleSheet} from 'react-native';
import c from 'theme/colors';

export default StyleSheet.create({
  header: {
    height: 'auto',
    minHeight: 50,
    maxHeight: 120,
    backgroundColor: c.blue,

    elevation: 0,
  },

  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  icon: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },

  btn: {
    marginLeft: 10,
  },

  text_container: {
    width: '100%',

    justifyContent: 'center',
    height: 'auto',
    backgroundColor: 'transparent',
  },
});
