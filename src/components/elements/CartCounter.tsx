import React from 'react';
import {styled} from 'styled-components/native';

import {Text} from '../typography/Text';
import {CartIcon} from '../icons/CartIcon';

import {useAppSelector} from '../../utils/hooks';

const Container = styled.View`
  height: 30;
  width: 30;
`;

const Number = styled(Text)`
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.palette.black};
  position: absolute;
  font-size: 10px;
  color: ${({theme}) => theme.palette.text2};
  left: 15px;
  bottom: 15px;
  z-index: 99;
`;

export const CartCounter = () => {
  const cartCount = useAppSelector(
    state =>
      state.cart.products.length &&
      state.cart.products?.reduce((a, b) => a + b.count, 0),
  );
  return (
    <Container>
      {cartCount && <Number>{cartCount}</Number>}
      <CartIcon />
    </Container>
  );
};
