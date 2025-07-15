import { usePost } from "@/components/PostContext";
import { router } from "expo-router";
import { useEffect } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CommunityScreen() {
  const { posts, likePost, syncLikes } = usePost();

  useEffect(() => {
    syncLikes(); // açılışta AsyncStorage'dan beğeni sayıları yükleniyor
  }, []);

  const handleLike = (id: number) => {
    likePost(id); // beğen ve kaydet
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Topluluk Paylaşımları</Text>
      <TouchableOpacity
      style={{ backgroundColor: '#4CAF50', padding :10, borderRadius: 6, marginBottom: 12}}
      onPress={() => router.push('/add-post')}>
        <Text style = {{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Yeni Post Ekle</Text>
      </TouchableOpacity>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Text style={styles.username}>@{item.username}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.content}>{item.content}</Text>
            <TouchableOpacity
              style={styles.likeButton}
              onPress={() => handleLike(item.id)}
            >
              <Text style={styles.likeText}>Beğen ({item.likes})</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  postCard: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 3,
  },
  username: {
    fontWeight: "bold",
    color: "#0277bd",
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  likeButton: {
    alignSelf: "flex-start",
    backgroundColor: "#ef5350",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  likeText: {
    color: "white",
    fontWeight: "bold",
  },
});
