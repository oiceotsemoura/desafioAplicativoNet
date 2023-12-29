import React from 'react';
import {TextProps} from 'react-native';

import {FontTypes} from '@theme/typography';

import S from './styles';

export interface TypographyProps extends TextProps {
  variation?: keyof typeof FontTypes;
}

/**
 *
 * @param variation default is `TextBodyRegular`
 */
export function Typography({
  children,
  variation = 'TextBodyRegular',
  style,
  ...props
}: TypographyProps) {
  return (
    <S.Label {...props} style={[style, FontTypes[variation]]}>
      {children}
    </S.Label>
  );
}
