
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import MapView, {
  Marker,
  Polyline,
} from 'react-native-maps';

type OrderTrackingProps = {
  onBack: () => void;
  onFinish: () => void;
};

const cafe = {
  latitude: 43.2389,
  longitude: 76.8897,
};

const courier = {
  latitude: 43.2420,
  longitude: 76.8970,
};

const customer = {
  latitude: 43.2460,
  longitude: 76.9050,
};

export default function OrderTracking({
  onBack,
  onFinish,
}: OrderTrackingProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Track Your Order</Text>
        <Text style={styles.subtitle}>
          Your coffee is on its way!
        </Text>
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.2420,
          longitude: 76.8970,
          latitudeDelta: 0.025,
          longitudeDelta: 0.025,
        }}
      >
        <Marker coordinate={cafe} title="Coffee Shop">
          <Text style={styles.mapEmoji}>☕</Text>
        </Marker>

        <Marker coordinate={courier} title="Your Courier">
          <Text style={styles.mapEmoji}>🛵</Text>
        </Marker>

        <Marker coordinate={customer} title="Your Address">
          <Text style={styles.mapEmoji}>📍</Text>
        </Marker>

        <Polyline
          coordinates={[cafe, courier, customer]}
          strokeColor="#6F4E37"
          strokeWidth={5}
        />
      </MapView>

      <View style={styles.bottom}>
        <View style={styles.statusRow}>
          <View style={styles.statusDot} />
          <Text style={styles.status}>
            OUT FOR DELIVERY
          </Text>
        </View>

        <Text style={styles.heading}>
          Your order is on the way!
        </Text>

        <Text style={styles.description}>
          The courier has picked up your coffee
          and is heading to your address.
        </Text>

        <View style={styles.info}>
          <Text style={styles.infoIcon}>🛵</Text>
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>
              Your Courier
            </Text>
            <Text style={styles.infoSubtitle}>
              Delivering your coffee
            </Text>
          </View>
          <Text style={styles.time}>15–20 min</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={onFinish}
        >
          <Text style={styles.buttonText}>
            Complete Demo Order
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
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 22,
    paddingBottom: 15,
  },
  back: {
    color: '#6F4E37',
    fontSize: 17,
    marginBottom: 15,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 6,
  },
  map: {
    flex: 1,
  },
  mapEmoji: {
    fontSize: 27,
  },
  bottom: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#27AE60',
    marginRight: 8,
  },
  status: {
    color: '#27AE60',
    fontSize: 13,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  description: {
    color: '#888',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F5F0',
    padding: 14,
    borderRadius: 14,
    marginTop: 20,
  },
  infoIcon: {
    fontSize: 30,
    marginRight: 12,
  },
  infoText: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  infoSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  time: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6F4E37',
  },
  button: {
    backgroundColor: '#6F4E37',
    padding: 17,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
