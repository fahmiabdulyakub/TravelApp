import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomNavigation} from '../../components';
import {Awal, Akun, Simpan, Pesanan, Inbox} from '../../pages';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <BottomTab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <BottomTab.Screen name="Awal" component={Awal} />
      <BottomTab.Screen name="Simpan" component={Simpan} />
      <BottomTab.Screen name="Pesanan" component={Pesanan} />
      <BottomTab.Screen name="Inbox" component={Inbox} />
      <BottomTab.Screen name="Akun" component={Akun} />
    </BottomTab.Navigator>
  );
};
const Routing = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routing;
