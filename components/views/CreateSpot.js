import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';

const CreateSpot = ({ Markers }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Name of the new spot"/>
            <TextInput
                style={styles.input}
                onChangeText={setDescription}
                value={description}
                placeholder="Describe your new spot"/>
            <TextInput
                style={styles.input}
                onChangeText={setLatitude}
                value={latitude}
                keyboardType="numeric"
                placeholder="add latitude"/>
            <TextInput
                style={styles.input}
                onChangeText={setLongitude}
                value={longitude}
                keyboardType="numeric"
                placeholder="add longitude"/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default CreateSpot;