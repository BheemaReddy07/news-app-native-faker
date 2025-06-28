import { NavigationContainer } from "@react-navigation/native";
import NewsItem from "../screens/NewsItem";
import AllNews from "../screens/AllNews";
import LatestNews from "../screens/LatestNews";

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
        <Tab.Navigator>
            <Tab.Screen name="LatestNewsStack" component={LatestNewsStack} />
            <Tab.Screen name="AllNewsStack" component={AllNewsStack} />
        </Tab.Navigator>
    )
}

const AllNewsStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="AllNews" component={AllNews} />
            <Stack.Screen name="NewsItem" component={NewsItem} />
        </Stack.Navigator>
    )
}

const LatestNewsStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="LatestNews" component={LatestNews} />
            <Stack.Screen name="NewsItem" component={NewsItem} />
        </Stack.Navigator>
    )
}

export default NavigationController