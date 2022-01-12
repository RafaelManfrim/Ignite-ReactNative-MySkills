import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

type ButtonProps = {
    children: React.ReactNode,
    onPress: () => void,
    style?: object
}

export function Button({children, onPress, style}: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, style]} activeOpacity={0.7} onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#944ae8',
        padding: 16,
        borderRadius: 8,
        marginTop: 8,
        alignItems: 'center'
        
    },
    buttonText: {
        color: '#FDFDFD',
        fontSize: 16,
        fontWeight: 'bold'
    }
})