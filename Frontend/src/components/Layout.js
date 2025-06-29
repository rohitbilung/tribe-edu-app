import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Pressable,
    Modal,
    TouchableOpacity,
    Platform, 
    StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Layout = ({ children }) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Image source={require('../assets/logo.jpg')} style={styles.logo} />
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.title}>The Tribe</Text>
                        <Text style={styles.tagline}>Where stories are woven, not written.</Text>
                    </View>
                </View>

                {/* Main Content */}
                <View style={styles.content}>{children}</View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Pressable onPress={() => setModalVisible(true)}>
                        <Text style={styles.footerItem}>Contact Us</Text>
                    </Pressable>
                    <Text style={styles.footerItem}>© 2025 The Tribe</Text>
                    <Text style={styles.footerItem}>Terms & Conditions</Text>
                </View>

                {/* Contact Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>Contact Us</Text>
                            <Text>Email: support@thetribe.com</Text>
                            <Text>Phone: +91-123-456-7890</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={styles.closeButton}
                            >
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
};

export default Layout;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
    },
    headerTextContainer: {
        flexDirection: 'column',
    },

    tagline: {
        fontSize: 12,
        color: '#777',
        marginTop: 2,
    },

    logo: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#FF5C5C',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#eee',
    },
    footerItem: {
        fontSize: 13,
        color: '#666',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        alignItems: 'center',
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 15,
        backgroundColor: '#7B61FF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
