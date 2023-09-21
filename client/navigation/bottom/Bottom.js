import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStack from '../stack/ProfileStack';
import HomeStack from '../stack/HomeStack'
import SearchStack from '../stack/SearchStack'
import HomeIcon from '../../assets/icons/HomeIcon';
import CreateTrip from '../../assets/icons/CreateTrip';
import ChatIcon from '../../assets/icons/Chaticon';
import TravelsIcon from '../../assets/icons/TravelsIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
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
            tabBarIcon: ({ color, size, focused }) => (
                <View
                    style={{ position: "relative", top: 3, color: "blue" }}>
                    <HomeIcon focused={focused} />

                </View>

                // Cambia "ios-home" al nombre del icono que desees utilizar de Ionicons
            ),
            headerShown: false,
            tabBarLabel: "",

        }} component={HomeStack} />
        <BottomTab.Screen name="create travel Stack" options={{

            tabBarIcon: ({ color, size, focused }) => (
                <View
                    style={{ position: "relative", top: 3 }}>
                    <CreateTrip focused={focused} />
                </View>
                // Cambia "ios-home" al nombre del icono que desees utilizar de Ionicons
            ),
            headerShown: false, tabBarLabel: "",
        }} component={SearchStack} />


        <BottomTab.Screen name="chat" options={{
            tabBarIcon: ({ color, size, focused }) => (

                <View

                    style={{ position: "relative", top: 3 }}>
                    <ChatIcon focused={focused} />
                </View>
                // Cambia "ios-home" al nombre del icono que desees utilizar de Ionicons
            ),
            headerShown: false,
            tabBarLabel: "",

        }} component={ProfileStack} />


        <BottomTab.Screen name="travel" options={{
            tabBarIcon: ({ color, size, focused }) => (

                <View

                    style={{ position: "relative", top: 3 }}>
                    <TravelsIcon focused={focused} />
                </View>
                // Cambia "ios-home" al nombre del icono que desees utilizar de Ionicons
            ),
            headerShown: false,
            tabBarLabel: "",

        }} component={ProfileStack} />

        <BottomTab.Screen name="Profile stack" options={{
            tabBarIcon: ({ color, size, focused }) => (
                <View style={{ position: "relative", top: 3 }}>
                    < ProfileIcon focused={focused} />
                </View>
                // Cambia "ios-home" al nombre del icono que desees utilizar de Ionicons
            ),
            headerShown: false,
            tabBarLabel: "",

        }} component={ProfileStack} />



    </BottomTab.Navigator >
);

export default BottomNav;