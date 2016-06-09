import React, { Component } from 'react-native';

const { StyleSheet, Text, View, TouchableOpacity } = React;
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: 'yellow',
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

export default class Page5 extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>Page 5</Text>
                    <TouchableOpacity onPress={ () => this.props.globalNav.popToTop()}>
                        <Text style={styles.text, {fontSize: 20}}> close all </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}
