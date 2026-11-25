
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type OrderSuccessProps = {
  onHome: () => void;
  onTrackAgain: () => void;
};

export default function OrderSuccess({
  onHome,
  onTrackAgain,
}: OrderSuccessProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.successCircle}>
          <Text style={styles.check}>✓</Text>
        </View>

        <Text style={styles.title}>
          Order Delivered!
        </Text>

        <Text style={styles.subtitle}>
          Your coffee has arrived safely.
          Enjoy every sip!
        </Text>

        <View style={styles.orderCard}>
          <Text style={styles.cardTitle}>
            Order Summary
          </Text>

          <View style={styles.row}>
            <Text style={styles.label}>Order Number</Text>
            <Text style={styles.value}>#CF2026</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Items</Text>
            <Text style={styles.value}>2 Coffee</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Payment</Text>
            <Text style={styles.value}>Kaspi QR</Text>
          </View>

          <View style={styles.line} />

          <View style={styles.row}>
            <Text style={styles.totalLabel}>Total Paid</Text>
            <Text style={styles.total}>₸ 3,000</Text>
          </View>
        </View>

        <Text style={styles.thanks}>
          Thank you for choosing Coffee House ☕
        </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.trackButton}
          onPress={onTrackAgain}
        >
          <Text style={styles.trackText}>
            View Order Tracking
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={onHome}
        >
          <Text style={styles.homeText}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F0',
    justifyContent: 'space-between',
    padding: 22,
    paddingTop: 70,
    paddingBottom: 35,
  },
  content: {
    alignItems: 'center',
  },
  successCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#E3F3E7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  check: {
    fontSize: 65,
    color: '#27AE60',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3E2723',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#888',
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 12,
    marginBottom: 30,
  },
  orderCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  label: {
    color: '#888',
    fontSize: 14,
  },
  value: {
    color: '#3E2723',
    fontSize: 14,
    fontWeight: '600',
  },
  line: {
    height: 1,
    backgroundColor: '#EEE',
    marginBottom: 17,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6F4E37',
  },
  thanks: {
    color: '#6F4E37',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 25,
  },
  buttons: {
    gap: 12,
  },
  trackButton: {
    backgroundColor: '#6F4E37',
    padding: 17,
    borderRadius: 14,
    alignItems: 'center',
  },
  trackText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: '#E8DFD3',
    padding: 17,
    borderRadius: 14,
    alignItems: 'center',
  },
  homeText: {
    color: '#3E2723',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
