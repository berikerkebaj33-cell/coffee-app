
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

type Props = {
  onBack: () => void;
};

const products = [
  { name: 'Cappuccino', price: '₸ 1,500', icon: '☕' },
  { name: 'Iced Latte', price: '₸ 1,800', icon: '🥤' },
  { name: 'Espresso', price: '₸ 1,200', icon: '☕' },
  { name: 'Caramel Macchiato', price: '₸ 2,000', icon: '🧋' },
  { name: 'Mocha', price: '₸ 1,700', icon: '🍫' },
];

export default function Search({ onBack }: Props) {
  const [query, setQuery] = useState('');

  const filtered = products.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ScrollView style={s.container}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>← Back to Home</Text>
      </TouchableOpacity>

      <Text style={s.title}>Search</Text>
      <Text style={s.sub}>Find your favorite coffee</Text>

      <TextInput
        style={s.input}
        placeholder="Search coffee..."
        value={query}
        onChangeText={setQuery}
      />

      <Text style={s.heading}>Search Results</Text>

      {filtered.length > 0 ? filtered.map(item => (
        <View key={item.name} style={s.item}>
          <Text style={s.icon}>{item.icon}</Text>
          <View style={{ flex: 1 }}>
            <Text style={s.name}>{item.name}</Text>
            <Text style={s.price}>{item.price}</Text>
          </View>
        </View>
      )) : (
        <Text style={s.empty}>No products found.</Text>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9F2', padding: 22, paddingTop: 55 },
  back: { color: '#8B5E3C', marginBottom: 25 },
  title: { fontSize: 30, fontWeight: 'bold', color: '#352317' },
  sub: { color: '#999', marginTop: 7, marginBottom: 25 },
  input: { backgroundColor: '#F0E3D5', padding: 17, borderRadius: 13 },
  heading: { fontSize: 20, fontWeight: 'bold', color: '#352317', marginVertical: 22 },
  item: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 17, borderRadius: 15, marginBottom: 12 },
  icon: { fontSize: 35, marginRight: 15 },
  name: { fontWeight: 'bold', fontSize: 16, color: '#352317' },
  price: { color: '#8B5E3C', marginTop: 5 },
  empty: { color: '#999', textAlign: 'center', marginTop: 30 },
});
