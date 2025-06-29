import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.logoRow}>
            <Image
              source={require('../assets/logo.jpg')}
              style={styles.logo}
            />
            <Text style={styles.title}>Welcome to{'\n'}The Tribe!!!</Text>
          </View>

          <Text style={styles.subtitle}>
            Welcome to the Living Tapestry of Adivasi Culture—where echoes of ancient rhythms
            still pulse through forested landscapes, and generations pass down stories not through
            books, but through songs, dance, and daily life. This space is a celebration of India’s
            indigenous heritage: from their deep connection with nature to the vibrant flavors,
            rituals, music, and wisdom that continue to shape their way of life today.
          </Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>

    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(135deg, #FAD0C4, #FFD1FF)', // background colors — use Expo's LinearGradient if needed
    alignItems: 'center',
    marginTop: 10,
    padding: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 50,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF5C5C',
    textAlign: 'left',
  },

  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',        // changed from 'center'
    alignSelf: 'stretch',  // aligns the whole block to the left inside parent
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#7B61FF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
