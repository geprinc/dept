import { bdPurple, blue, darkBlue, orange, white } from './colors';

const statusBarConfig = {
  transparentStatusBar: {
    barStyle: 'dark-content',
    translucent: true,
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  },
  blueStatusBar: { barStyle: 'light-content', backgroundColor: blue },
  darkblueStatusBar: { barStyle: 'light-content', backgroundColor: darkBlue },
  whiteStatusBar: { barStyle: 'dark-content', backgroundColor: white },
  purpleStatusBar: { barStyle: 'light-content', backgroundColor: bdPurple },
  orangeStatusBar: { barStyle: 'light-content', backgroundColor: orange }
} as const;

export default statusBarConfig;
