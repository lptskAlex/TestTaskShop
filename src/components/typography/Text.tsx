import styled from 'styled-components/native';

interface TextProps {
  size?: string;
  lineHeight?: string;
  weight?: string;
  color?: string;
  underline?: boolean;
  align?: 'left' | 'center' | 'right' | 'justify';
  uppercase?: boolean;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
}

export const Text = styled.Text<TextProps>`
  font-size: ${props => props.theme.sizes[props.size || 'base']}px;
  ${({lineHeight, size, theme}) =>
    lineHeight !== 'none' &&
    `line-height: ${theme.sizes[lineHeight || size || 'base'] * 1.5}px`};
  font-weight: ${props => props.weight || 'normal'};
  font-family: Poppins;
  color: ${props => props.theme.palette[props.color || 'text1']};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  text-decoration-color: ${props =>
    props.theme.palette[props.color || 'text1']};
  text-align: ${props => props.align || 'left'};
  ${props => props.uppercase && `text-transform: uppercase;`}
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-left: ${props => props.marginLeft || 0}px;
`;
