function TabNavigator() {
  return (
    <Tab.Navigator
    ScreenOption={{
        HeadersStyle:{
            backgroundColor:"#f4511e",
        },
        headersTintColor:"#fff",
        headerTitleColor:{
            fontWeight:"bold",
        },

    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}   