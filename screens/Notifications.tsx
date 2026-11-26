
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView
} from 'react-native';

type Props = {
  onBack: () => void;
};

const initialNotifications = [
  { id: 1, icon: '🎉', title: 'Special Offer!', message: 'Get 20% off your next coffee order.', time: '10 minutes ago', unread: true },
  { id: 2, icon: '☕', title: 'Order Delivered', message: 'Your Cappuccino has been delivered.', time: '2 hours ago', unread: true },
  { id: 3, icon: '⭐', title: 'New Rewards', message: 'You earned 50 loyalty points!', time: 'Yesterday', unread: false },
  { id: 4, icon: '🎁', title: 'Weekend Surprise', message: 'A special gift is waiting for you.', time: '2 days ago', unread: false },
];

export default function Notifications({ onBack }: Props) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllRead = () => {
    setNotifications(items =>
      items.map(item => ({ ...item, unread: false }))
    );
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.back}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Notifications</Text>
          <Text style={styles.subtitle}>Stay updated with us</Text>
        </View>
        <TouchableOpacity onPress={markAllRead}>
          <Text style={styles.mark}>Mark all read</Text>
        </TouchableOpacity>
      </View>

      {notifications.map(item => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.8}
          style={[styles.card, item.unread && styles.unreadCard]}
          onPress={() =>
            setNotifications(items =>
              items.map(n =>
                n.id === item.id ? { ...n, unread: false } : n
              )
            )
          }
        >
          <View style={styles.iconBox}>
            <Text style={{ fontSize: 25 }}>{item.icon}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.titleRow}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              {item.unread && <View style={styles.dot} />}
            </View>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Text style={styles.footer}>You're all caught up! ☕</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#171311', padding: 22 },
  back: { marginTop: 25, marginBottom: 25 },
  backText: { color: '#D6A66A', fontSize: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: '#FFF5E9', fontSize: 27, fontWeight: 'bold' },
  subtitle: { color: '#9B8C80', marginTop: 7 },
  mark: { color: '#D6A66A', fontSize: 12 },
  card: {
    backgroundColor: '#29211C', borderRadius: 17,
    padding: 17, marginTop: 15, flexDirection: 'row',
    alignItems: 'center', gap: 13
  },
  unreadCard: { borderWidth: 1, borderColor: '#805A39' },
  iconBox: {
    width: 52, height: 52, borderRadius: 15,
    backgroundColor: '#49372A', alignItems: 'center',
    justifyContent: 'center'
  },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  itemTitle: { color: '#FFF5E9', fontSize: 15, fontWeight: 'bold' },
  dot: { width: 7, height: 7, borderRadius: 5, backgroundColor: '#D6A66A' },
  message: { color: '#B5A69A', fontSize: 12, marginTop: 6, lineHeight: 18 },
  time: { color: '#806F62', fontSize: 10, marginTop: 8 },
  footer: { color: '#9B8C80', textAlign: 'center', marginVertical: 30 }
});
