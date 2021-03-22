import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, Routing, store} from './configs';
import 'moment/locale/id';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './constants';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <SafeAreaView style={styles.SafeAreaView}>
              <StatusBar backgroundColor={colors.bg.blue2} />
              <Routing />
            </SafeAreaView>
          </NavigationContainer>
          <Toast ref={ref => Toast.setRef(ref)} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
