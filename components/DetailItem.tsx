
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

type DetailItemProps = {
  onBack?: () => void;
  onAddToOrder?: () => void;
};

export default function DetailItem({
  onBack = () => {},
  onAddToOrder = () => {},
}: DetailItemProps) {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
        }}
        style={styles.image}
      />

      <Text style={styles.title}>Cappuccino</Text>
      <Text style={styles.subtitle}>Coffee • Hot Drink</Text>
      <Text style={styles.price}>$4.50</Text>

      <Text style={styles.heading}>Description</Text>
      <Text style={styles.description}>
        A delicious cappuccino made with rich espresso,
        steamed milk and a smooth layer of milk foam.
      </Text>

      <Text style={styles.heading}>Choose Size</Text>

      <View style={styles.sizes}>
        {['S', 'M', 'L'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.sizeButton,
              size === item && styles.selectedSize,
            ]}
            onPress={() => setSize(item)}
          >
            <Text
              style={[
                styles.sizeText,
                size === item && styles.selectedText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.heading}>Quantity</Text>

      <View style={styles.quantity}>
        <TouchableOpacity
          onPress={() => setQuantity(Math.max(1, quantity - 1))}
        >
          <Text style={styles.quantityButton}>−</Text>
        </TouchableOpacity>

        <Text style={styles.quantityNumber}>{quantity}</Text>

        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
        >
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={onAddToOrder}
      >
        <Text style={styles.addText}>
          Add to Order • ${(4.5 * quantity).toFixed(2)}
        </Text>
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
    fontSize: 18,
    color: '#75452B',
    marginBottom: 20,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 230,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3E2723',
    marginTop: 20,
  },
  subtitle: {
    color: '#8D7770',
    marginTop: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A65E32',
    marginTop: 15,
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#3E2723',
    marginTop: 25,
    marginBottom: 10,
  },
  description: {
    color: '#76645B',
    fontSize: 15,
    lineHeight: 23,
  },
  sizes: {
    flexDirection: 'row',
    gap: 12,
  },
  sizeButton: {
    width: 55,
    height: 45,
    borderRadius: 12,
    backgroundColor: '#F0E5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSize: {
    backgroundColor: '#75452B',
  },
  sizeText: {
    fontSize: 16,
    color: '#75452B',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  quantityButton: {
    fontSize: 28,
    color: '#75452B',
  },
  quantityNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#75452B',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  addText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
