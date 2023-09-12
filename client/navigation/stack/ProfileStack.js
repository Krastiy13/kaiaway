import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../screens/profile/Profile';

const Stack = createStackNavigator();

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
);

export default ProfileStack;