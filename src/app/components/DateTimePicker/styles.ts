import { StyleSheet } from 'react-native';
import { black, transparent, white } from '@constants/colors';
import { SIZES } from '@constants/fonts';
import fonts from '@config/fonts';

const IMAGE_SIZE: number = 30;

const styles = StyleSheet.create({
  defaultContainer: {
    backgroundColor: transparent
  },
  defaultButtonStyle: {
    width: '100%',
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    borderRadius: 20,
    padding: 14
  },
  defaultIcon: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE
  },
  defaultTextBtn: {
    color: black,
    fontWeight: 'bold',
    fontSize: 16
  },
  label: {
    ...fonts.baseFont,
    backgroundColor: transparent,
    fontSize: SIZES.XSMALL,
    marginTop: 5
  },
});

export default styles;