import React, { Component } from 'react-native';

const { StyleSheet, Text, View } = React;
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: '#66BB6A',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 40,
        color: '#01579B'
    }
});

export default class Page1 extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>Page 1</Text>
            </View>
        );
    }
}
