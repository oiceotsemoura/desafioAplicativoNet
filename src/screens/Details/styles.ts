import {Typography} from '@components/Typography';
import styled, {css} from 'styled-components/native';

const ListItemContainer = styled.View`
  ${({theme}) =>
    css`
      padding: ${theme.spacing.SM}px;
      border-radius: ${theme.borderRadius.SM}px;
      flex-direction: row;
      background-color: ${theme.colors.BrandColors.GrayScale.white};
      margin-bottom: ${theme.spacing.SM}px;
      elevation: 1;
      align-items: center;
      height: 85px;
      padding: ${theme.spacing.SM}px;
    `}
`;

const Title = styled(Typography).attrs({
  variation: 'Heading4',
})`
  ${({theme}) =>
    css`
      margin-bottom: ${theme.spacing.SM}px;
    `}
`;

const ProductTitle = styled(Typography).attrs({
  variation: 'Heading5',
  numberOfLines: 1,
})``;

const ProductImage = styled.Image`
  height: 250px;
  width: 250px;
`;

const ContentContainer = styled.View`
  ${({theme}) =>
    css`
      padding: ${theme.spacing.SM}px;
      flex: 1;
    `}
`;

const Footer = styled.View`
  ${({theme}) =>
    css`
      padding: ${theme.spacing.SM}px;
      flex: 1;
      justify-content: flex-end;
    `}
`;

const Content = styled.View`
  align-items: center;
`;
const Container = styled.View`
  ${({theme}) =>
    css`
      padding: ${theme.spacing.SM}px;
      flex: 1;
      justify-content: flex-end;
    `}
`;

const TakePhotButtomContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: 'center';
  width: 100%;
  bottom: 0px;
  padding: 20px;
`;

const TakePhotButtom = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background-color: #b2beb5;
  align-self: center;
  border-width: 4px;
  border-color: white;
`;

export default {
  ListItemContainer,
  Title,
  ContentContainer,
  ProductImage,
  ProductTitle,
  Footer,
  Content,
  TakePhotButtomContainer,
  TakePhotButtom,
  Container,
};
