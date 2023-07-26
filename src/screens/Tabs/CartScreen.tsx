import React from 'react';
import {FlatList} from 'react-native';
import {styled} from 'styled-components/native';

import {CartItem} from '../../components/common/CartItem';
import {Text} from '../../components/typography/Text';

import {useGetAllProductsQuery} from '../../services/productsApi';
import {useAppSelector} from '../../utils/hooks';
import {TabBarProps} from '../../routes/router';

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.palette.bg1};
`;

export const CartScreen = ({navigation}: TabBarProps<'Cart'>) => {
  const cart = useAppSelector(state => state.cart);
  const {data: products, isLoading} = useGetAllProductsQuery();
  console.log(cart);
  return (
    <Container>
      <FlatList
        data={cart.products}
        refreshing={isLoading}
        ListEmptyComponent={<Text>Your cart is empty</Text>}
        renderItem={({item}) => {
          const product = products?.find(el => el.id === item.id);
          return product ? (
            <CartItem
              image={product.image}
              title={product.title}
              category={product.category}
              id={product.id}
              price={product.price}
              count={item.count}
              onPress={() =>
                navigation.navigate('ProductDetails', {id: item.id})
              }
            />
          ) : (
            <></>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
};
