import React, { Component } from 'react-native';

const { StyleSheet, Text, View } = React;
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: '#2196F3',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 40,
        color: '#fff'
    }
});

export default class Page2 extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>Page 2</Text>
            </View>
        );
    }
}
