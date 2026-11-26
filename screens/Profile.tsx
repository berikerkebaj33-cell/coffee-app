
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView
} from 'react-native';

type Props = {
  onBack: () => void;
};

export default function Profile({ onBack }: Props) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.back}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.subtitle}>Manage your account</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>☕</Text>
        </View>
        <Text style={styles.name}>Coffee Lover</Text>
        <Text style={styles.email}>coffee@example.com</Text>
        <View style={styles.member}>
          <Text style={styles.memberText}>✦ GOLD MEMBER</Text>
        </View>
      </View>

      <Text style={styles.section}>Personal Information</Text>

      {[
        ['👤', 'Full Name', 'Coffee Lover'],
        ['✉️', 'Email', 'coffee@example.com'],
        ['📱', 'Phone', '+7 700 000 0000'],
        ['📍', 'Address', 'Almaty, Kazakhstan'],
      ].map((item, index) => (
        <View style={styles.info} key={index}>
          <Text style={styles.icon}>{item[0]}</Text>
          <View>
            <Text style={styles.label}>{item[1]}</Text>
            <Text style={styles.value}>{item[2]}</Text>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#171311', padding: 22 },
  back: { marginTop: 25, marginBottom: 25 },
  backText: { color: '#D6A66A', fontSize: 16 },
  title: { color: '#FFF5E9', fontSize: 30, fontWeight: 'bold' },
  subtitle: { color: '#9B8C80', marginTop: 7, marginBottom: 25 },
  profileCard: {
    backgroundColor: '#29211C', borderRadius: 22,
    padding: 25, alignItems: 'center'
  },
  avatar: {
    width: 85, height: 85, borderRadius: 50,
    backgroundColor: '#49372A', alignItems: 'center',
    justifyContent: 'center'
  },
  avatarText: { fontSize: 40 },
  name: { color: '#FFF5E9', fontSize: 22, fontWeight: 'bold', marginTop: 15 },
  email: { color: '#A99A8E', marginTop: 6 },
  member: {
    backgroundColor: '#6C4B2D', paddingHorizontal: 16,
    paddingVertical: 8, borderRadius: 20, marginTop: 15
  },
  memberText: { color: '#F4C78C', fontWeight: 'bold', fontSize: 11 },
  section: { color: '#FFF5E9', fontSize: 19, fontWeight: 'bold', marginTop: 28, marginBottom: 15 },
  info: {
    backgroundColor: '#29211C', padding: 17,
    borderRadius: 15, marginBottom: 10,
    flexDirection: 'row', alignItems: 'center'
  },
  icon: { fontSize: 23, marginRight: 15 },
  label: { color: '#A99A8E', fontSize: 12 },
  value: { color: '#FFF5E9', fontSize: 15, marginTop: 4 },
  editButton: {
    backgroundColor: '#C58B52', padding: 17,
    borderRadius: 15, alignItems: 'center', marginTop: 15,
    marginBottom: 30
  },
  editText: { color: '#21170F', fontWeight: 'bold', fontSize: 16 }
});
