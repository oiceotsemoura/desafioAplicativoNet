import styled, {css} from 'styled-components/native';
import {TextProps, TouchableOpacityProps} from 'react-native';
import {Typography} from '@components/Typography';

interface ButtonProps extends TouchableOpacityProps {
  mode?: 'container' | 'outlined' | 'text';
}

interface LabelProps extends TextProps {
  mode?: 'container' | 'outlined' | 'text';
}

interface LoadingProps {
  mode?: 'container' | 'outlined' | 'text';
}

export default {
  Container: styled.View<{flex?: number}>`
    flex-direction: row;
    ${({flex, theme}) =>
      flex &&
      css`
        flex: ${flex};
      `}
  `,
  Button: styled.TouchableOpacity<ButtonProps>`
    flex: 1;
    border-radius: ${({theme}) => theme.borderRadius.MD}px;
    height: 56px;
    justify-content: center;
    align-items: center;

    ${({mode, disabled, theme}) => {
      if (disabled && mode !== 'text') {
        return css`
          margin-bottom: ${theme.spacing.SM}px;
          background-color: ${theme.colors.BrandColors.GrayScale.medium};
        `;
      }
      if (mode === 'container') {
        return css`
          background-color: ${theme.colors.BrandColors.Yellow.main};
          margin-bottom: ${theme.spacing.SM}px;
        `;
      }
      if (mode === 'outlined') {
        return css`
          margin-bottom: ${theme.spacing.SM}px;
          background-color: ${theme.colors.BrandColors.GrayScale.white};
          border-color: ${theme.colors.BrandColors.Orange.light};
          border-width: 1.5px;
        `;
      }
    }}
  `,

  Loading: styled.ActivityIndicator<LoadingProps>`
    ${({theme, mode}) => {
      if (mode !== 'container') {
        return css`
          color: ${theme.colors.BrandColors.Yellow.main};
        `;
      }
      return css`
        color: ${theme.colors.BrandColors.GrayScale.white};
      `;
    }};
  `,

  Label: styled(Typography)<LabelProps>`
    ${({disabled, theme, mode}) => {
      if (mode === 'text') {
        return css`
          text-decoration: underline;
          text-decoration-color: ${disabled
            ? theme.colors.BrandColors.GrayScale.dark
            : theme.colors.BrandColors.Orange.main};
          color: ${disabled
            ? theme.colors.BrandColors.GrayScale.dark
            : theme.colors.BrandColors.Orange.main};
        `;
      }

      return css`
        color: ${disabled
          ? theme.colors.BrandColors.GrayScale.dark
          : theme.colors.BrandColors.GrayScale.almostBlack};
      `;
    }}
  `,
};
