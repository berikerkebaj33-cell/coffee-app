
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

type DeliveryProps = {
  onBack?: () => void;
  onHome?: () => void;
};

export default function Delivery({
  onBack = () => {},
  onHome = () => {},
}: DeliveryProps) {
  const steps = [
    'Order Confirmed',
    'Preparing Your Coffee',
    'Out for Delivery',
    'Delivered',
  ];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={onBack}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Delivery Status</Text>
      <Text style={styles.subtitle}>
        Your coffee is on its way!
      </Text>

      <View style={styles.iconContainer}>
        <Text style={styles.coffeeIcon}>☕</Text>
      </View>

      <Text style={styles.arrival}>15–20 min</Text>
      <Text style={styles.arrivalText}>
        Estimated Delivery Time
      </Text>

      <View style={styles.card}>
        <Text style={styles.heading}>Delivery Progress</Text>

        {steps.map((step, index) => (
          <View style={styles.step} key={step}>
            <View
              style={[
                styles.circle,
                index <= 1 && styles.activeCircle,
              ]}
            >
              <Text style={styles.check}>
                {index <= 1 ? '✓' : ''}
              </Text>
            </View>

            <View style={styles.stepInfo}>
              <Text
                style={[
                  styles.stepText,
                  index <= 1 && styles.activeText,
                ]}
              >
                {step}
              </Text>

              {index === 0 && (
                <Text style={styles.time}>Confirmed</Text>
              )}

              {index === 1 && (
                <Text style={styles.time}>In progress</Text>
              )}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.courier}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>

        <View style={styles.courierInfo}>
          <Text style={styles.courierName}>John Doe</Text>
          <Text style={styles.courierRole}>
            Delivery Partner
          </Text>
        </View>

        <Text style={styles.phone}>☎</Text>
      </View>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={onHome}
      >
        <Text style={styles.homeText}>Back to Home</Text>
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
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  subtitle: {
    fontSize: 15,
    color: '#8D7770',
    marginTop: 7,
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F0E5DB',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  coffeeIcon: {
    fontSize: 55,
  },
  arrival: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#75452B',
    textAlign: 'center',
    marginTop: 20,
  },
  arrivalText: {
    color: '#8D7770',
    textAlign: 'center',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginTop: 30,
    elevation: 3,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 25,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E5D6C9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: '#75452B',
  },
  check: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  stepInfo: {
    marginLeft: 15,
  },
  stepText: {
    color: '#9B8B83',
    fontSize: 15,
    fontWeight: '600',
  },
  activeText: {
    color: '#3E2723',
  },
  time: {
    color: '#A65E32',
    fontSize: 12,
    marginTop: 4,
  },
  courier: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8D5C5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontWeight: 'bold',
    color: '#75452B',
  },
  courierInfo: {
    flex: 1,
    marginLeft: 12,
  },
  courierName: {
    fontWeight: 'bold',
    color: '#3E2723',
    fontSize: 16,
  },
  courierRole: {
    color: '#8D7770',
    fontSize: 13,
    marginTop: 4,
  },
  phone: {
    fontSize: 25,
    color: '#75452B',
  },
  homeButton: {
    backgroundColor: '#75452B',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 35,
  },
  homeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
