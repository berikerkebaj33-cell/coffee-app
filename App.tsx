
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Main screens
import Onboarding from './components/Onboarding';
import Home from './components/Home';
import DetailItem from './components/DetailItem';
import Order from './components/Order';
import Delivery from './components/Delivery';

// Login and shopping screens
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Search from './components/Search';
import Favorites from './components/Favorites';

// Delivery screens
import Address from './components/Address';
import MapPicker from './components/MapPicker';
import Payment from './components/Payment';
import OrderTracking from './components/OrderTracking';
import OrderSuccess from './components/OrderSuccess';

// Currency screen
import Currency from './components/Currency';

// New screens
import Profile from './screens/Profile';
import OrderHistory from './screens/OrderHistory';
import Notifications from './screens/Notifications';
import Settings from './screens/Settings';
import Support from './screens/Support';

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
  | 'favorites'
  | 'address'
  | 'map'
  | 'payment'
  | 'tracking'
  | 'success'
  | 'currency'
  | 'profile'
  | 'orderHistory'
  | 'notifications'
  | 'settings'
  | 'support';

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>('onboarding');

  const [selectedAddress, setSelectedAddress] =
    useState('');

  const [selectedLocation, setSelectedLocation] =
    useState({
      latitude: 43.2389,
      longitude: 76.8897,
    });

  const [paymentMethod, setPaymentMethod] =
    useState('kaspi');

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
          onCurrency={() => setCurrentScreen('currency')}
          onProfile={() => setCurrentScreen('profile')}
          onOrderHistory={() => setCurrentScreen('orderHistory')}
          onNotifications={() => setCurrentScreen('notifications')}
          onSettings={() => setCurrentScreen('settings')}
          onSupport={() => setCurrentScreen('support')}
        />
      )}

      {/* Currency */}
      {currentScreen === 'currency' && (
        <Currency
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {/* New screens */}
      {currentScreen === 'profile' && (
        <Profile
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'orderHistory' && (
        <OrderHistory
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'notifications' && (
        <Notifications
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'settings' && (
        <Settings
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {currentScreen === 'support' && (
        <Support
          onBack={() => setCurrentScreen('home')}
        />
      )}

      {/* Coffee details */}
      {currentScreen === 'detail' && (
        <DetailItem
          onBack={() => setCurrentScreen('home')}
          onAddToOrder={() => setCurrentScreen('order')}
        />
      )}

      {currentScreen === 'order' && (
        <Order
          onBack={() => setCurrentScreen('detail')}
          onCheckout={() => setCurrentScreen('address')}
        />
      )}

      {currentScreen === 'delivery' && (
        <Delivery
          onBack={() => setCurrentScreen('order')}
          onHome={() => setCurrentScreen('home')}
        />
      )}

      {/* Login */}
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

      {/* Search and Favorites */}
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

      {/* Delivery process */}
      {currentScreen === 'address' && (
        <Address
          onBack={() => setCurrentScreen('order')}
          onContinue={(address) => {
            setSelectedAddress(address);
            setCurrentScreen('map');
          }}
        />
      )}

      {currentScreen === 'map' && (
        <MapPicker
          onBack={() => setCurrentScreen('address')}
          onConfirm={(location) => {
            setSelectedLocation(location);
            setCurrentScreen('payment');
          }}
        />
      )}

      {currentScreen === 'payment' && (
        <Payment
          onBack={() => setCurrentScreen('map')}
          onContinue={(method) => {
            setPaymentMethod(method);
            setCurrentScreen('tracking');
          }}
        />
      )}

      {currentScreen === 'tracking' && (
        <OrderTracking
          onBack={() => setCurrentScreen('payment')}
          onFinish={() => setCurrentScreen('success')}
        />
      )}

      {currentScreen === 'success' && (
        <OrderSuccess
          onHome={() => setCurrentScreen('home')}
          onTrackAgain={() => setCurrentScreen('tracking')}
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
