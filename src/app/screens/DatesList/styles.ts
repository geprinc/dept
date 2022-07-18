import { StyleSheet } from "react-native";

const ICON_SIZE = 20

export default StyleSheet.create({
    container: {
        flex: 1
    },
    dateText: {
        marginVertical: 10,
        marginLeft: 10,
        fontSize: 16
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE
    },
    indicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectableItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    }
});
