import { useCallback, useContext, useState } from "react";
import React from "react";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";
import { ActivityIndicator } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AuthContext from "../context/AuthContext";
import Card from "../components/Card";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { GET_POSTS } from "../queries/Post";
import { useQuery } from "@apollo/client";

function HomeScreen({ navigation }) {
  const { loading, error, data, refetch } = useQuery(GET_POSTS, {
    notifyOnNetworkStatusChange: true,
  });
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  const { setIsSignedIn } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {data?.posts.map((post, idx) => {
          return (
            <Card
              key={idx}
              post={post}
              id={post._id}
              navigate={navigation.navigate}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
