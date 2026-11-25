
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  onBack: () => void;
  onRegister: () => void;
};

export default function SignUp({ onBack, onRegister }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>← Back</Text>
      </TouchableOpacity>
      <Text style={s.title}>Create Account</Text>
      <Text style={s.sub}>Join Coffee House today!</Text>

      <TextInput style={s.input} placeholder="Full name" value={name} onChangeText={setName} />
      <TextInput style={s.input} placeholder="Email address" value={email} onChangeText={setEmail} />
      <TextInput style={s.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={s.button} onPress={onRegister}>
        <Text style={s.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9F2', justifyContent: 'center', padding: 25 },
  back: { color: '#8B5E3C', fontSize: 16, marginBottom: 35 },
  title: { fontSize: 30, fontWeight: 'bold', color: '#352317' },
  sub: { color: '#999', marginVertical: 15 },
  input: { backgroundColor: '#F0E3D5', padding: 17, borderRadius: 13, marginBottom: 15 },
  button: { backgroundColor: '#593820', padding: 17, borderRadius: 13, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#FFF', fontWeight: 'bold' },
});
