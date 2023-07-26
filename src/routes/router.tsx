import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  CartScreen,
  FavouriteScreen,
  HomeScreen,
  ProductDetailsScreen,
  SearchScreen,
} from '../screens';
import {FavouriteIcon, HomeIcon, SearchIcon} from '../components/icons';
import {CartCounter} from '../components/elements/CartCounter';
import {Header} from '../components/common/Header';

type MainStackParams = {
  TabBar: undefined;
  ProductDetails: {id: number};
};

type TabBarParams = {
  Home: undefined;
  Search: undefined;
  Favourite: undefined;
  Cart: undefined;
};
export type TabBarProps<T extends keyof TabBarParams> = CompositeScreenProps<
  BottomTabScreenProps<TabBarParams, T>,
  NativeStackScreenProps<MainStackParams, keyof MainStackParams>
>;

const BottomTab = createBottomTabNavigator<TabBarParams>();
const Main = createNativeStackNavigator<MainStackParams>();

export type MainStackScreenProps<RouteName extends keyof MainStackParams> =
  NativeStackScreenProps<MainStackParams, RouteName>;

const BottomTabStack = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: 10,
          margin: 10,
          borderTopWidth: 0,
          borderColor: 'white',
        },
      }}>
      <BottomTab.Screen
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
        name="Home"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: SearchIcon,
        }}
        component={SearchScreen}
        name="Search"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: FavouriteIcon,
        }}
        component={FavouriteScreen}
        name="Favourite"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: CartCounter,
        }}
        component={CartScreen}
        name="Cart"
      />
    </BottomTab.Navigator>
  );
};

export const MainStack = () => {
  return (
    <Main.Navigator>
      <Main.Screen
        options={{
          headerShown: false,
        }}
        name="TabBar"
        component={BottomTabStack}
      />
      <Main.Screen
        options={{
          header: () => <Header />,
        }}
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </Main.Navigator>
  );
};
