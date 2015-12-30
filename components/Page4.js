import React, { Component, PropTypes } from 'react-native';
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const { StyleSheet, Text, View, LayoutAnimation, Animated, TouchableOpacity } = React;
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'green',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: window.width,
        height: window.height,
        position: 'absolute',
        left: 0
    },
    text: {
        fontSize: 20,
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
                <Text style={styles.text}>Profile</Text>
                <TouchableOpacity onPress={() => { this.props.updateNavBar(); this.panPage();  }}>
                    <Text style={styles.text}> close </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
