import React from 'react';

import {fireEvent, render} from '@utils/test-utils';
import {theme} from '@theme/index';
import {Button} from '@components/Button';
import {FontTypes} from '@theme/typography';

const PRIMARY_COLOR = theme.colors.BrandColors.Yellow.main;

describe('Render Button', () => {
  describe('Default Button', () => {
    test('renders a default button', () => {
      const title = 'Test Button';
      const {getByTestId, getByText} = render(<Button title={title} />);
      const component = getByTestId('ComponentButton');

      expect(getByText(title)).toHaveStyle(FontTypes.TextBodyBold);
      expect(component).toHaveStyle({
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR,
        borderTopLeftRadius: theme.borderRadius.MD,
        borderTopRightRadius: theme.borderRadius.MD,
        borderBottomRightRadius: theme.borderRadius.MD,
        borderBottomLeftRadius: theme.borderRadius.MD,
      });
    });

    test('calls the onPress callback when clicked', () => {
      const title = 'Test Button';
      const click = jest.fn();
      const {getByTestId} = render(<Button title={title} onPress={click} />);

      fireEvent.press(getByTestId('ComponentButton'));

      expect(click).toHaveBeenCalledTimes(1);
    });
  });

  describe('Loading Button', () => {
    test('calls the onPress callback when clicked in loading', () => {
      const title = 'Test Button';
      const click = jest.fn();
      const {getByTestId} = render(
        <Button title={title} onPress={click} loading />,
      );
      const component = getByTestId('ComponentButton');
      const loading = getByTestId('Loading');

      fireEvent.press(component);

      expect(click).not.toHaveBeenCalled();
      expect(loading).toHaveStyle({
        color: theme.colors.BrandColors.GrayScale.white,
      });
      expect(component).toHaveStyle({
        backgroundColor: theme.colors.BrandColors.GrayScale.medium,
      });
    });

    test('renders loading when mode is "outlined"', () => {
      const title = 'Test Button';

      const {getByTestId} = render(
        <Button title={title} loading mode="outlined" />,
      );
      const component = getByTestId('ComponentButton');
      const loading = getByTestId('Loading');

      fireEvent.press(component);

      expect(loading).toHaveStyle({color: PRIMARY_COLOR});
      expect(component).toHaveStyle({
        backgroundColor: theme.colors.BrandColors.GrayScale.medium,
      });
    });
  });

  describe('Disabled Button', () => {
    test('renders when is disabled', () => {
      const title = 'Test Button';

      const {getByTestId, queryByText} = render(
        <Button title={title} disabled />,
      );
      const component = getByTestId('ComponentButton');
      const label = queryByText(title);

      fireEvent.press(component);

      expect(label).toHaveStyle({
        color: theme.colors.BrandColors.GrayScale.dark,
      });
      expect(component).toHaveStyle({
        backgroundColor: theme.colors.BrandColors.GrayScale.medium,
      });
    });

    test('renders when is disabled and mode text', () => {
      const title = 'Test Button';

      const {getByTestId, queryByText} = render(
        <Button title={title} disabled mode="text" />,
      );
      const component = getByTestId('ComponentButton');
      const label = queryByText(title);

      fireEvent.press(component);

      expect(label).toHaveStyle({
        color: theme.colors.BrandColors.GrayScale.dark,
      });
      expect(component).not.toHaveStyle({
        backgroundColor: theme.colors.BrandColors.GrayScale.medium,
      });
    });
  });

  describe('Outlined Button', () => {
    test('renders an outlined button', () => {
      const title = 'Test Button';
      const {getByTestId, getByText} = render(
        <Button title={title} mode="outlined" />,
      );

      expect(getByText(title)).toHaveStyle(FontTypes.TextBodyRegular);
      expect(getByTestId('ComponentButton')).toHaveStyle({
        borderWidth: 1.5,
        borderColor: theme.colors.BrandColors.Orange.light,
      });
    });
  });

  describe('Text Button', () => {
    test('renders a text button', () => {
      const title = 'Test Button';

      const {getByTestId, getByText} = render(
        <Button title={title} mode="text" />,
      );

      expect(getByTestId('ComponentButton')).not.toHaveStyle({
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
      });
      expect(getByText(title)).toHaveStyle({
        ...FontTypes.TextBodyMedium,
        color: theme.colors.BrandColors.Orange.main,
      });
    });
  });

  describe('Flex Button', () => {
    test('renders a flex button', () => {
      const title = 'Test Button';

      const {root} = render(<Button title={title} flex={2} />);

      expect(root).toHaveStyle({flexGrow: 2});
    });
  });
});
