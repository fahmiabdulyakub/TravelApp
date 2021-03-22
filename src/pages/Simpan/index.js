import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../../components';
import {colors} from '../../constants';

const Simpan = navigation => {
  return (
    <View style={styles.page}>
      <Header placeholder={'Cari item baru untuk disimpan...'} />
    </View>
  );
};

export default Simpan;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.white,
    flex: 1,
  },
});
