import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICTitik, ICSearch} from '../../assets';
import {Header, Input} from '../../components';
import {colors, hp, rf, wp} from '../../constants';

const Awal = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header placeholder={'Cari item, destinasi, fitur...'} />
    </View>
  );
};

export default Awal;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.white,
    flex: 1,
  },
});
