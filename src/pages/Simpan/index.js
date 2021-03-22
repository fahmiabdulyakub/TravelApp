import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICTitik} from '../../assets';
import {Header} from '../../components';
import {colors} from '../../constants';

const Simpan = navigation => {
  return (
    <View style={styles.page}>
      <Header
        placeholder={'Cari item baru untuk disimpan...'}
        iconRight={<ICTitik />}
      />
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
