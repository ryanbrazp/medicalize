import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import colors from '../constants/Colors';

interface CustomInputProps extends TextInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={(text) => {
                onChangeText(text);
            }}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 40,
        paddingHorizontal: 16,
        height: 40,
        borderWidth: 1,
        borderColor: colors.darkGrey
    },
});

export default CustomInput;
