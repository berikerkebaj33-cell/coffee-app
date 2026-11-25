
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

type AddressProps = {
  onBack: () => void;
  onContinue: (address: string) => void;
};

export default function Address({
  onBack,
  onContinue,
}: AddressProps) {
  const [city, setCity] = useState('Almaty');
  const [street, setStreet] = useState('');
  const [building, setBuilding] = useState('');
  const [apartment, setApartment] = useState('');
  const [comment, setComment] = useState('');

  const handleContinue = () => {
    if (!street.trim() || !building.trim()) {
      alert('Please enter your street and building number');
      return;
    }

    const fullAddress =
      `${city}, ${street}, ${building}` +
      (apartment ? `, Apt ${apartment}` : '') +
      (comment ? `, ${comment}` : '');

    onContinue(fullAddress);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Delivery Address</Text>
      <Text style={styles.subtitle}>
        Where should we deliver your coffee?
      </Text>

      <View style={styles.mapBox}>
        <Text style={styles.mapIcon}>📍</Text>
        <Text style={styles.mapTitle}>Almaty, Kazakhstan</Text>
        <Text style={styles.mapText}>
          Choose your location on the map
        </Text>
      </View>

      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Enter your city"
      />

      <Text style={styles.label}>Street Name</Text>
      <TextInput
        style={styles.input}
        value={street}
        onChangeText={setStreet}
        placeholder="Example: Abay Avenue"
      />

      <View style={styles.row}>
        <View style={styles.half}>
          <Text style={styles.label}>Building</Text>
          <TextInput
            style={styles.input}
            value={building}
            onChangeText={setBuilding}
            placeholder="House number"
          />
        </View>

        <View style={styles.half}>
          <Text style={styles.label}>Apartment</Text>
          <TextInput
            style={styles.input}
            value={apartment}
            onChangeText={setApartment}
            placeholder="Optional"
          />
        </View>
      </View>

      <Text style={styles.label}>Delivery Instructions</Text>
      <TextInput
        style={[styles.input, styles.comment]}
        value={comment}
        onChangeText={setComment}
        placeholder="Floor, entrance, door code..."
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>
          Continue to Map →
        </Text>
      </TouchableOpacity>
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
  mapBox: {
    height: 145,
    backgroundColor: '#E8DFD3',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  mapIcon: {
    fontSize: 35,
  },
  mapTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3E2723',
    marginTop: 7,
  },
  mapText: {
    fontSize: 13,
    color: '#777',
    marginTop: 5,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3E2723',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#E5DED5',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  half: {
    flex: 1,
  },
  comment: {
    height: 90,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#6F4E37',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
