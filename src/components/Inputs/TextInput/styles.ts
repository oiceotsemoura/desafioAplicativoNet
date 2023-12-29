import styled, {css} from 'styled-components/native';

import {Typography} from '@components/Typography';
import {Icon} from '@components/Icon';

export default {
  IconPassword: styled(Icon)``,

  IconLabel: styled(Typography).attrs({
    variation: 'Caption',
  })`
    margin-left: ${({theme}) => theme.spacing.XS}px;
  `,

  IconContainer: styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
  })`
    ${({theme}) => css`
      border-radius: ${theme.borderRadius.XXS}px;
      padding: ${theme.spacing.XXS}px ${theme.spacing.XS}px;
      background-color: ${theme.colors.BrandColors.GrayScale.almostWhite};
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: row;
    `}
  `,
};
