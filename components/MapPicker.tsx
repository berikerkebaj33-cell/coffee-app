
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

type MapPickerProps = {
  onBack: () => void;
  onConfirm: (location: {
    latitude: number;
    longitude: number;
  }) => void;
};

export default function MapPicker({
  onBack,
  onConfirm,
}: MapPickerProps) {
  const [region, setRegion] = useState<Region>({
    latitude: 43.2389,
    longitude: 76.8897,
    latitudeDelta: 0.025,
    longitudeDelta: 0.025,
  });

  const [marker, setMarker] = useState({
    latitude: 43.2389,
    longitude: 76.8897,
  });

  const handleMapPress = (event: any) => {
    const coordinate = event.nativeEvent.coordinate;
    setMarker(coordinate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Choose Location</Text>
        <Text style={styles.subtitle}>
          Tap on the map to select your address
        </Text>
      </View>

      <MapView
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={setRegion}
        onPress={handleMapPress}
      >
        <Marker
          coordinate={marker}
          title="Delivery Location"
          description="Your selected address"
          pinColor="red"
        />
      </MapView>

      <View style={styles.bottom}>
        <Text style={styles.locationTitle}>
          📍 Selected Location
        </Text>

        <Text style={styles.coordinates}>
          Latitude: {marker.latitude.toFixed(5)}
        </Text>

        <Text style={styles.coordinates}>
          Longitude: {marker.longitude.toFixed(5)}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onConfirm(marker)}
        >
          <Text style={styles.buttonText}>
            Confirm Location
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
    paddingTop: 55,
    paddingHorizontal: 22,
    paddingBottom: 15,
  },
  back: {
    color: '#6F4E37',
    fontSize: 17,
    marginBottom: 18,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  subtitle: {
    color: '#888',
    fontSize: 14,
    marginTop: 7,
  },
  map: {
    flex: 1,
  },
  bottom: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 12,
  },
  coordinates: {
    color: '#777',
    fontSize: 13,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#6F4E37',
    padding: 17,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 18,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
