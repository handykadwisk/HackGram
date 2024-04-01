import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Card({ post, idx }) {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://source.unsplash.com/random/300x200?sig=${post._id}",
            }}
            style={styles.avatar}
          />
          <Text style={styles.username}>{post.author.name}</Text>
        </View>
        <Image
          source={{
            uri: "https://source.unsplash.com/random/300x200?sig=${idx++}",
          }}
          style={styles.image}
        />
        <View style={styles.footer}>
          <View style={styles.comment}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome name="heart-o" size={25} color="black" />
              <Text style={styles.counter}>200</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome name="comment-o" size={25} color="black" />
              <Text style={styles.counter}>200</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.caption}>{post.content} </Text>
          <Text style={styles.desc}>{post.tags}</Text>
          <Text style={styles.date}>{post.createdAt}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  absoluteRight: {
    position: "absolute",
    right: 0,
    marginTop: 25,
  },
  actionButton: {
    width: 50,
    height: 30,
    borderRadius: 25,
    flexDirection: "row",
    marginRight: 20,
  },
  username: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 500,
  },
  footer: {
    padding: 10,
  },
  caption: {
    fontWeight: "bold",
    marginTop: 1,
  },
  desc: {
    marginTop: 5,
    fontStyle: "Helvetica",
  },
  date: {
    marginTop: 5,
    fontSize: 12,
    fontStyle: "italic",
    color: "gray",
  },
  counter: {
    marginLeft: 5, // Jarak antara ikon dan teks
    fontSize: 18, // Ukuran font teks
    alignItems: "center", // Menengahkan isi flex container
    // Menengahkan isi flex container
    marginRight: 10,
    marginTop: 1,
  },
});
