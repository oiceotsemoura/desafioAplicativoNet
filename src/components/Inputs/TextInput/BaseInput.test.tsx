import React from 'react';

import {fireEvent, render} from '@utils/test-utils';
import {BaseInput} from '@components/Inputs/TextInput/BaseInput';
import {FontTypes} from '@theme/typography';

import {theme} from '@theme/index';

describe('BaseInput Component', () => {
  describe('Rendering', () => {
    it('should render the BaseInput component correctly', () => {
      const {getByTestId, getByText} = render(
        <BaseInput
          label="Name"
          placeholder="Enter your name"
          onChangeText={() => {}}
        />,
      );

      const label = getByText('Name');

      expect(label).toHaveTextContent('Name');
      expect(label).toHaveStyle(FontTypes.Caption);
      expect(getByTestId('InputBox')).toHaveStyle({
        borderColor: theme.colors.BrandColors.GrayScale.light,
      });
    });

    it('should reflect the passed properties', () => {
      const {getByPlaceholderText} = render(
        <BaseInput
          label="Email"
          placeholder="Enter your email"
          value="example@email.com"
          onChangeText={() => {}}
        />,
      );

      expect(getByPlaceholderText('Enter your email').props.value).toBe(
        'example@email.com',
      );
    });

    it('should render error', () => {
      const error = 'Error Found';
      const {getByText} = render(
        <BaseInput
          label="Password"
          placeholder="Enter your password"
          error={error}
          onChangeText={() => {}}
        />,
      );

      expect(getByText(error)).toHaveTextContent(error);
    });

    it('should render flex BaseInput', () => {
      const {getByTestId} = render(
        <BaseInput
          label="Password"
          placeholder="Enter your password"
          style={{flex: 2}}
          onChangeText={() => {}}
        />,
      );

      expect(getByTestId('InputContainer')).toHaveStyle({
        flex: 2,
      });
    });

    it('should render when is focused', () => {
      const {getByTestId, getByPlaceholderText} = render(
        <BaseInput placeholder="Enter your password" onChangeText={() => {}} />,
      );

      fireEvent(getByPlaceholderText('Enter your password'), 'focus');

      expect(getByTestId('InputBox')).toHaveStyle({
        borderColor: theme.colors.BrandColors.Orange.main,
      });
    });

    it('should render when input is disabled', () => {
      const {getByTestId} = render(
        <BaseInput disabled onChangeText={() => {}} />,
      );

      expect(getByTestId('InputBox')).toHaveStyle({
        backgroundColor: theme.colors.BrandColors.GrayScale.almostWhite,
      });
    });

    it('should render when is password', () => {
      const {getByText} = render(
        <BaseInput
          label="password"
          placeholder="Enter your password"
          type="password"
          onChangeText={() => {}}
        />,
      );

      const showButton = getByText('Mostrar');
      fireEvent.press(showButton);
      const hideButton = getByText('Ocultar');

      expect(showButton).toBeOnTheScreen();
      expect(hideButton).toBeOnTheScreen();
    });
  });

  describe('Event Handling', () => {
    it('should call the onChangeText function when text is changed', () => {
      const onChangeTextMock = jest.fn();
      const {getByPlaceholderText} = render(
        <BaseInput
          label="Password"
          placeholder="Enter your password"
          onChangeText={onChangeTextMock}
        />,
      );

      fireEvent.changeText(
        getByPlaceholderText('Enter your password'),
        'newPassword123',
      );

      expect(onChangeTextMock).toHaveBeenCalledWith('newPassword123');
    });

    it('should call the onChangeText function when text with mask is changed', () => {
      const onChangeTextMock = jest.fn();
      const {getByPlaceholderText} = render(
        <BaseInput
          label="Birthday"
          placeholder="Enter your birthday"
          onChangeText={onChangeTextMock}
          type="birthday"
        />,
      );

      fireEvent.changeText(
        getByPlaceholderText('Enter your birthday'),
        '10101990',
      );

      expect(onChangeTextMock).toHaveBeenCalledWith('10/10/1990');
    });
  });
});
