import styled, {css} from 'styled-components/native';

import {FontFamilyTypes} from '@theme/typography';
import {Typography} from '@components/Typography';

interface InputBoxProps {
  disabled?: boolean;
  error?: boolean;
  isFocused?: boolean;
}

export const Input = {
  Container: styled.View`
    width: 100%;

    ${({theme}) => css`
      margin-bottom: ${theme.spacing.XXS}px;
      padding-bottom: ${theme.spacing.XXS}px;
      height: auto;
    `}
  `,

  Box: styled.View<InputBoxProps>`
    ${({theme, disabled, error, isFocused}) => css`
      flex-direction: row;
      align-items: center;
      height: 56px;
      padding: 0 ${theme.spacing.MD}px;
      border-radius: ${theme.borderRadius.SM}px;

      background: ${disabled
        ? theme.colors.BrandColors.GrayScale.almostWhite
        : theme.colors.BrandColors.GrayScale.white};

      border-width: 1px;
      border-color: ${error
        ? theme.colors.FeedbackColors.error
        : isFocused
        ? theme.colors.BrandColors.Orange.main
        : theme.colors.BrandColors.GrayScale.light};
    `}
  `,

  Label: styled(Typography).attrs({
    variation: 'Caption',
  })`
    color: ${({theme}) => theme.colors.BrandColors.GrayScale.almostBlack};
    margin-bottom: 4px;
  `,

  ErrorMessage: styled(Typography).attrs({
    variation: 'Caption',
  })`
    color: ${({theme}) => theme.colors.FeedbackColors.error};
  `,
  CodeInputErrorMessage: styled(Typography).attrs({
    variation: 'Caption',
  })`
    color: ${({theme}) => theme.colors.FeedbackColors.error};
    flex: 1;
  `,

  Root: styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.colors.BrandColors.GrayScale.dark,
  }))`
    flex: 1;
    height: 56px;

    font-family: ${FontFamilyTypes.GraphikRegular};

    ${({theme}) => css`
      font-size: 16px;
      color: ${theme.colors.BrandColors.GrayScale.black};
    `}
  `,
};
