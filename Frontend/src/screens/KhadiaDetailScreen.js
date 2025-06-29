import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';

const cardData = [
  { id: '1', title: 'History', icon: 'book-open-page-variant', isAvailable: true },
  { id: '2', title: 'Songs and Instrument', icon: 'music', isAvailable: true },
  { id: '3', title: 'Tools and Weapons', icon: 'hammer-screwdriver', isAvailable: true },
  { id: '4', title: 'Learn Language', icon: 'translate', isAvailable: true },
  { id: '5', title: 'Coming More', icon: 'lock-outline', isAvailable: false },
  { id: '6', title: 'Coming More', icon: 'lock-outline', isAvailable: false },
];

const KhadiaDetailScreen = () => {
    const navigation = useNavigation()
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, !item.isAvailable && styles.cardDisabled]}
      disabled={!item.isAvailable}
      onPress={() => {
        if (item.isAvailable && item.title == 'History') {
          navigation.navigate('History')
        }
        if (item.isAvailable && item.title == 'Songs and Instrument') {
          navigation.navigate('SongsAndInstruments')
        }
      }}
    >
      <MaterialCommunityIcons
        name={item.icon}
        size={30}
        color={item.isAvailable ? '#fff' : '#666'}
        style={{ marginBottom: 10 }}
      />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <Layout>
    <View style={styles.container}>
            <Text style={styles.title}>Khadia</Text>
      <FlatList
        data={cardData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </Layout>
  );
};

export default KhadiaDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#7B61FF',
    flex: 1,
    marginHorizontal: 6,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    maxWidth: 110,
  },
  cardDisabled: {
    backgroundColor: '#dcdcdc',
  },
  cardText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  title : {
    fontWeight:1,
    fontSize:24,
    textAlign: 'center'
  }

});
