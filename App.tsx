
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Onboarding from './components/Onboarding';
import Home from './components/Home';
import DetailItem from './components/DetailItem';
import Order from './components/Order';
import Delivery from './components/Delivery';

import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Search from './components/Search';
import Favorites from './components/Favorites';

type Screen =
  | 'onboarding'
  | 'home'
  | 'detail'
  | 'order'
  | 'delivery'
  | 'login'
  | 'signup'
  | 'forgot'
  | 'search'
  | 'favorites';

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
          onLogin={() => setCurrentScreen('login')}
          onSearch={() => setCurrentScreen('search')}
          onFavorites={() => setCurrentScreen('favorites')}
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

      {currentScreen === 'login' && (
        <Login
          onLogin={() => setCurrentScreen('home')}
          onSignUp={() => setCurrentScreen('signup')}
          onForgot={() => setCurrentScreen('forgot')}
        />
      )}

      {currentScreen === 'signup' && (
        <SignUp
          onBack={() => setCurrentScreen('login')}
          onRegister={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'forgot' && (
        <ForgotPassword
          onBack={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'search' && (
        <Search
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'favorites' && (
        <Favorites
          onBack={() => setCurrentScreen('home')}
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
