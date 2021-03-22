import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICSearch, ICTitik} from '../../../assets';
import {colors, hp, rf, wp} from '../../../constants';
import Input from '../Input';

const Header = ({navigation, placeholder}) => {
  return (
    <View style={styles.header}>
      <Input
        colorText={colors.text.grayMuda}
        paddingHorizontal={wp(3)}
        backgroundColor={colors.bg.white}
        placeholder={placeholder}
        fontSize={rf(1.5)}
        borderRadius={wp(1)}
        height={hp(4.8)}
        suffixComponent={<ICSearch />}
        widthInput={wp(70)}
        onPress={() => navigation.navigate('Simpan')}
      />
      {<ICTitik />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.bg.blue2,
    height: hp(8),
    paddingHorizontal: wp(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
