import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import { Audio } from 'expo-av';
import { Audio } from 'expo-audio';
import Layout from '../../components/Layout';

const SongDetailScreen = ({ route }) => {
  const { song } = route.params;

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(song.audio);
    await sound.playAsync();
  };

  return (
    <Layout>
    <View style={styles.container}>
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.lyrics}>{song.lyrics}</Text>
      <Button title="Play Song" onPress={playSound} />
    </View>
    </Layout>
  );
};

export default SongDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  lyrics: {
    fontSize: 16,
    marginBottom: 20,
  },
});
