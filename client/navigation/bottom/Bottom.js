import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStack from '../stack/ProfileStack';
import HomeStack from '../stack/HomeStack'
import SearchStack from '../stack/SearchStack'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Searchpage from '../../screens/Serach-page/Searchpage';
import { View } from 'react-native';

const BottomTab = createBottomTabNavigator();

const BottomNav = () => (
    <BottomTab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                height: 60,

            },
        }}
    >
        {/* <BottomTab.Screen name="StackNav" component={StackNav} options={{ tabBarVisible: false }} /> */}
        < BottomTab.Screen name="Home stack" options={{
            // tabBarBadge: 3, para añadir notificaciones badges to icons
            tabBarIcon: ({ focused }) => (
                <View
                    style={{ alignContent: "center", justifyContent: "center" }}><Entypo name="home" size={30} color={focused ? "green" : "purple"} /></View>

                // Cambia "ios-home" al nombre del icono que desees utilizar de Ionicons
            ),
            headerShown: false,
            tabBarLabel: "",

        }} component={HomeStack} />
        <BottomTab.Screen name="Search page stack" options={{

            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="search" size={30} color="purple" />
                // Cambia "ios-home" al nombre del icono que desees utilizar de Ionicons
            ),
            headerShown: false, tabBarLabel: "",
        }} component={SearchStack} />
        <BottomTab.Screen name="Profile page stack" options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={30} color="purple" />
                // Cambia "ios-home" al nombre del icono que desees utilizar de Ionicons
            ),
            headerShown: false,
            tabBarLabel: "",

        }} component={ProfileStack} />



    </BottomTab.Navigator >
);

export default BottomNav;