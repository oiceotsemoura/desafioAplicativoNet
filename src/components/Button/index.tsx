import React, {useMemo} from 'react';
import {TouchableOpacityProps} from 'react-native';

import {FontTypes} from '@theme/typography';

import S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  mode?: 'container' | 'outlined' | 'text';
  flex?: number;
  loading?: boolean;
}

export function Button({
  disabled,
  title,
  mode = 'container',
  flex,
  loading,
  ...props
}: ButtonProps) {
  const isDisabled = useMemo(() => disabled || loading, [disabled, loading]);
  const variation: {
    [x in 'container' | 'outlined' | 'text']: keyof typeof FontTypes;
  } = {
    container: 'TextBodyBold',
    outlined: 'TextBodyRegular',
    text: 'TextBodyMedium',
  };

  return (
    <S.Container flex={flex}>
      <S.Button
        activeOpacity={0.8}
        testID="ComponentButton"
        disabled={isDisabled}
        mode={mode}
        {...props}>
        {loading ? (
          <S.Loading testID="Loading" mode={mode} />
        ) : (
          <S.Label
            mode={mode}
            disabled={isDisabled}
            variation={variation[mode]}>
            {title}
          </S.Label>
        )}
      </S.Button>
    </S.Container>
  );
}
