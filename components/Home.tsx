
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

type HomeProps = {
  onSelectCoffee: () => void;
  onLogin: () => void;
  onSearch: () => void;
  onFavorites: () => void;
};

const categories = ['All', 'Coffee', 'Tea', 'Dessert'];

const products = [
  { name: 'Cappuccino', description: 'Rich and creamy coffee', price: '₸ 1,500', icon: '☕', category: 'Coffee' },
  { name: 'Iced Latte', description: 'Cold refreshing coffee', price: '₸ 1,800', icon: '🥤', category: 'Coffee' },
  { name: 'Espresso', description: 'Strong classic coffee', price: '₸ 1,200', icon: '☕', category: 'Coffee' },
  { name: 'Green Tea', description: 'Fresh and relaxing tea', price: '₸ 1,000', icon: '🍵', category: 'Tea' },
  { name: 'Chocolate Cake', description: 'Sweet chocolate dessert', price: '₸ 1,700', icon: '🍰', category: 'Dessert' },
];

export default function Home({
  onSelectCoffee,
  onLogin,
  onSearch,
  onFavorites,
}: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter(item =>
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>Coffee House ☕</Text>
          <Text style={styles.location}>📍 Almaty, Kazakhstan</Text>
        </View>

        <TouchableOpacity style={styles.profileButton} onPress={onLogin}>
          <Text style={styles.profileIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome */}
      <Text style={styles.title}>Good morning! ☀️</Text>
      <Text style={styles.subtitle}>
        What would you like to drink today?
      </Text>

      {/* Navigation */}
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navButton} onPress={onSearch}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={onFavorites}>
          <Text style={styles.navIcon}>❤️</Text>
          <Text style={styles.navText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={onLogin}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Special Offer */}
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Special Offer</Text>
          <Text style={styles.bannerText}>
            Get 20% off your first order!
          </Text>

          <TouchableOpacity
            style={styles.orderButton}
            onPress={onSelectCoffee}
          >
            <Text style={styles.orderButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.coffeeIcon}>☕</Text>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categories}>
          {categories.map(item => (
            <TouchableOpacity
              key={item}
              style={[
                styles.category,
                selectedCategory === item && styles.activeCategory,
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item && styles.activeCategoryText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Popular Products */}
      <Text style={styles.sectionTitle}>Popular Drinks</Text>

      <View style={styles.products}>
        {filteredProducts.map(item => (
          <View key={item.name} style={styles.product}>
            <Text style={styles.productIcon}>{item.icon}</Text>

            <Text style={styles.productName}>{item.name}</Text>

            <Text style={styles.description}>
              {item.description}
            </Text>

            <Text style={styles.price}>{item.price}</Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={onSelectCoffee}
            >
              <Text style={styles.buttonText}>+ Add</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Coffee House ☕</Text>
        <Text style={styles.footerSub}>
          Made with love for coffee lovers
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F2',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 45,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#593820',
  },

  location: {
    color: '#999',
    marginTop: 7,
    fontSize: 13,
  },

  profileButton: {
    backgroundColor: '#F0E3D5',
    width: 48,
    height: 48,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileIcon: {
    fontSize: 23,
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
    marginBottom: 22,
  },

  navigation: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },

  navButton: {
    flex: 1,
    backgroundColor: '#F0E3D5',
    paddingVertical: 13,
    borderRadius: 13,
    alignItems: 'center',
  },

  navIcon: {
    fontSize: 21,
    marginBottom: 5,
  },

  navText: {
    color: '#593820',
    fontWeight: '600',
    fontSize: 12,
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
    fontSize: 13,
  },

  coffeeIcon: {
    fontSize: 55,
  },

  orderButton: {
    backgroundColor: '#D6A36A',
    padding: 11,
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'flex-start',
  },

  orderButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#352317',
    marginTop: 28,
    marginBottom: 15,
  },

  categories: {
    flexDirection: 'row',
    gap: 10,
  },

  category: {
    backgroundColor: '#F0E3D5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
  },

  activeCategory: {
    backgroundColor: '#593820',
  },

  categoryText: {
    color: '#593820',
    fontWeight: '600',
  },

  activeCategoryText: {
    color: '#FFF',
  },

  products: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginBottom: 25,
  },

  product: {
    backgroundColor: '#FFF',
    width: '47%',
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
    fontSize: 16,
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

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  footer: {
    alignItems: 'center',
    paddingVertical: 25,
  },

  footerText: {
    color: '#593820',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footerSub: {
    color: '#999',
    marginTop: 5,
    fontSize: 12,
  },
});
