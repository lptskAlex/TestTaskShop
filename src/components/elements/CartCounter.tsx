import React from 'react';
import {styled} from 'styled-components/native';

import {Text} from '../typography/Text';
import {CartIcon} from '../icons/CartIcon';

import {useAppSelector} from '../../utils/hooks';
import {selectCartCount} from '../../redux/cartSlice';

const Container = styled.View`
  height: 30px;
  width: 30px;
`;

const Number = styled.View`
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.palette.black};
  position: absolute;
  color: ${({theme}) => theme.palette.text2};
  left: 15px;
  bottom: 15px;
  z-index: 99;
`;

export const CartCounter = () => {
  const cartCount = useAppSelector(selectCartCount);
  return (
    <Container>
      {!!cartCount && (
        <Number>
          <Text lineHeight="sm" color="text2">
            {cartCount}
          </Text>
        </Number>
      )}
      <CartIcon />
    </Container>
  );
};
