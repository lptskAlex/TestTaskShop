import React from 'react';
import styled from 'styled-components/native';
import {Image, TouchableOpacity} from 'react-native';

import {Text} from '../typography/Text';

const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.palette.bg2};
  border-radius: ${({theme}) => theme.sizes.sm}px;
  padding: ${({theme}) => theme.sizes.lg}px;
  width: 45%;
  margin: ${({theme}) => theme.sizes.xs}px;
  align-items: center;
  justify-content: space-between;
`;

type ProductProps = {
  image: string;
  title: string;
  price: number;
  onBuy: () => void;
  onPress: () => void;
};

export const Product = ({
  image,
  title,
  price,
  onBuy,
  onPress,
}: ProductProps) => {
  return (
    <Container onPress={onPress}>
      <Image
        width={100}
        height={100}
        source={{
          uri: image,
        }}
      />

      <Text size="sm" marginBottom={10} align="center">
        {title}
      </Text>
      <Text weight="bold">${price}</Text>
      <TouchableOpacity onPress={onBuy}>
        <Text size="xl" weight="bold" color="textBuy">
          BUY
        </Text>
      </TouchableOpacity>
    </Container>
  );
};
