import React, { Component } from 'react-native';

const { StyleSheet, Text, View, TouchableOpacity } = React;
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: 'red',
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

export default class Page4 extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>Page 3</Text>
                    <TouchableOpacity onPress={ () => this.props.globalNav.pop()}>
                        <Text style={styles.text, {fontSize: 20}}> close </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => this.props.globalNav.push({
                            name: 'page5'
                        })}>
                        <Text style={styles.text, {fontSize: 10}}> open page 5 </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}
