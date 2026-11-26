
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView
} from 'react-native';

type Props = {
  onBack: () => void;
};

const orders = [
  { id: '#1024', date: 'Today, 10:30 AM', name: 'Cappuccino', price: '₸ 1,500', status: 'Delivered', icon: '☕' },
  { id: '#1023', date: 'Yesterday, 04:15 PM', name: 'Iced Latte', price: '₸ 1,800', status: 'Delivered', icon: '🥤' },
  { id: '#1022', date: 'Nov 23, 01:20 PM', name: 'Espresso', price: '₸ 1,200', status: 'Delivered', icon: '☕' },
  { id: '#1021', date: 'Nov 21, 11:00 AM', name: 'Green Tea', price: '₸ 1,000', status: 'Delivered', icon: '🍵' },
];

export default function OrderHistory({ onBack }: Props) {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.back}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>My Orders</Text>
      <Text style={styles.subtitle}>Your coffee journey so far</Text>

      <View style={styles.summary}>
        <View>
          <Text style={styles.summaryNumber}>24</Text>
          <Text style={styles.summaryLabel}>Total Orders</Text>
        </View>
        <View style={styles.line} />
        <View>
          <Text style={styles.summaryNumber}>12</Text>
          <Text style={styles.summaryLabel}>Favorite Drinks</Text>
        </View>
      </View>

      <Text style={styles.section}>Recent Orders</Text>

      {orders.map((order) => (
        <View style={styles.card} key={order.id}>
          <View style={styles.row}>
            <View style={styles.productIcon}>
              <Text style={{ fontSize: 30 }}>{order.icon}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.product}>{order.name}</Text>
              <Text style={styles.date}>{order.date}</Text>
              <Text style={styles.orderId}>{order.id}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.price}>{order.price}</Text>
              <Text style={styles.status}>✓ {order.status}</Text>
            </View>
          </View>
        </View>
      ))}

      <Text style={styles.footer}>That's all your recent orders ☕</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#171311', padding: 22 },
  back: { marginTop: 25, marginBottom: 25 },
  backText: { color: '#D6A66A', fontSize: 16 },
  title: { color: '#FFF5E9', fontSize: 30, fontWeight: 'bold' },
  subtitle: { color: '#9B8C80', marginTop: 7 },
  summary: {
    backgroundColor: '#49372A', borderRadius: 20,
    padding: 22, marginTop: 25, flexDirection: 'row',
    justifyContent: 'space-around', alignItems: 'center'
  },
  summaryNumber: { color: '#F4C78C', fontSize: 27, fontWeight: 'bold', textAlign: 'center' },
  summaryLabel: { color: '#D3BBA4', marginTop: 5, fontSize: 12 },
  line: { width: 1, height: 45, backgroundColor: '#80634C' },
  section: { color: '#FFF5E9', fontSize: 19, fontWeight: 'bold', marginTop: 30, marginBottom: 15 },
  card: { backgroundColor: '#29211C', padding: 15, borderRadius: 17, marginBottom: 13 },
  row: { flexDirection: 'row', alignItems: 'center' },
  productIcon: {
    width: 58, height: 58, backgroundColor: '#49372A',
    borderRadius: 15, justifyContent: 'center',
    alignItems: 'center', marginRight: 12
  },
  product: { color: '#FFF5E9', fontSize: 16, fontWeight: 'bold' },
  date: { color: '#9B8C80', fontSize: 11, marginTop: 5 },
  orderId: { color: '#C58B52', fontSize: 11, marginTop: 4 },
  price: { color: '#FFF5E9', fontWeight: 'bold', fontSize: 14 },
  status: { color: '#8BC69A', fontSize: 10, marginTop: 8 },
  footer: { color: '#9B8C80', textAlign: 'center', marginVertical: 25 }
});
