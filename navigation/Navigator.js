import { NavigationContainer } from "@react-navigation/native";
import NewsItem from "../screens/NewsItem";
import AllNews from "../screens/AllNews";
import LatestNews from "../screens/LatestNews";
import { AppScreens, AppStackContainers } from "../utils/constants";

import MIcon from "react-native-vector-icons/MaterialIcons";

const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");
const { createNativeStackNavigator } = require("@react-navigation/native-stack");

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NavigationController = () => {
    return <NavigationContainer>
        <TabNavigators />
    </NavigationContainer>
}

const TabNavigators = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen options={{
                tabBarIcon: (props) => <MIcon {...props} name="new-releases" />,
            }} name={AppStackContainers.LatestNewsStack} component={LatestNewsStack} />
            <Tab.Screen options={{
                tabBarIcon: (props) => <MIcon {...props} name="newspaper" />,
            }} name={AppStackContainers.AllNewsStack} component={AllNewsStack} />
        </Tab.Navigator>
    )
}

const AllNewsStack = () => {
    return (
        <Stack.Navigator  >
            <Stack.Screen name={AppScreens.AllNews} component={AllNews} />
            <Stack.Screen name={AppScreens.NewsItem} component={NewsItem} />
        </Stack.Navigator>
    )
}

const LatestNewsStack = () => {
    return (
        <Stack.Navigator  >
            <Stack.Screen name={AppScreens.LatestNews} component={LatestNews} />
            <Stack.Screen name={AppScreens.NewsItem} component={NewsItem} />
        </Stack.Navigator>
    )
}

export default NavigationController