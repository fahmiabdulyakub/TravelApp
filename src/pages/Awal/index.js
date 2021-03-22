import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICTitik, ICPindai} from '../../assets';
import {Gap, Header} from '../../components';
import {colors, fonts, hp, rf, wp} from '../../constants';

const Awal = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        placeholder={'Cari item, destinasi, fitur...'}
        iconRight={<ICTitik />}
      />
      <Gap height={hp(2)} />
      <View style={styles.container}>
        <View style={styles.containerRow}>
          <View style={styles.row}>
            <View style={styles.circle}>
              <Text>FA</Text>
            </View>
            <Gap width={wp(3)} />
            <Text style={styles.textBold}>Fahmi Abdul Yakub</Text>
          </View>
          <View>
            <TouchableOpacity>
              {<ICPindai width={wp(10)} height={wp(10)} />}
            </TouchableOpacity>
            <Text style={styles.textSmall}>Pindai</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Awal;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.bg.white,
    flex: 1,
  },
  container: {
    paddingHorizontal: wp(5),
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBold: {
    fontFamily: fonts.MontserratBold,
    color: colors.text.gray,
    fontSize: rf(2),
  },
  circle: {
    backgroundColor: colors.bg.abu,
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSmall: {
    fontFamily: fonts.MontserratMedium,
    color: colors.text.grayMuda,
    fontSize: rf(1.5),
  },
});
