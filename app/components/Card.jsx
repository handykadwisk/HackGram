import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function Card({post}) {
 
  // console.log(post.author[0],'<<<<<<<<<');
  // console.log(post.author.map((el)),'<<<<<<<<<');
  // const [isLiked, setIsLiked] = useState(false);
  // const [isCommented, setIsCommented] = useState(false);
  // const [isShared, setIsShared] = useState(false);
  // const [isSaved, setIsSaved] = useState(false);
  // const [author, setAuthor]=useState(post.author[0]);
  // console.log(author,'=================ini di card');
  // {post?.author.map((author,idx)=>{
    // })}
    console.log(post.author[0],'<<<<<<<<<');
    return (
      <>
    
    
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/16903039/pexels-photo-16903039/free-photo-of-pemandangan-batu-bukit-sungai.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={styles.avatar}
          />
          <Text style={styles.username}>{post.author.name}a</Text>
        </View>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/16903039/pexels-photo-16903039/free-photo-of-pemandangan-batu-bukit-sungai.jpeg?auto=compress&cs=tinysrgb&w=600",
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
          <Text style={styles.desc}>
            Description of the photo will be here.
          </Text>
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
