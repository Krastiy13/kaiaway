import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';

import { SvgXml } from 'react-native-svg';
import { xml } from '../../assets/contants';

const MyComponent = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#fce2c4', 'rgb(192, 141, 230)',]}
                style={styles.button}
            />
            {/* <SvgXml xml={xml} width="100%" height="100%" /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        width: 400, // Establece el ancho del botón según tus necesidades
        flex: 1
    },
    image: {
        flex: 1,
        display: "flex",
        justifyContent: "center",


    },
});

export default MyComponent;
