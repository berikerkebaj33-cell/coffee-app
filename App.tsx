import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Onboarding from './components/Onboarding';
import Home from './components/Home';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<
    'onboarding' | 'home'
  >('onboarding');

  return (
    <View style={styles.container}>
      {currentScreen === 'onboarding' ? (
        <Onboarding
          onGetStarted={() => setCurrentScreen('home')}
        />
      ) : (
        <Home />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});