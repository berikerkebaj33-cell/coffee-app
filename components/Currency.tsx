
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { useRates } from '../hooks/useRates';

type CurrencyProps = {
  onBack: () => void;
};

const products = [
  { name: 'Cappuccino', price: 1500, icon: '☕' },
  { name: 'Iced Latte', price: 1800, icon: '🥤' },
  { name: 'Espresso', price: 1200, icon: '☕' },
  { name: 'Green Tea', price: 1000, icon: '🍵' },
  { name: 'Chocolate Cake', price: 1700, icon: '🍰' },
];

const currencies = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', symbol: '$' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', symbol: '€' },
  { code: 'RUB', name: 'Russian Ruble', flag: '🇷🇺', symbol: '₽' },
];

export default function Currency({ onBack }: CurrencyProps) {
  const { rates, loading, error, refresh } = useRates();

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Back */}
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>← Back to Home</Text>
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.title}>Currency Exchange 💱</Text>
      <Text style={styles.subtitle}>
        Кофе бағасын басқа валюталарға айналдыру
      </Text>

      {/* Product selection */}
      <Text style={styles.sectionTitle}>Choose your product</Text>

      {products.map(product => {
        const active = selectedProduct.name === product.name;

        return (
          <TouchableOpacity
            key={product.name}
            style={[
              styles.productCard,
              active && styles.activeProduct,
            ]}
            onPress={() => setSelectedProduct(product)}
          >
            <Text style={styles.productIcon}>{product.icon}</Text>

            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>
                {product.price.toLocaleString('en-US')} ₸
              </Text>
            </View>

            <Text style={styles.check}>
              {active ? '✓' : '○'}
            </Text>
          </TouchableOpacity>
        );
      })}

      {/* Selected price */}
      <View style={styles.priceCard}>
        <Text style={styles.cardLabel}>Selected product</Text>
        <Text style={styles.selectedName}>
          {selectedProduct.name}
        </Text>
        <Text style={styles.price}>
          {selectedProduct.price.toLocaleString('en-US')} ₸
        </Text>
        <Text style={styles.cardDescription}>
          Негізгі баға — Қазақстан теңгесі
        </Text>
      </View>

      {/* Exchange rates */}
      <Text style={styles.sectionTitle}>Converted price</Text>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#A66B42"
          style={styles.loader}
        />
      ) : error ? (
        <View style={styles.errorBox}>
          <Text style={styles.error}>{error}</Text>
          <TouchableOpacity onPress={refresh}>
            <Text style={styles.refreshText}>Қайта көру</Text>
          </TouchableOpacity>
        </View>
      ) : (
        currencies.map(currency => {
          const rate = rates[currency.code];

          const convertedPrice = rate
            ? selectedProduct.price * rate
            : null;

          return (
            <View key={currency.code} style={styles.currencyCard}>
              <Text style={styles.flag}>{currency.flag}</Text>

              <View style={styles.currencyInfo}>
                <Text style={styles.currencyCode}>
                  {currency.code}
                </Text>
                <Text style={styles.currencyName}>
                  {currency.name}
                </Text>
              </View>

              <Text style={styles.convertedPrice}>
                {convertedPrice !== null
                  ? `${currency.symbol}${convertedPrice.toFixed(2)}`
                  : 'N/A'}
              </Text>
            </View>
          );
        })
      )}

      {/* Refresh */}
      <TouchableOpacity
        style={styles.button}
        onPress={refresh}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Жүктелуде...' : '↻ Refresh Exchange Rates'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.note}>
        Exchange rates provided by ExchangeRate-API
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5F0',
    padding: 20,
  },

  backButton: {
    backgroundColor: '#E9D9C9',
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 40,
    marginBottom: 20,
  },

  backText: {
    color: '#3B2920',
    fontSize: 15,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3B2920',
  },

  subtitle: {
    color: '#888',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#3B2920',
    marginTop: 15,
    marginBottom: 15,
  },

  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },

  activeProduct: {
    borderColor: '#A66B42',
    backgroundColor: '#F5E9DC',
  },

  productIcon: {
    fontSize: 28,
    marginRight: 14,
  },

  productInfo: {
    flex: 1,
  },

  productName: {
    color: '#3B2920',
    fontSize: 15,
    fontWeight: 'bold',
  },

  productPrice: {
    color: '#A66B42',
    fontSize: 13,
    marginTop: 4,
  },

  check: {
    color: '#A66B42',
    fontSize: 22,
    fontWeight: 'bold',
  },

  priceCard: {
    backgroundColor: '#3B2920',
    padding: 22,
    borderRadius: 18,
    marginTop: 15,
    marginBottom: 20,
  },

  cardLabel: {
    color: '#E5D4C5',
    fontSize: 14,
  },

  selectedName: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 8,
  },

  price: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },

  cardDescription: {
    color: '#CDB9A8',
    fontSize: 12,
  },

  loader: {
    marginVertical: 30,
  },

  currencyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  flag: {
    fontSize: 28,
    marginRight: 14,
  },

  currencyInfo: {
    flex: 1,
  },

  currencyCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B2920',
  },

  currencyName: {
    fontSize: 12,
    color: '#888',
    marginTop: 3,
  },

  convertedPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A66B42',
  },

  button: {
    backgroundColor: '#A66B42',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },

  errorBox: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },

  error: {
    color: '#C0392B',
    marginBottom: 10,
  },

  refreshText: {
    color: '#A66B42',
    fontWeight: 'bold',
  },

  note: {
    textAlign: 'center',
    color: '#999',
    fontSize: 11,
    marginVertical: 20,
  },
});
