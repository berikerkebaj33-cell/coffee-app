
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView
} from 'react-native';

type Props = {
  onBack: () => void;
};

const faqs = [
  {
    question: 'How can I place an order?',
    answer: 'Choose your favorite coffee, add it to your order and continue to checkout.'
  },
  {
    question: 'How can I track my delivery?',
    answer: 'Open the order tracking screen to see the current status of your delivery.'
  },
  {
    question: 'What payment methods are available?',
    answer: 'You can choose from the payment methods available in the checkout section.'
  },
  {
    question: 'Can I cancel my order?',
    answer: 'Please contact our support team as soon as possible to ask about cancellation.'
  },
];

export default function Support({ onBack }: Props) {
  const [opened, setOpened] = useState<number | null>(null);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.back}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Help & Support</Text>
      <Text style={styles.subtitle}>We're here to help you ☕</Text>

      <View style={styles.hero}>
        <Text style={styles.heroIcon}>💬</Text>
        <Text style={styles.heroTitle}>How can we help?</Text>
        <Text style={styles.heroText}>
          Find answers to common questions below.
        </Text>
      </View>

      <Text style={styles.section}>Frequently Asked Questions</Text>

      {faqs.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.faq}
          activeOpacity={0.8}
          onPress={() =>
            setOpened(opened === index ? null : index)
          }
        >
          <View style={styles.questionRow}>
            <Text style={styles.question}>{item.question}</Text>
            <Text style={styles.arrow}>
              {opened === index ? '−' : '+'}
            </Text>
          </View>

          {opened === index && (
            <Text style={styles.answer}>{item.answer}</Text>
          )}
        </TouchableOpacity>
      ))}

      <Text style={styles.section}>Contact Us</Text>

      <View style={styles.contact}>
        <Text style={styles.contactIcon}>✉️</Text>
        <View>
          <Text style={styles.contactTitle}>Email Support</Text>
          <Text style={styles.contactValue}>support@coffeeapp.com</Text>
        </View>
      </View>

      <View style={styles.contact}>
        <Text style={styles.contactIcon}>📞</Text>
        <View>
          <Text style={styles.contactTitle}>Phone Support</Text>
          <Text style={styles.contactValue}>+7 700 000 0000</Text>
        </View>
      </View>

      <Text style={styles.footer}>Thank you for choosing our coffee shop ❤️</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#171311', padding: 22 },
  back: { marginTop: 25, marginBottom: 25 },
  backText: { color: '#D6A66A', fontSize: 16 },
  title: { color: '#FFF5E9', fontSize: 29, fontWeight: 'bold' },
  subtitle: { color: '#9B8C80', marginTop: 7 },
  hero: {
    backgroundColor: '#49372A', borderRadius: 22,
    padding: 25, alignItems: 'center', marginTop: 25
  },
  heroIcon: { fontSize: 40 },
  heroTitle: { color: '#FFF5E9', fontSize: 21, fontWeight: 'bold', marginTop: 12 },
  heroText: { color: '#D3BBA4', fontSize: 12, marginTop: 8, textAlign: 'center' },
  section: { color: '#FFF5E9', fontSize: 19, fontWeight: 'bold', marginTop: 30, marginBottom: 15 },
  faq: { backgroundColor: '#29211C', borderRadius: 15, padding: 17, marginBottom: 10 },
  questionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  question: { color: '#FFF5E9', fontSize: 13, fontWeight: '600', flex: 1, paddingRight: 10 },
  arrow: { color: '#D6A66A', fontSize: 24 },
  answer: { color: '#B5A69A', fontSize: 12, lineHeight: 20, marginTop: 12 },
  contact: {
    backgroundColor: '#29211C', borderRadius: 15,
    padding: 18, marginBottom: 10,
    flexDirection: 'row', alignItems: 'center'
  },
  contactIcon: { fontSize: 25, marginRight: 15 },
  contactTitle: { color: '#FFF5E9', fontSize: 14, fontWeight: 'bold' },
  contactValue: { color: '#C58B52', fontSize: 12, marginTop: 5 },
  footer: { color: '#9B8C80', textAlign: 'center', marginVertical: 30, fontSize: 11 }
});
