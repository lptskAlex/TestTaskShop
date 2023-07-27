import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {styled} from 'styled-components/native';

import {Text} from '../components/typography/Text';

import {add} from '../redux/cartSlice';
import {useAppDispatch} from '../utils/hooks';
import {useGetAllProductsQuery} from '../services/productsApi';
import {MainStackScreenProps} from '../types';

const Container = styled.ScrollView`
  background-color: ${({theme}) => theme.palette.bg1};
  flex: 1;
  padding: ${({theme}) => theme.sizes.base}px;
`;

const Description = styled(Text)`
  border-width: 1px;
  border-color: ${({theme}) => theme.palette.text1};
  padding: ${({theme}) => theme.sizes.xs}px;
  border-radius: 8px;
`;

const BuyBtn = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.palette.bg2};
  padding: ${({theme}) => theme.sizes.xs}px ${({theme}) => theme.sizes.base}px;
  border-radius: 10px;
`;

export const ProductDetailsScreen = ({
  route,
}: MainStackScreenProps<'ProductDetails'>) => {
  const {data} = useGetAllProductsQuery();
  const product = data?.find(el => el.id === route.params.id);
  const dispatch = useAppDispatch();
  return (
    <Container contentContainerStyle={styles.contentContainer}>
      {product && (
        <>
          <Image
            width={200}
            height={200}
            source={{
              uri: product.image,
            }}
          />
          <Text align="center" weight="bold" size="xl">
            {product.title}
          </Text>
          <Description>{product.description}</Description>
          <Text size="lg">${product.price}</Text>
          <BuyBtn onPress={() => dispatch(add(product.id))}>
            <Text size="xl" weight="bold" color="textBuy">
              BUY
            </Text>
          </BuyBtn>
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
