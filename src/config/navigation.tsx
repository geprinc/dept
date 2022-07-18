import { StackNavigationOptions } from '@react-navigation/stack';
import i18next from 'i18next';
import Routes from '@constants/routes';
import { bdOrange, white } from '@constants/colors';
import statusBarConfig from '@constants/statusBar';
import { Navigation } from '@interfaces/navigation';

import fonts from './fonts';

type BuscoDueniosStackOptions = Omit<StackNavigationOptions, 'headerMode'> & { headerMode?: 'float' | 'screen' | 'none' };

// Default nav options for all screens
const defaultNavOptions = ({ route }: Navigation) => ({
    // Change screen title from i18n traslates files
    // i didn't knew why did this error ocurred
    headerTitle: i18next.t(route.name == Routes.DateData ? route.params?.date : `app:${route.name}`),
    headerStyle: {
      backgroundColor: bdOrange
    },
    headerBackTitleStyle: {
      color: white
    },
    headerTitleStyle: {
      ...fonts.baseFont,
      color: white
    },
    headerTintColor: white,
    safeAreaInsets: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }
});

export const appStackNavConfig = {
  screenOptions: defaultNavOptions
};

const defaultDrawerNavOptions = {
  // here we can setup drawer options
};

export const drawerStackNavConfig = {
  screenOptions: defaultDrawerNavOptions
};



// Default nav options for all screens
export const appScreensNavOptions: Partial<Record<Routes, BuscoDueniosStackOptions>> = {
  
};

export const statusBarStyles = {
  // To customize the status bar
  default: statusBarConfig.transparentStatusBar
};
