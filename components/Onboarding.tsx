
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

type OnboardingProps = {
  onGetStarted: () => void;
};

export default function Onboarding({
  onGetStarted,
}: OnboardingProps) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.topSection}>
        <Text style={styles.coffeeIcon}>☕</Text>
        <Text style={styles.brand}>COFFEE HOUSE</Text>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.title}>
          Fall in Love with{'\n'}
          Coffee in Blissful{'\n'}
          Delight!
        </Text>

        <Text style={styles.description}>
          Welcome to our cozy coffee corner, where
          every cup is a delight.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={onGetStarted}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 35,
  },
  topSection: {
    alignItems: 'center',
    marginTop: 60,
  },
  coffeeIcon: {
    fontSize: 100,
  },
  brand: {
    color: '#D58A5B',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginTop: 15,
  },
  bottomSection: {
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 39,
  },
  description: {
    color: '#BBBBBB',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 15,
    marginBottom: 30,
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#C98252',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
