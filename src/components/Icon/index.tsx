import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {IconProps as Props} from 'react-native-vector-icons/Icon';

import {theme} from '@theme/index';

export interface IconProps extends Props {}

export function Icon({
  name,
  color = `${theme.colors.BrandColors.GrayScale.black}`,
  size = theme.size.MD,
  ...props
}: IconProps) {
  return (
    <FeatherIcon
      {...props}
      size={size}
      color={color}
      name={name}
      testID={`icon-${name}`}
    />
  );
}
