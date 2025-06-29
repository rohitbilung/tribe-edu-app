import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';


const data = [
  { id: '1', title: 'Khadia', isAvailable: true, icon: 'forest' },
  { id: '2', title: 'Coming Soon', isAvailable: false, icon: 'lock-outline' },
  { id: '3', title: 'Coming Soon', isAvailable: false, icon: 'lock-outline' },
  { id: '4', title: 'Coming Soon', isAvailable: false, icon: 'lock-outline' },
  { id: '5', title: 'Coming Soon', isAvailable: false, icon: 'lock-outline' },
  { id: '6', title: 'Coming Soon', isAvailable: false, icon: 'lock-outline' },
  { id: '7', title: 'Coming Soon', isAvailable: false, icon: 'lock-outline' },
  { id: '8', title: 'Coming Soon', isAvailable: false, icon: 'lock-outline' },
];

// 👇 Move each card into its own functional component so we can safely use hooks
const CardItem = ({ item, index, onPress }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      delay: index * 150,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <TouchableOpacity
        style={[styles.card, !item.isAvailable && styles.cardDisabled]}
        disabled={!item.isAvailable}
        onPress={onPress}
      >
        <MaterialCommunityIcons
          name={item.icon}
          size={30}
          color={item.isAvailable ? 'white' : '#555'}
          style={{ marginBottom: 10 }}
        />
        <Text style={styles.cardText}>{item.title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const MenuScreen = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <CardItem item={item} index={index}
              onPress={() => {
                if (item.title === 'Khadia') {
                  navigation.navigate('Khadia Detail');
                }
              }}
            />
          )}
          contentContainerStyle={{ padding: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Layout>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  card: {
    backgroundColor: '#7B61FF',
    padding: 25,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  cardDisabled: {
    backgroundColor: '#ccc',
  },
  cardText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
