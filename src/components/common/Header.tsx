import React from 'react';
import {styled} from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {Platform, TouchableOpacity} from 'react-native';

import {ArrowLeft} from '../icons/ArrowLeft';

const Container = styled.View`
  height: 50px;
  width: 100%;
  justify-content: center;
  padding: ${({theme}) => theme.sizes.base}px;
  padding-top: ${({theme}) =>
    Platform.OS === 'ios' ? theme.sizes['2xl'] : theme.sizes.base}px;
  background-color: ${({theme}) => theme.palette.bg2};
`;
export const Header = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity onPress={navigation.goBack}>
        <ArrowLeft />
      </TouchableOpacity>
    </Container>
  );
};
