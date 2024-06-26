import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import AddPostScreen from '../screens/AddPostScreen';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import * as SecureStore from 'expo-secure-store'
import LikeScreen from '../screens/LikeScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { setIsSignedIn } = useContext(AuthContext);

    return (
        <Tab.Navigator
            screenOptions={
                {
                    headerStyle: { backgroundColor: 'white' }, headerTintColor: '#fff',
                    headerTitle: `Instagram`,
                    headerRight: () => (
                        <AntDesign
                            name="logout"
                            size={25}
                            style={{
                                display: 'flex',
                                padding: 10
                            }}
                            onPress={async()=>{SecureStore.deleteItemAsync('accessToken');
                            setIsSignedIn(false)}}
                        />
                    ),
                    headerLeft: () => (
                        <AntDesign
                            name="instagram"
                            size={25}
                            style={{
                                display: 'flex',
                                paddingLeft: 10
                            }}
                        />
                    ),
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'Helvetica',
                        color: 'black',
                    }
                }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: " ",
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="earth"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    title: "",
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="search1"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="AddPost"
                component={AddPostScreen}
                options={{
                    title: "",
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="plussquareo"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="like"
                component={LikeScreen}
                options={{
                    title: "",
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="hearto"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: "",
                    tabBarActiveTintColor: 'black',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign
                            name="user"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}