import React from 'react';

import {Typography} from '@components/Typography';
import {FontTypes} from '@theme/typography';
import {render} from '@utils/test-utils';

describe('Typography Component', () => {
  it('should render text with body style', () => {
    const {getByText} = render(
      <Typography variation="GraphikBold">Hello, World!</Typography>,
    );

    expect(getByText('Hello, World!')).toHaveStyle(FontTypes.GraphikBold);
  });

  it('should render text with custom style', () => {
    const customStyle = {color: 'red', fontSize: 18};

    const {getByText} = render(
      <Typography variation="GraphikBold" style={customStyle}>
        Custom Text
      </Typography>,
    );
    const textElement = getByText('Custom Text');

    expect(textElement).toHaveStyle({color: customStyle.color});
  });
});
