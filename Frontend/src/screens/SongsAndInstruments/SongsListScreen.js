import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { songs } from '../../data/songs';
import Layout from '../../components/Layout';

const SongsListScreen = () => {
  const navigation = useNavigation();
  return (
    <Layout>
    <FlatList
      data={songs}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('SongDetail', { song: item })}
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
    </Layout>
  );
};

export default SongsListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  item: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});
