import React, {
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
  useState,
} from 'react';
import {TextInput} from 'react-native';

import {keyboardTypeMap, maxLengthMap} from './constants';
import {InputComponentProps} from '@components/Inputs/TextInput/interface';

import S from './styles';
import {Input} from '../layout';

const InputComponent: ForwardRefRenderFunction<
  TextInput,
  InputComponentProps
> = (
  {
    label,
    error,
    style,
    value,
    placeholder,
    onChangeText,
    type = 'text',
    disabled,
    ...rest
  },
  ref,
) => {
  const [isTypePassword, setIsTypePassword] = useState(type === 'password');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = useCallback(
    (text: string) => onChangeText(text),
    [onChangeText],
  );

  const handleChangePasswordVisibility = () => {
    setIsTypePassword(state => !state);
  };

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  return (
    <Input.Container style={style} testID="InputContainer">
      {label && <Input.Label>{label}</Input.Label>}

      <Input.Box
        testID="InputBox"
        disabled={disabled}
        error={Boolean(error)}
        isFocused={isFocused}>
        <Input.Root
          ref={ref}
          value={value}
          placeholder={placeholder}
          onChangeText={handleChange}
          secureTextEntry={isTypePassword}
          maxLength={maxLengthMap[type]}
          keyboardType={keyboardTypeMap[type]}
          editable={!disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          {...rest}
        />

        {type === 'password' && (
          <S.IconContainer
            onPress={handleChangePasswordVisibility}
            testID="IconPassword">
            <S.IconPassword name={isTypePassword ? 'eye' : 'eye-off'} />
            <S.IconLabel>{isTypePassword ? 'Mostrar' : 'Ocultar'}</S.IconLabel>
          </S.IconContainer>
        )}
      </Input.Box>
      <Input.ErrorMessage>{error}</Input.ErrorMessage>
    </Input.Container>
  );
};

export const BaseInput = forwardRef(InputComponent);
