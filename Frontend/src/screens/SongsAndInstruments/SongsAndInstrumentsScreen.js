import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../../components/Layout';

const SongsAndInstrumentsScreen = () => {
    const navigation = useNavigation();

    return (
        <Layout>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('SongsList')}
                >
                    <Text style={styles.cardText}>Songs</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('InstrumentsList')}
                >
                    <Text style={styles.cardText}>Instruments</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    );
};

export default SongsAndInstrumentsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        // justifyContent: 'center',
    },
    card: {
        backgroundColor: '#7B61FF',
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        alignItems: 'center',
    },
    cardText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
