import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigate from './src/Navigation';
import store from './src/Redux/Store';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
});

export default App;
