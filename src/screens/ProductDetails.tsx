import React from 'react';
import {Image} from 'react-native';
import {styled} from 'styled-components/native';

import {Text} from '../components/typography/Text';

import {add} from '../redux/cartSlice';
import {useAppDispatch} from '../utils/hooks';
import {useGetAllProductsQuery} from '../services/productsApi';
import {MainStackScreenProps} from '../routes/router';

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.palette.bg1};
  flex: 1;
  padding: ${({theme}) => theme.sizes.base}px;
  align-items: center;
  justify-content: space-between;
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
  const product = data?.filter(el => el.id === route.params.id)[0];
  const dispatch = useAppDispatch();
  return (
    <Container>
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
