import 'styled-components/native';

import {theme} from '@theme/index';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    spacing: typeof theme.spacing;
    colors: typeof theme.colors;
    borderRadius: typeof theme.borderRadius;
  }
}
