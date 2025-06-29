import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  PanResponder,
} from 'react-native';
import Layout from '../components/Layout';

const MOCK_BOOK = Array.from({ length: 90 }, (_, i) =>
  `📖 Page ${i + 1}\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. 
   Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,`
);

const HistoryScreen = () => {
  const [page, setPage] = useState(1);
  const totalPages = MOCK_BOOK.length;

  const goToPreviousPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Setup PanResponder for swipe gestures
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dx) > 20, // horizontal swipe
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 50) {
          goToPreviousPage();
        } else if (gestureState.dx < -50) {
          goToNextPage();
        }
      },
    })
  ).current;

  return (
    <Layout>
    <View style={styles.container} {...panResponder.panHandlers}>
      <Text style={styles.pageHeader}>
        Page {page} / {totalPages}
      </Text>
      <ScrollView style={styles.contentBox}>
        <Text style={styles.content}>{MOCK_BOOK[page - 1]}</Text>
      </ScrollView>
      <View style={styles.nav}>
        <Button title="Previous" onPress={goToPreviousPage} disabled={page === 1} />
        <Button title="Next" onPress={goToNextPage} disabled={page === totalPages} />
      </View>
    </View>
    </Layout>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f4ff',
  },
  pageHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  contentBox: {
    flex: 1,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
