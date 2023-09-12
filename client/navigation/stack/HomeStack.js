import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home/Home';

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
);

export default HomeStack;