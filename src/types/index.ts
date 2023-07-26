import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

export type MainStackParams = {
  TabBar: undefined;
  ProductDetails: {id: number};
};

export type TabBarParams = {
  Home: undefined;
  Search: undefined;
  Favourite: undefined;
  Cart: undefined;
};
export type TabBarProps<T extends keyof TabBarParams> = CompositeScreenProps<
  BottomTabScreenProps<TabBarParams, T>,
  NativeStackScreenProps<MainStackParams, keyof MainStackParams>
>;

export type MainStackScreenProps<RouteName extends keyof MainStackParams> =
  NativeStackScreenProps<MainStackParams, RouteName>;
