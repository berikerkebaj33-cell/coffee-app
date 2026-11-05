
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

type HomeProps = {
  onSelectCoffee: () => void;
};

export default function Home({ onSelectCoffee }: HomeProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Coffee House ☕</Text>
        <Text style={styles.location}>Almaty, Kazakhstan</Text>
      </View>

      <Text style={styles.title}>Good morning! ☀️</Text>
      <Text style={styles.subtitle}>
        What would you like to drink today?
      </Text>

      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Special Offer</Text>
          <Text style={styles.bannerText}>
            Get 20% off your first order
          </Text>

          <TouchableOpacity
            style={styles.orderButton}
            onPress={onSelectCoffee}
          >
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.coffeeIcon}>☕</Text>
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>

      <View style={styles.categories}>
        {['All', 'Coffee', 'Tea', 'Dessert'].map((item) => (
          <TouchableOpacity key={item} style={styles.category}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Popular Coffee</Text>

      <View style={styles.products}>
        <View style={styles.product}>
          <Text style={styles.productIcon}>☕</Text>
          <Text style={styles.productName}>Cappuccino</Text>
          <Text style={styles.description}>
            Rich and creamy coffee
          </Text>
          <Text style={styles.price}>₸ 1,500</Text>

          <TouchableOpacity
            style={styles.addButton}
            onPress={onSelectCoffee}
          >
            <Text style={styles.buttonText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.product}>
          <Text style={styles.productIcon}>🥤</Text>
          <Text style={styles.productName}>Iced Latte</Text>
          <Text style={styles.description}>
            Cold refreshing coffee
          </Text>
          <Text style={styles.price}>₸ 1,800</Text>

          <TouchableOpacity
            style={styles.addButton}
            onPress={onSelectCoffee}
          >
            <Text style={styles.buttonText}>+ Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F2',
    padding: 20,
  },
  header: {
    marginTop: 35,
    marginBottom: 30,
  },
  logo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#593820',
  },
  location: {
    color: '#999',
    marginTop: 5,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#352317',
  },
  subtitle: {
    fontSize: 15,
    color: '#888',
    marginTop: 8,
    marginBottom: 25,
  },
  banner: {
    backgroundColor: '#593820',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  bannerText: {
    color: '#E8D5C4',
    marginTop: 8,
  },
  coffeeIcon: {
    fontSize: 55,
  },
  orderButton: {
    backgroundColor: '#D6A36A',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#352317',
    marginTop: 30,
    marginBottom: 15,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    backgroundColor: '#F0E3D5',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  categoryText: {
    color: '#593820',
    fontWeight: '600',
  },
  products: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 30,
  },
  product: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 18,
    elevation: 3,
  },
  productIcon: {
    fontSize: 45,
    textAlign: 'center',
    marginBottom: 12,
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#352317',
  },
  description: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#593820',
    marginTop: 12,
  },
  addButton: {
    backgroundColor: '#593820',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },
});
