
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

type OrderProps = {
  onBack?: () => void;
  onCheckout?: () => void;
};

export default function Order({
  onBack = () => {},
  onCheckout = () => {},
}: OrderProps) {
  const [quantity, setQuantity] = useState(1);

  const price = 4.5;
  const delivery = 1.5;
  const total = price * quantity + delivery;

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>My Order</Text>
      <Text style={styles.subtitle}>Your coffee is waiting!</Text>

      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
          }}
          style={styles.image}
        />

        <View style={styles.info}>
          <Text style={styles.name}>Cappuccino</Text>
          <Text style={styles.type}>Medium • Hot Coffee</Text>
          <Text style={styles.price}>$4.50</Text>

          <View style={styles.quantity}>
            <TouchableOpacity
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Text style={styles.button}>−</Text>
            </TouchableOpacity>

            <Text style={styles.number}>{quantity}</Text>

            <TouchableOpacity
              onPress={() => setQuantity(quantity + 1)}
            >
              <Text style={styles.button}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.heading}>Payment Summary</Text>

      <View style={styles.summary}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>
          ${(price * quantity).toFixed(2)}
        </Text>
      </View>

      <View style={styles.summary}>
        <Text style={styles.label}>Delivery Fee</Text>
        <Text style={styles.value}>${delivery.toFixed(2)}</Text>
      </View>

      <View style={styles.line} />

      <View style={styles.summary}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity
        style={styles.checkout}
        onPress={onCheckout}
      >
        <Text style={styles.checkoutText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F2',
    padding: 20,
  },
  back: {
    color: '#75452B',
    fontSize: 18,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  subtitle: {
    color: '#8D7770',
    marginTop: 5,
    marginBottom: 25,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    elevation: 3,
  },
  image: {
    width: 115,
    height: 135,
    borderRadius: 14,
  },
  info: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  type: {
    color: '#8D7770',
    marginTop: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A65E32',
    marginTop: 8,
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 8,
  },
  button: {
    fontSize: 23,
    color: '#75452B',
  },
  number: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#3E2723',
    marginTop: 30,
    marginBottom: 20,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 17,
  },
  label: {
    color: '#8D7770',
    fontSize: 16,
  },
  value: {
    color: '#3E2723',
    fontSize: 16,
    fontWeight: '600',
  },
  line: {
    height: 1,
    backgroundColor: '#E5D6C9',
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A65E32',
  },
  checkout: {
    backgroundColor: '#75452B',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  checkoutText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
