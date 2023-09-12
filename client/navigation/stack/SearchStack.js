import { createStackNavigator } from '@react-navigation/stack';
import Searchpage from '../../screens/Serach-page/Searchpage';

const Stack = createStackNavigator();

const SearchStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Search page" component={Searchpage} />
    </Stack.Navigator>
);

export default SearchStack;