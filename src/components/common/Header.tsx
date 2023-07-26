import React from 'react';
import {styled} from 'styled-components/native';
import {ArrowLeft} from '../icons/ArrowLeft';
import {useNavigation} from '@react-navigation/native';

const Container = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  justify-content: center;
  padding: ${({theme}) => theme.sizes.base}px;
  background-color: ${({theme}) => theme.palette.bg1};
`;
export const Header = () => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.goBack()}>
      <ArrowLeft />
    </Container>
  );
};
