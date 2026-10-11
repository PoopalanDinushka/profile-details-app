import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#111827" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('./assets/new_profile.png')}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Poopalan Dinushka</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Text style={styles.icon}>✉ </Text>
          <Text style={styles.value}>poopalan.dinushka@gmail.com</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Text style={styles.icon}>★ </Text>
          <Text style={styles.value}>{points}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setPoints((current) => current + 1)}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    backgroundColor: '#111827',
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  headerTitle: {
    color: '#f9fafb',
    fontSize: 20,
    fontWeight: '700',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 26,
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 3,
    borderColor: '#d1d5db',
  },
  divider: {
    height: 1,
    backgroundColor: '#d1d5db',
    marginHorizontal: 24,
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 28,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginTop: 16,
  },
  value: {
    fontSize: 16,
    color: '#374151',
    marginTop: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
    color: '#f59e0b',
    marginTop: 6,
  },
  fab: {
    position: 'absolute',
    bottom: 28,
    right: 24,
    backgroundColor: '#111827',
    width: 58,
    height: 58,
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  fabIcon: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 30,
  },
});