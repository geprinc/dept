import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@interfaces/reduxInterfaces';
import { actionCreators } from '@redux/dates/actions';
import { DateData } from '@interfaces/datesInterfaces';

import styles from './styles';
import ImagePreview from './components/ImagePreview';

const DateDetail = () => {
    const dispatch = useDispatch();
    const selectedDate = useSelector<State, string>((state: State) => state.dates.selectedDate);
    const date = useSelector<State, DateData[]>((state: State) => state.dates.date);
    const dateLoading = useSelector<State, boolean>((state: State) => state.dates.dateLoading);

    useEffect(() => {
        dispatch(actionCreators.getDate(selectedDate));
        return () => {
            dispatch(actionCreators.clearDateDetail());
        };
    }, [selectedDate]);

    const renderItem = ({ item }: { item: DateData}) => (
        <ImagePreview image={item.image} />      
    );

    return dateLoading ? (
        <SafeAreaView style={styles.indicatorContainer}>
            <ActivityIndicator size={80} />
        </SafeAreaView>
    ) : (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={date}
                renderItem={renderItem}
                numColumns={3}
                keyExtractor={(_, index) => `${index}`}
                />
      </SafeAreaView>

    );
}

export default DateDetail;
