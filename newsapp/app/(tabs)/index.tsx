import { StyleSheet, FlatList, Image, View, Dimensions } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ParallaxScrollView from '@/components/parallax-scroll-view';

const { width } = Dimensions.get('window');

const NEWS_DATA = [
  {
    id: '1',
    title: 'India launches new space mission successfully',
    source: 'BBC News',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
  },
  {
    id: '2',
    title: 'AI is changing the future of mobile apps',
    source: 'TechCrunch',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  },
  {
    id: '3',
    title: 'Stock market hits new all-time high',
    source: 'Economic Times',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
  },
  {
    id: '4',
    title: 'AI is changing the future of mobile apps',
    source: 'TechCrunch',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  },
  {
    id: '5',
    title: 'AI is changing the future of mobile apps',
    source: 'TechCrunch',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  },
  {
    id: '6',
    title: 'AI is changing the future of mobile apps',
    source: 'TechCrunch',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffe608ff', dark: '#ff2903ff' }}
      headerImage={
        <ThemedView style={styles.header}>
          <ThemedText type="title" style={styles.headerText}>
            📰 Daily News
          </ThemedText>
          <ThemedText style={styles.headerSub}>
            Stay updated with latest headlines With Latest News With Latest News
          </ThemedText>
        </ThemedView>
      }
    >
      {/* Image Carousel */}
      <FlatList
        data={NEWS_DATA}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={{ uri: item.image }} style={styles.carouselImage} />
            <ThemedText style={styles.carouselTitle} numberOfLines={2}>
              {item.title}
            </ThemedText>
          </View>
        )}
      />

      {/* Breaking News */}
      <ThemedView style={styles.breakingCard}>
        <Image source={{ uri: NEWS_DATA[0].image }} style={styles.breakingImage} />
        <ThemedText type="subtitle" style={styles.breakingTitle}>
          {NEWS_DATA[0].title}
        </ThemedText>
        <ThemedText style={styles.source}>{NEWS_DATA[0].source}</ThemedText>
      </ThemedView>

      {/* Latest News */}
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        Latest News
      </ThemedText>
      <FlatList
        data={NEWS_DATA}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <ThemedView style={styles.newsRow}>
            <Image source={{ uri: item.image }} style={styles.newsImage} />
            <ThemedView style={styles.newsContent}>
              <ThemedText numberOfLines={2} style={styles.newsTitle}>
                {item.title}
              </ThemedText>
              <ThemedText style={styles.source}>{item.source}</ThemedText>
            </ThemedView>
          </ThemedView>
        )}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 180,
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    color: '#fff',
  },
  headerSub: {
    color: '#cbd5f5',
    marginTop: 4,
  },
  carouselItem: {
    width: width * 0.8,
    marginHorizontal: 10,
    borderRadius: 14,
    overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: 180,
  },
  carouselTitle: {
    padding: 10,
    fontSize: 14,
  },
  breakingCard: {
    marginBottom: 16,
    borderRadius: 14,
    overflow: 'hidden',
  },
  breakingImage: {
    width: '100%',
    height: 180,
  },
  breakingTitle: {
    padding: 10,
  },
  sectionTitle: {
    marginVertical: 10,
  },
  newsRow: {
    flexDirection: 'row',
    marginBottom: 12,
    gap: 10,
  },
  newsImage: {
    width: 90,
    height: 70,
    borderRadius: 10,
  },
  newsContent: {
    flex: 1,
    justifyContent: 'center',
  },
  newsTitle: {
    fontSize: 14,
  },
  source: {
    fontSize: 12,
    opacity: 0.6,
    marginTop: 4,
  },
});
