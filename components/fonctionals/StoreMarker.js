import AsyncStorage from '@react-native-async-storage/async-storage';

const store_markers = async ( key, markers ) => {
    try {
        await AsyncStorage.setItem(
            key,
            markers
        );
    } catch (error) {
        console.log(error);
    }
}

export default store_markers;