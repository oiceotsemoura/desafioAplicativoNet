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

const Thunbnail = styled.Image`
  height: 80px;
  width: 80px;
  margin-right: 12px;
`;

const ContentContainer = styled.View`
  ${({theme}) =>
    css`
      padding: ${theme.spacing.SM}px;
      flex: 1;
    `}
`;

export default {
  ListItemContainer,
  Title,
  ContentContainer,
  Thunbnail,
  ProductTitle,
};
