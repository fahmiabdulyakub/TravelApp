import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {colors, fonts, hp, rf, wp} from '../../../constants';
import {Gap} from '../../atoms';

const Input = ({
  placeholder,
  onChangeText,
  keyboardType,
  height,
  multiline,
  colorText,
  fontSize,
  fontFamily,
  widthInput,
  maxLength,
  suffixComponent,
  value,
  onPress,
  disabled,
  paddingHorizontal,
  paddingRight,
  backgroundColor,
  borderRadius,
}) => {
  if (onPress) {
    return (
      <TouchableOpacity
        style={styles.conatinerInput(
          height,
          paddingHorizontal,
          paddingRight,
          backgroundColor,
          borderRadius,
        )}
        disabled={disabled}
        onPress={onPress}>
        {suffixComponent && suffixComponent}
        <TextInput
          style={styles.input(colorText, fontSize, fontFamily, widthInput)}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={colors.text.grayMuda}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={5}
          maxLength={maxLength}
          editable={false}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={styles.conatinerInput(
        height,
        paddingHorizontal,
        paddingRight,
        backgroundColor,
        borderRadius,
      )}>
      {suffixComponent && suffixComponent}
      <TextInput
        style={styles.input(colorText, fontSize, fontFamily, widthInput)}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.text.placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={5}
        maxLength={maxLength}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  conatinerInput: (
    height,
    paddingHorizontal,
    paddingRight,
    backgroundColor,
    borderRadius,
  ) => ({
    flexDirection: 'row',
    alignItems: 'center',
    height: height ? height : hp(6),
    paddingHorizontal: paddingHorizontal ? paddingHorizontal : wp(3.6),
    paddingRight: paddingRight,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
  }),
  input: (colorText, fontSize, fontFamily, widthInput) => ({
    fontSize: fontSize ? fontSize : rf(2),
    fontFamily: fontFamily ? fontFamily : fonts.MontserratRegular,
    color: colorText ? colorText : colors.text.placeholder,
    width: widthInput,
  }),
  lengthText: {
    fontSize: rf(1.5),
    fontFamily: fonts.MontserratBold,
    color: colors.text.silver,
    top: hp(1),
  },
});
