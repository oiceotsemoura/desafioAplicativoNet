import React, {useRef} from 'react';
import S from './styles';
import {Button, TextInput} from '@components/index';
import {TextInput as TextInputRef} from 'react-native';
import {useFormLogin} from './hooks/useFormLogin';

export const LoginScreen = () => {
  const {control, errors, onSubmit, isLoading} = useFormLogin();
  const ref = useRef<TextInputRef>(null);

  return (
    <S.Container>
      <S.Title>
        Preencha as informações abaixo para entrar no seu aplicativo
      </S.Title>

      <TextInput
        control={control}
        errors={errors}
        label="Username"
        name="username"
        placeholder="João da silva..."
        onSubmitEditing={() => ref.current?.focus()}
        returnKeyType="next"
      />

      <TextInput
        control={control}
        errors={errors}
        ref={ref}
        label="Senha"
        name="password"
        placeholder="Digite sua senha"
        type="password"
        onSubmitEditing={onSubmit}
        returnKeyType="done"
      />

      <S.Footer>
        <Button loading={isLoading} title="Entrar" onPress={onSubmit} />
      </S.Footer>
    </S.Container>
  );
};
