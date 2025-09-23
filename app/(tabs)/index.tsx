// Import library dan komponen yang dibutuhkan
import { ThemedText } from '@/components/themed-text'; 
import { ThemedView } from '@/components/themed-view'; 
import { StyleSheet, Image } from 'react-native'; 

// Fungsi komponen utama untuk halaman Home
export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* ThemedView kedua = container untuk konten di tengah */}
      <ThemedView style={styles.content}>
        
        {/* ThemedText untuk judul utama */}
        <ThemedText type="title" style={styles.title}>
          Hello Semua!
        </ThemedText>

        {/* ThemedText untuk subtitle */}
        <ThemedText style={styles.subtitle}>
          Selamat datang di aplikasi Expo pertama Anda!
        </ThemedText>

        {/* Tambahkan emoji gambar pakai Image */}
        <Image
          source={{ uri: "https://s.w.org/images/core/emoji/16.0.1/svg/1f389.svg" }}
          style={{ width: 30, height: 30, marginVertical: 10 }}
        />

        {/* ThemedText untuk deskripsi */}
        <ThemedText style={styles.description}>
          Ini adalah halaman pertama yang Anda buat. Mari belajar lebih lanjut tentang React Native dan Expo!
        </ThemedText>

      </ThemedView>
    </ThemedView>
  );
}

// StyleSheet untuk styling komponen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    maxWidth: 300,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
    opacity: 0.8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.7,
  },
});
