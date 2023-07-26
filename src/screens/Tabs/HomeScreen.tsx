import React from 'react';
import {FlatList} from 'react-native';
import {Product} from '../../components/common/Product';
import styled from 'styled-components/native';

import {useGetAllProductsQuery} from '../../services/productsApi';
import {add} from '../../redux/cartSlice';
import {useAppDispatch} from '../../utils/hooks';
import {TabBarProps} from '../../routes/router';

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.palette.bg1};
`;

export const HomeScreen = ({navigation}: TabBarProps<'Home'>) => {
  const {data} = useGetAllProductsQuery();
  const dispatch = useAppDispatch();

  return (
    <Container>
      {data && (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <Product
              image={item.image}
              title={item.title}
              price={item.price}
              onPress={() =>
                navigation.navigate('ProductDetails', {id: item.id})
              }
              id={item.id}
              onBuy={() => dispatch(add(item.id))}
            />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      )}
    </Container>
  );
};
