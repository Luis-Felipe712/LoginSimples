import { View } from 'react-native';
import React from 'react';
import Login from './src/components/Login/Login';

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0', 
  },
};

export default App;
