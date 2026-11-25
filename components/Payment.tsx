
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

type PaymentProps = {
  onBack: () => void;
  onContinue: (method: string) => void;
};

const paymentMethods = [
  { id: 'kaspi', name: 'Kaspi QR', icon: '🔴', description: 'Pay with Kaspi' },
  { id: 'card', name: 'Bank Card', icon: '💳', description: 'Visa / Mastercard' },
  { id: 'cash', name: 'Cash', icon: '💵', description: 'Pay when delivered' },
];

export default function Payment({
  onBack,
  onContinue,
}: PaymentProps) {
  const [selected, setSelected] = useState('kaspi');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Payment Method</Text>
        <Text style={styles.subtitle}>
          Choose how you want to pay
        </Text>

        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Coffee Order</Text>
            <Text style={styles.summaryText}>₸ 2,500</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Delivery Fee</Text>
            <Text style={styles.summaryText}>₸ 500</Text>
          </View>
          <View style={styles.line} />
          <View style={styles.summaryRow}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.total}>₸ 3,000</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Select Payment Option
        </Text>

        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.method,
              selected === method.id && styles.selectedMethod,
            ]}
            onPress={() => setSelected(method.id)}
          >
            <Text style={styles.icon}>{method.icon}</Text>

            <View style={styles.methodInfo}>
              <Text style={styles.methodName}>{method.name}</Text>
              <Text style={styles.description}>
                {method.description}
              </Text>
            </View>

            <View style={[
              styles.radio,
              selected === method.id && styles.radioSelected,
            ]}>
              {selected === method.id && (
                <View style={styles.radioDot} />
              )}
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={() => onContinue(selected)}
        >
          <Text style={styles.buttonText}>
            Confirm Payment →
          </Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          🔒 Your payment information is secure
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F0',
  },
  content: {
    padding: 22,
    paddingTop: 55,
    paddingBottom: 40,
  },
  back: {
    fontSize: 17,
    color: '#6F4E37',
    marginBottom: 25,
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  subtitle: {
    fontSize: 15,
    color: '#888',
    marginTop: 8,
    marginBottom: 25,
  },
  summary: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 18,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 13,
  },
  summaryText: {
    fontSize: 15,
    color: '#777',
  },
  line: {
    height: 1,
    backgroundColor: '#EEE',
    marginVertical: 10,
  },
  total: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#3E2723',
    marginTop: 28,
    marginBottom: 15,
  },
  method: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#EEE',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },
  selectedMethod: {
    borderColor: '#6F4E37',
    backgroundColor: '#F3EBE3',
  },
  icon: {
    fontSize: 27,
    marginRight: 14,
  },
  methodInfo: {
    flex: 1,
  },
  methodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  description: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#AAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: '#6F4E37',
  },
  radioDot: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: '#6F4E37',
  },
  button: {
    backgroundColor: '#6F4E37',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  note: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginTop: 18,
  },
});
