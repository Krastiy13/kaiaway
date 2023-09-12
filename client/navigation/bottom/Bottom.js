import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileStack from '../stack/ProfileStack';
import HomeStack from '../stack/HomeStack'
import SearchStack from '../stack/SearchStack'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Searchpage from '../../screens/Serach-page/Searchpage';

const BottomTab = createBottomTabNavigator();

const BottomNav = () => (
    <BottomTab.Navigator
        screenOptions={{
            tabBarOptions: {
                tabStyle: {
                    justifyContent: 'center',
                },
                showIcon: false
            }
        }}
    >
        {/* <BottomTab.Screen name="StackNav" component={StackNav} options={{ tabBarVisible: false }} /> */}
        < BottomTab.Screen name="Home stack" options={{
            tabBarIcon: ({ color, size }) => (
                <Entypo name="home" size={35} color="purple" />
                // Cambia "ios-home" al nombre del icono que desees utilizar de Ionicons
            ),
            headerShown: false,
            tabBarLabel: "",

        }} component={HomeStack} />
        <BottomTab.Screen name="Search page stack" options={{

            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="search" size={35} color="purple" />
                // Cambia "ios-home" al nombre del icono que desees utilizar de Ionicons
            ),
            headerShown: false, tabBarLabel: "",
        }} component={SearchStack} />
        <BottomTab.Screen name="Profile page stack" options={{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={35} color="purple" />
                // Cambia "ios-home" al nombre del icono que desees utilizar de Ionicons
            ),
            headerShown: false, tabBarLabel: "",
            tabBarStyle: {
                backgroundColor: '', // Cambia el color de fondo de la barra de navegación inferior
            },
        }} component={ProfileStack} />


    </BottomTab.Navigator >
);

export default BottomNav;