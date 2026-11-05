
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const coffees = [
  { id: 1, name: 'Caffe Mocha', description: 'Deep Foam', price: '4.53', icon: '☕' },
  { id: 2, name: 'Flat White', description: 'Espresso', price: '3.53', icon: '🥤' },
  { id: 3, name: 'Cappuccino', description: 'Milk Coffee', price: '4.00', icon: '☕' },
  { id: 4, name: 'Latte', description: 'Smooth Coffee', price: '3.80', icon: '🥛' },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.locationLabel}>Location</Text>
          <Text style={styles.location}>Almaty, Kazakhstan⌄</Text>
        </View>

        <View style={styles.searchRow}>
          <TextInput
            placeholder="⌕  Search coffee"
            placeholderTextColor="#BBBBBB"
            style={styles.search}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>☷</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.promo}>
          <Text style={styles.promoTag}>Promo</Text>
          <Text style={styles.promoText}>
            Buy one get{'\n'}one FREE
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Choose your coffee</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          {['All Coffee', 'Macchiato', 'Latte', 'Americano'].map(
            (category, index) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.category,
                  index === 0 && styles.activeCategory,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    index === 0 && styles.activeCategoryText,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ),
          )}
        </ScrollView>

        <View style={styles.coffeeGrid}>
          {coffees.map((coffee) => (
            <View key={coffee.id} style={styles.card}>
              <View style={styles.coffeeImage}>
                <Text style={styles.coffeeIcon}>{coffee.icon}</Text>
              </View>

              <Text style={styles.coffeeName}>{coffee.name}</Text>
              <Text style={styles.coffeeDescription}>
                {coffee.description}
              </Text>

              <View style={styles.priceRow}>
                <Text style={styles.price}>${coffee.price}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>⌂</Text>
        <Text style={styles.navItem}>♡</Text>
        <Text style={styles.navItem}>▢</Text>
        <Text style={styles.navItem}>♧</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor: '#171717',
    paddingTop: 60,
    paddingHorizontal: 22,
    paddingBottom: 25,
  },
  locationLabel: {
    color: '#AAAAAA',
    fontSize: 12,
  },
  location: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  searchRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 25,
    gap: 12,
  },
  search: {
    flex: 1,
    backgroundColor: '#292929',
    color: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 48,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#C98252',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  promo: {
    backgroundColor: '#D18A5B',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 22,
    marginBottom: 25,
  },
  promoTag: {
    color: '#FFFFFF',
    backgroundColor: '#E54F55',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden',
    fontSize: 12,
  },
  promoText: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222222',
    marginHorizontal: 20,
    marginBottom: 15,
  },
  categories: {
    paddingLeft: 20,
    marginBottom: 20,
    maxHeight: 42,
  },
  category: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 9,
    backgroundColor: '#EEEEEE',
  },
  activeCategory: {
    backgroundColor: '#C98252',
  },
  categoryText: {
    color: '#555555',
    fontSize: 12,
  },
  activeCategoryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  coffeeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 25,
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },
  coffeeImage: {
    height: 115,
    backgroundColor: '#F0E6DE',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  coffeeIcon: {
    fontSize: 55,
  },
  coffeeName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },
  coffeeDescription: {
    color: '#999999',
    fontSize: 12,
    marginTop: 4,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  addButton: {
    backgroundColor: '#C98252',
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: '#FFFFFF',
    fontSize: 23,
  },
  bottomNav: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  navItem: {
    fontSize: 25,
    color: '#C98252',
  },
});
