import React from "react";
import { View, ActivityIndicator } from "react-native";

import styles from './styles';

const LoadingView = () => (
    <View style={styles.container}>
        <ActivityIndicator size="small" color="#FFD700"/>
    </View>
);

export default LoadingView;