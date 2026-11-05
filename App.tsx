
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Onboarding from './components/Onboarding';
import Home from './components/Home';
import DetailItem from './components/DetailItem';
import Order from './components/Order';
import Delivery from './components/Delivery';

type Screen =
  | 'onboarding'
  | 'home'
  | 'detail'
  | 'order'
  | 'delivery';

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>('onboarding');

  return (
    <View style={styles.container}>

      {currentScreen === 'onboarding' && (
        <Onboarding
          onGetStarted={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'home' && (
        <Home
          onSelectCoffee={() => setCurrentScreen('detail')}
        />
      )}

      {currentScreen === 'detail' && (
        <DetailItem
          onBack={() => setCurrentScreen('home')}
          onAddToOrder={() => setCurrentScreen('order')}
        />
      )}

      {currentScreen === 'order' && (
        <Order
          onBack={() => setCurrentScreen('detail')}
          onCheckout={() => setCurrentScreen('delivery')}
        />
      )}

      {currentScreen === 'delivery' && (
        <Delivery
          onBack={() => setCurrentScreen('order')}
          onHome={() => setCurrentScreen('home')}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
