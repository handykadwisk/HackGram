import { gql, useQuery } from "@apollo/client";
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const SEARCH_QUERY = gql`
  query SearchUser($username: String!) {
    searchUser(username: $username) {
      _id
      name
      username
      email
      password
    }
  }
`;

function SearchScreen() {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const { data, loading, error } = useQuery(SEARCH_QUERY, {
    variables: { username: search },
    skip: search.length < 1, // Skip the query if search term is too short
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or username"
        value={search}
        onChangeText={setSearch}
        autoCapitalize="none"
      />
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}
      <FlatList
        data={data?.SearchUser}
        keyExtractor={(el) => el._id}
        renderItem={({ el }) => (
          <TouchableOpacity
            style={styles.resultItem}
            onPress={() =>
              navigation.navigate("ProfileScreen", { id: el._id })
            }
          >
            <Text style={styles.name}>
              {el.name} (@{el.username})
            </Text>
            <Text style={styles.email}>{el.email}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default SearchScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
});
