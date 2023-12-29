import styled, {css} from 'styled-components/native';

import {Typography} from '@components/Typography';

export default {
  Container: styled.View`
    flex: 1;
    ${({theme}) => css`
      background-color: ${theme.colors.BrandColors.GrayScale.white};
      padding: ${theme.spacing.LG}px;
    `}
  `,

  Title: styled(Typography)`
    ${({theme}) => css`
      margin-top: ${theme.spacing.XL}px;
      margin-bottom: ${theme.spacing.LG}px;
    `}
  `,

  Footer: styled.View`
    flex: 1;
    justify-content: flex-end;
  `,
};
