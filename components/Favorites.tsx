
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

type Props = {
  onBack: () => void;
};

export default function Favorites({ onBack }: Props) {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Cappuccino', price: '₸ 1,500', icon: '☕' },
    { id: 2, name: 'Iced Latte', price: '₸ 1,800', icon: '🥤' },
    { id: 3, name: 'Mocha', price: '₸ 1,700', icon: '🍫' },
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(current => current.filter(item => item.id !== id));
  };

  return (
    <ScrollView style={s.container}>
      <TouchableOpacity onPress={onBack}>
        <Text style={s.back}>← Back to Home</Text>
      </TouchableOpacity>

      <Text style={s.title}>My Favorites ❤️</Text>
      <Text style={s.sub}>Your favorite drinks in one place</Text>

      {favorites.length > 0 ? favorites.map(item => (
        <View key={item.id} style={s.item}>
          <Text style={s.icon}>{item.icon}</Text>
          <View style={{ flex: 1 }}>
            <Text style={s.name}>{item.name}</Text>
            <Text style={s.price}>{item.price}</Text>
          </View>
          <TouchableOpacity onPress={() => removeFavorite(item.id)}>
            <Text style={s.remove}>♥</Text>
          </TouchableOpacity>
        </View>
      )) : (
        <Text style={s.empty}>No favorites yet.</Text>
      )}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF9F2', padding: 22, paddingTop: 55 },
  back: { color: '#8B5E3C', marginBottom: 25 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#352317' },
  sub: { color: '#999', marginTop: 8, marginBottom: 25 },
  item: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 17, borderRadius: 15, marginBottom: 12 },
  icon: { fontSize: 35, marginRight: 15 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#352317' },
  price: { color: '#8B5E3C', marginTop: 5 },
  remove: { color: '#B64A4A', fontSize: 25 },
  empty: { color: '#999', textAlign: 'center', marginTop: 40 },
});
