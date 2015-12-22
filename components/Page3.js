import React, { Component } from 'react-native';

const { StyleSheet, Text, View } = React;
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: '#FF9800',
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

export default class Page3 extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>Page 3</Text>
            </View>
        );
    }
}
