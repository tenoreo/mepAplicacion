import React, { FC } from 'react';
import {Dimensions, View, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('screen');

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const Input :FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={props.secureTextEntry || false} onChangeText={props.onChangeText} />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#1C7ED6',

    },  
    input: {
        padding: 15
    }
})