import AsyncStorage from '@react-native-async-storage/async-storage';

const get_markers = async ( key, settingFunction ) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            settingFunction(value);
        }
    } catch (error) {
        console.log(error);
    }
}

export default get_markers;