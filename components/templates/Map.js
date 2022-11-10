import React, { useEffect, useState } from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';

import MapView from 'react-native-maps';
import MyMarker from './Marker';
import Geolocation from '@react-native-community/geolocation';
import NavigationBar from 'react-native-navbar';

const Map = ({ Markers }) => {
    const [spot, setSpot] = useState({ latitude: 0, longitude: 0 });
    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
    });
    const [nearbyPointOfInterest, setNearbyPointOfInterest] = useState();

    useEffect(() => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
            });
        })
    }, []);

    const rightButtonConfig = {
        title: 'Get place',
        handler: () => alert('hello!'),
    };

    const titleConfig = {
        title: 'First practical',
    };

    const radMetter = 2 * 1000;
    const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + position.latitude + ',' + position.longitude + '&radius=' + radMetter + '&key=' + "AIzaSyAPxUNbZg1324CBXfTdnp99sNLZJcl2JP0";

    useEffect(() => {
        const fetchNearbyPointOfInterest = async (url) => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setNearbyPointOfInterest(json);
                console.log(json);
            } catch (error) {
                console.error(error);
            }
        }
        fetchNearbyPointOfInterest(url);
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.mapStyle}
                initialRegion={{
                    latitude: position.latitude,
                    longitude: position.longitude,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                showsCompass={true}
                onPress={(e) => setSpot(e.nativeEvent.coordinate)}>
                <MyMarker
                    markerName={"user clicking"}
                    markerDescription={"description"}
                    latitude={spot.latitude}
                    longitude={spot.longitude}
                />
            </MapView>
            <View style={{ width: '100%', }}>
                <NavigationBar
                    title={titleConfig}
                    rightButton={rightButtonConfig}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default Map;