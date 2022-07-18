import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
      },
      imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
      },
      gridView: {
        flex: 1,
        flexDirection: 'column',
        margin: 1
      },
      indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
