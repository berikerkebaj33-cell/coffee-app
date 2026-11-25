
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

type Props = {
  onBack: () => void;
};

export default function ForgotPassword({ onBack }: Props) {
  const [email, setEmail] = useState('');

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>← Back to Login</Text>
      </TouchableOpacity>

      <Text style={s.icon}>🔐</Text>
      <Text style={s.title}>Forgot Password?</Text>
      <Text style={s.sub}>
        Enter your email address. We will help you reset your password.
      </Text>

      <TextInput
        style={s.input}
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={s.button}
        onPress={() => Alert.alert('Password Reset', 'Password reset request submitted.')}
      >
        <Text style={s.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9F2', justifyContent: 'center', padding: 25 },
  back: { color: '#8B5E3C', marginBottom: 45 },
  icon: { fontSize: 55, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#352317' },
  sub: { color: '#999', lineHeight: 22, marginVertical: 20 },
  input: { backgroundColor: '#F0E3D5', padding: 17, borderRadius: 13, marginBottom: 20 },
  button: { backgroundColor: '#593820', padding: 17, borderRadius: 13, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold' },
});
