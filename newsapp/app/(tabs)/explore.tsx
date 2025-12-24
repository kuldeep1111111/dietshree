import { StyleSheet, FlatList } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

const CATEGORIES = [
  { id: '1', title: 'Technology', icon: 'cpu' },
  { id: '2', title: 'Business', icon: 'chart.bar' },
  { id: '3', title: 'Sports', icon: 'sportscourt' },
  { id: '4', title: 'Entertainment', icon: 'film' },
  { id: '5', title: 'Health', icon: 'heart' },
];

const TRENDING = [
  'AI revolution in 2025',
  'India vs Australia series',
  'Stock market update',
  'New smartphone launches',
];

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0f172a', dark: '#020617' }}
      headerImage={
        <ThemedView style={styles.header}>
          <ThemedText
            type="title"
            style={{ color: '#fff', fontFamily: Fonts.rounded }}>
            Explore News
          </ThemedText>
          <ThemedText style={styles.headerSub}>
            Discover categories & trending topics
          </ThemedText>
        </ThemedView>
      }>
      
      {/* Categories */}
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Categories
      </ThemedText>

      <FlatList
        data={CATEGORIES}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <ThemedView style={styles.categoryCard}>
            <IconSymbol name={item.icon} size={28} color="#2563eb" />
            <ThemedText style={styles.categoryText}>
              {item.title}
            </ThemedText>
          </ThemedView>
        )}
      />

      {/* Trending */}
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Trending
      </ThemedText>

      {TRENDING.map((item, index) => (
        <ThemedView key={index} style={styles.trendingItem}>
          <ThemedText>🔥 {item}</ThemedText>
        </ThemedView>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 180,
    justifyContent: 'center',
    padding: 20,
  },
  headerSub: {
    color: '#cbd5f5',
    marginTop: 6,
  },
  sectionTitle: {
    marginVertical: 12,
  },
  categoryCard: {
    flex: 1,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: Fonts.rounded,
  },
  trendingItem: {
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
});