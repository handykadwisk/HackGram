import HomeScreen from "../screens/HomeScreen";

export default function TabNavigator() {
    return (
        <Tab.Navigator
            ScreenOption={{
                HeadersStyle: {
                    backgroundColor: "#f4511e",
                },
                headersTintColor: "#fff",
                headerTitleColor: {
                    fontWeight: "bold",
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    title: "Home Screen",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home" size={size} color={color} />
                    )
                }}
            />
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
        </Tab.Navigator>
    );
}   