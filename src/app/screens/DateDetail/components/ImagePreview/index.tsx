import React, { useState } from 'react';
import { View, Image } from 'react-native';
import LoadingView from '../LoadingView';

import styles from './styles';

const ImagePreview = ({ image }: { image: string }) => {
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <View style={styles.gridView}>
            <Image
                style={styles.imageThumbnail} 
                source={{ uri: image }} 
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)} />
            {loading && <LoadingView/>}
        </View>
    );
};

export default ImagePreview;