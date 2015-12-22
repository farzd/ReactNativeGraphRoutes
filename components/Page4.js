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
        transform: [{
            translateY: 33,
            translateX: 0
        }],
        position: 'absolute',
        bottom: 0
    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
});

export default class Page4 extends Component {
    componentWillReceiveProps(props) {
        // if (props.app.showProfile) {
        //     this.panPage();
        // } else {
        //     this.panPage('up');
        // }
    }

    panPage(pageState) {
        this.pageTop = new Animated.Value(window.height);
        this.pageTop = 64;

        if (pageState) {
            this.pageTop = new Animated.Value(64);
            this.pageTop = window.height;
            this.forceUpdate();
        }

        LayoutAnimation.configureNext({
            duration: 300,
            create: {
                type: 'linear',
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                type: 'spring',
                springDamping: 1
            }
        });
    }

    render() {
        return (
            <Animated.View style={[styles.wrapper, {top: this.pageTop}]}>
                <Text style={styles.text}>Profile</Text>
                <TouchableOpacity onPress={() => { this.props.actions.hideProfile(); }}>
                    <Text style={styles.text}> close </Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}
