
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Switch
} from 'react-native';

type Props = {
  onBack: () => void;
};

export default function Settings({ onBack }: Props) {
  const [notifications, setNotifications] = useState(true);
  const [offers, setOffers] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.back}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Customize your experience</Text>

      <Text style={styles.section}>Preferences</Text>

      <View style={styles.card}>
        <View style={styles.setting}>
          <Text style={styles.icon}>🔔</Text>
          <View style={styles.info}>
            <Text style={styles.name}>Push Notifications</Text>
            <Text style={styles.description}>Order and app updates</Text>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#65564B', true: '#C58B52' }}
            thumbColor="#FFF5E9"
          />
        </View>

        <View style={styles.separator} />

        <View style={styles.setting}>
          <Text style={styles.icon}>🎁</Text>
          <View style={styles.info}>
            <Text style={styles.name}>Special Offers</Text>
            <Text style={styles.description}>Receive discounts and promotions</Text>
          </View>
          <Switch
            value={offers}
            onValueChange={setOffers}
            trackColor={{ false: '#65564B', true: '#C58B52' }}
            thumbColor="#FFF5E9"
          />
        </View>

        <View style={styles.separator} />

        <View style={styles.setting}>
          <Text style={styles.icon}>🌙</Text>
          <View style={styles.info}>
            <Text style={styles.name}>Dark Appearance</Text>
            <Text style={styles.description}>Use dark app theme</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#65564B', true: '#C58B52' }}
            thumbColor="#FFF5E9"
          />
        </View>
      </View>

      <Text style={styles.section}>General</Text>

      <TouchableOpacity style={styles.link}>
        <Text style={styles.icon}>🌐</Text>
        <Text style={styles.name}>Language</Text>
        <Text style={styles.right}>English  ›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link}>
        <Text style={styles.icon}>💱</Text>
        <Text style={styles.name}>Currency</Text>
        <Text style={styles.right}>KZT  ›</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link}>
        <Text style={styles.icon}>🔒</Text>
        <Text style={styles.name}>Privacy & Security</Text>
        <Text style={styles.right}>›</Text>
      </TouchableOpacity>

      <Text style={styles.version}>COFFEE APP • VERSION 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#171311', padding: 22 },
  back: { marginTop: 25, marginBottom: 25 },
  backText: { color: '#D6A66A', fontSize: 16 },
  title: { color: '#FFF5E9', fontSize: 30, fontWeight: 'bold' },
  subtitle: { color: '#9B8C80', marginTop: 7 },
  section: { color: '#FFF5E9', fontSize: 19, fontWeight: 'bold', marginTop: 30, marginBottom: 15 },
  card: { backgroundColor: '#29211C', borderRadius: 18, paddingHorizontal: 15 },
  setting: { flexDirection: 'row', alignItems: 'center', paddingVertical: 18 },
  icon: { fontSize: 22, marginRight: 13 },
  info: { flex: 1 },
  name: { color: '#FFF5E9', fontSize: 14, fontWeight: '600' },
  description: { color: '#9B8C80', fontSize: 11, marginTop: 5 },
  separator: { height: 1, backgroundColor: '#45382F' },
  link: {
    backgroundColor: '#29211C', padding: 18,
    borderRadius: 15, marginBottom: 10,
    flexDirection: 'row', alignItems: 'center'
  },
  right: { color: '#C58B52', marginLeft: 'auto', fontSize: 12 },
  version: { color: '#77685E', textAlign: 'center', fontSize: 10, marginVertical: 30, letterSpacing: 2 }
});
