import React, { useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@interfaces/reduxInterfaces';
import { Date } from '@interfaces/datesInterfaces';
import withLoadable from '@components/Loadable';
import { Navigation } from '@interfaces/navigation';

import styles from './styles';
import { actionCreators } from '@redux/dates/actions';
import Routes from '@constants/routes';

const DatesList = ({ navigation }: Navigation) => {
    const dispatch = useDispatch();
    const dates = useSelector<State, Date[]>((state: State) => state.dates.dates);
    const datesLoading = useSelector<State, boolean>((state: State) => state.dates.datesLoading);

    useEffect(() => {
        dispatch(actionCreators.getDates());
    }, []);

    // since we should only see the current datestring, we are not going to create a specific component for this element
    const renderItem = ({ item }: { item: Date}) => {
        const { date } = item;
        const handlePress = () => {
            dispatch(actionCreators.setSelectedDate(date));
            navigation.navigate(Routes.DateData, { date });
        };
        return (
            <TouchableOpacity onPress={handlePress} style={styles.selectableItem}>
                <Text style={styles.dateText}>{date}</Text>
            </TouchableOpacity>
        );
    };

    const keyExtractor = (item: Date) => item.date;
    return datesLoading ? (
        <View style={styles.indicatorContainer}>
            <ActivityIndicator size={80} />
        </View>
    ) : (
        <FlatList
            contentContainerStyle={styles.container}
            data={dates}
            renderItem={renderItem}
            keyExtractor={keyExtractor} />
    );
};

export default DatesList;