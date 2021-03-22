import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts, rf} from '../../../constants';
import {
  ICAkun,
  ICAkunBlue,
  ICAwal,
  ICAwalBlue,
  ICInbox,
  ICInboxBlue,
  ICPesanan,
  ICPesananBlue,
  ICSimpan,
  ICSimpanBlue,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Awal') {
      return active ? <ICAwalBlue /> : <ICAwal />;
    }
    if (title === 'Simpan') {
      return active ? <ICSimpanBlue /> : <ICSimpan />;
    }
    if (title === 'Pesanan') {
      return active ? <ICPesananBlue /> : <ICPesanan />;
    }
    if (title === 'Inbox') {
      return active ? <ICInboxBlue /> : <ICInbox />;
    }
    if (title === 'Akun') {
      return active ? <ICAkunBlue /> : <ICAkun />;
    }
    return active ? <ICAwalBlue /> : <ICAwal />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container(active)}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: active => ({
    alignItems: 'center',
    backgroundColor: colors.bg.white,
    flex: 1,
    paddingVertical: 5,
  }),
  text: active => ({
    fontSize: rf(1.5),
    color: active ? colors.text.blue2 : colors.text.grayMuda,
    fontFamily: fonts.MontserratBold,
  }),
});
