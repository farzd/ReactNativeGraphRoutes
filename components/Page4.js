import React, { Component, PropTypes } from 'react-native';
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const { StyleSheet, Text, View, LayoutAnimation, Animated, TouchableOpacity } = React;
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#FF9800',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: window.width,
        height: window.height,
        position: 'absolute',
        left: 0
    },
    text: {
        fontSize: 40,
        color: '#fff'
    }
});

export default class Page4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            offset: window.height
        };
    }

    componentWillReceiveProps(props) {
        this.panPage(props.showProfile);
    }

    panPage(showProfile) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

        if (showProfile) {
            this.setState({
                offset: 64
            });
        } else {
            this.setState({
                offset: window.height
            });
        }
    }

    render() {
        return (
            <View style={[styles.wrapper, {top: this.state.offset} ]}>
                <Text style={styles.text}>Page 4</Text>
                <TouchableOpacity onPress={() => { this.props.updateRoute(); this.panPage(); }}>
                    <Text style={styles.text, {fontSize: 20}}> close </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
