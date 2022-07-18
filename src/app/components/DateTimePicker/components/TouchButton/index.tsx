import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import i18next from 'i18next';
import { ITouchButton } from '@components/DateTimePicker/interfaces';
import '@components/DateTimePicker/i18n';
import styles from '@components/DateTimePicker/styles';

export const TouchButton = ({
  styleBtn,
  showDatePicker,
  icon,
  styleIcon,
  styleTextBtn,
  textButton
}: ITouchButton) => (
  <TouchableOpacity
    style={[styles.defaultButtonStyle, styleBtn]}
    onPress={showDatePicker}>
    {icon ? (
      <Image
        source={icon}
        style={[styles.defaultIcon, styleIcon]}
        resizeMode="cover"
        resizeMethod="scale"
      />
    ) : (
      <Text style={[styles.defaultTextBtn, styleTextBtn]}>
        {textButton || i18next.t('CUSTOM_DATETIME_PICKER:OPEN')}
      </Text>
    )}
  </TouchableOpacity>
);