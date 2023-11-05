import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home_screen';
import YouScreen from '../screens/You_Screen';
import {View} from 'react-native';
import MenuScreen from '../screens/Menu_Screen';
import CartScreen from '../screens/Cart_Screen';
import {useSharedValue} from 'react-native-reanimated';
import CustomTabBar from '../components/orgnization/customTabBar';
const Tab = createBottomTabNavigator();

const Routes = () => {
  const activeIndex = useSharedValue(0);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          initialParams={{name: 'Home', icon: 'home'}}
        />
        <Tab.Screen
          name="YouScreen"
          component={YouScreen}
          initialParams={{name: 'You', icon: 'user'}}
        />
        <Tab.Screen
          name="more"
          children={() => <View />}
          initialParams={{name: 'more', icon: 'layers'}}
        />
        <Tab.Screen
          name="CartScreen"
          component={CartScreen}
          initialParams={{name: 'cart', icon: 'shopping-cart'}}
        />
        <Tab.Screen
          name="MenuScreen"
          component={MenuScreen}
          initialParams={{name: 'menu', icon: 'menu'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
