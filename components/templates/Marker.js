import React, { useEffect } from 'react';

import {
    StyleSheet,
} from 'react-native';

import { Marker } from 'react-native-maps';

const MyMarker = ({ markerName, markerDescription, latitude, longitude }) => {

    return (
        <Marker
            draggable
            coordinate={{
                latitude: latitude,
                longitude: longitude,
            }}
            onDragEnd={
                (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={markerName}
            description={markerDescription}
        />
    );
};

const styles = StyleSheet.create({

});

export default MyMarker;