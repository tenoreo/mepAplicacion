import React, { FC } from 'react';
import {Dimensions, Text, StyleSheet} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

//const {height, width} = Dimensions.get('screen');

interface Props {
    title: string;
    onPress: () => void;
}

const App : FC <Props> = (props) => {
    return (
       <TouchableOpacity style={styles.container} onPress={props.onPress}>
           <Text style={styles.text}>{props.title}</Text>
       </TouchableOpacity>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#748FFC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginVertical: 10,
        width: 320,
        // height: '20%'
    }, 
    text: {
        color: '#fff',
        fontSize: 20
    }
})