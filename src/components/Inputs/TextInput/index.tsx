import React, {ForwardRefRenderFunction, forwardRef} from 'react';
import {TextInput as RNInput, TextInputProps} from 'react-native';
import {
  Control,
  FieldErrorsImpl,
  FieldValues,
  Controller,
} from 'react-hook-form';

import {InputTypes} from './interface';
import {BaseInput} from '@components/Inputs/TextInput/BaseInput';

interface InputTextProps extends TextInputProps {
  label: string;
  type?: InputTypes;
  control: Control<FieldValues>;
  errors?: Partial<FieldErrorsImpl<{[x: string]: any}>>;
  name: string;
}

const InputComponent: ForwardRefRenderFunction<RNInput, InputTextProps> = (
  {defaultValue, control, errors, name, ...props},
  ref,
) => {
  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => (
        <BaseInput
          {...props}
          onChangeText={onChange}
          value={value}
          defaultValue={defaultValue}
          ref={ref}
          error={errors?.[name]?.message?.toString()}
        />
      )}
      name={name}
      defaultValue={defaultValue}
    />
  );
};

export const TextInput = forwardRef(InputComponent);
