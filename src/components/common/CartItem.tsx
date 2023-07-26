import React from 'react';
import {View} from 'react-native';
import {styled} from 'styled-components/native';

import {Text} from '../typography/Text';

import {useAppDispatch} from '../../utils/hooks';
import {add, remove} from '../../redux/cartSlice';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin: ${({theme}) => theme.sizes.base}px;
  padding: ${({theme}) => theme.sizes.xs}px;
  border-bottom-width: 1px;
  border-bottom-color: black;
`;
const Controls = styled.View`
  flex-direction: row;
  border-color: black;
  border-width: 1px;
  margin: 0 ${({theme}) => theme.sizes.lg}px;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.Image`
  margin: ${({theme}) => theme.sizes.lg}px;
`;

const ControlButton = styled.TouchableOpacity`
  width: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.palette.black};
`;

const DescriptionContainer = styled.View`
  margin-top: ${({theme}) => theme.sizes.xl}px;
  max-width: 50%;
  justify-content: space-evenly;
`;

type CartItemProps = {
  image: string;
  title: string;
  category: string;
  price: number;
  id: number;
  count: number;
  onPress: () => void;
};

export const CartItem = ({
  image,
  title,
  category,
  price,
  id,
  count,
  onPress,
}: CartItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <Container onPress={onPress}>
      <View>
        <Image
          width={100}
          height={100}
          source={{
            uri: image,
          }}
        />
        <Controls>
          <ControlButton onPress={() => dispatch(remove(id))}>
            <Text color="text2" size={'3xl'}>
              -
            </Text>
          </ControlButton>
          <Text size="2xl">{count}</Text>
          <ControlButton onPress={() => dispatch(add(id))}>
            <Text color="text2" size={'3xl'}>
              +
            </Text>
          </ControlButton>
        </Controls>
      </View>
      <DescriptionContainer>
        <Text numberOfLines={2} size="lg" weight="bold">
          {title}
        </Text>
        <Text>{category}</Text>
        <Text weight="bold">${price}</Text>
      </DescriptionContainer>
    </Container>
  );
};
