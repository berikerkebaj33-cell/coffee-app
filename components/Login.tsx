
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  onLogin: () => void;
  onSignUp: () => void;
  onForgot: () => void;
};

export default function Login({ onLogin, onSignUp, onForgot }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={s.container}>
      <Text style={s.logo}>☕ Coffee House</Text>
      <Text style={s.title}>Welcome Back!</Text>
      <Text style={s.sub}>Login to your account</Text>

      <TextInput style={s.input} placeholder="Email address"
        value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={s.input} placeholder="Password"
        value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity onPress={onForgot}>
        <Text style={s.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.button} onPress={onLogin}>
        <Text style={s.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onSignUp}>
        <Text style={s.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9F2', justifyContent: 'center', padding: 25 },
  logo: { fontSize: 25, color: '#593820', fontWeight: 'bold', textAlign: 'center', marginBottom: 45 },
  title: { fontSize: 30, fontWeight: 'bold', color: '#352317' },
  sub: { color: '#999', marginTop: 8, marginBottom: 30 },
  input: { backgroundColor: '#F0E3D5', padding: 17, borderRadius: 13, marginBottom: 15, color: '#352317' },
  forgot: { textAlign: 'right', color: '#8B5E3C', marginBottom: 25 },
  button: { backgroundColor: '#593820', padding: 17, borderRadius: 13, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  link: { textAlign: 'center', color: '#8B5E3C', marginTop: 25 },
});
