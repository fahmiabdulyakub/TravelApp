import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICReceipt} from '../../assets';
import {Header} from '../../components';
import {colors} from '../../constants';

const Pesanan = () => {
  return (
    <View style={styles.page}>
      <Header
        placeholder={'Cari item, destinasi, fitur...'}
        iconRight={<ICReceipt />}
      />
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.white,
    flex: 1,
  },
});
