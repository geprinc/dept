import { Linking, Platform } from "react-native";

export const openGPSlink = (lat?: number, lng?: number) => {
  const latitude = lat || -34.6055413;
  const longitude = lng || -58.3738174;
  var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
  var url = scheme + `${latitude},${longitude}`;
  Linking.openURL(url);
};
