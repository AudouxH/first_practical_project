import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Map from '../templates/Map';

const Home = ({ Markers }) => {

    return (
    <View style={{ flex: 1 }}>
        <Map></Map>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Home;
