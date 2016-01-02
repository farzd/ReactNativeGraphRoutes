import React, { Component, PropTypes } from 'react-native';
const { Text, View, TouchableOpacity, StyleSheet } = React;
import * as config from '../configuration';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        height: 46,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    navBarTitleText: {
        fontWeight: '500',
        textAlign: 'center',
        color: 'blue'
    },
    navBarButton: {
        color: 'blue',
        flexDirection: 'column',
        alignItems: 'center',
        width: 70,
        height: 20

    },
    navBarLeftButton: {
        textAlign: 'left',
        paddingLeft: 10
    },
    navBarRightButton: {
        textAlign: 'right',
        paddingRight: 10
    }
});

export default class CustomNavigationBar extends Component {
    constructor(props) {
        super(props);
        this.goForward = this.goForward.bind(this);
        this.goBack = this.goBack.bind(this);

        this.routes = this.props.navState.routeStack.map((route) => {
            return route.name;
        });

        this.state = {
            routes: this.routes,
            routeIndex: this.props.navState.presentedIndex,
            newRoute: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.navigator.props.showProfile) {
            this.setState({
                routes: [config.routes.graphRoutes[0].name],
                routeIndex: 0,
                newRoute: true
            });
        } else {
            this.setState({
                routes: this.routes,
                routeIndex: this.props.navState.presentedIndex,
                newRoute: false
            });
        }
    }

    goForward() {
        const updateRouteIndex = this.state.routeIndex + 1;
        if (updateRouteIndex <= this.state.routes.length - 1) {
            this.setState({
                routeIndex: updateRouteIndex
            });

            this.props.navigator.jumpForward();
        }
    }

    goBack() {
        const updateRouteIndex = this.state.routeIndex - 1;
        if (updateRouteIndex >= 0) {
            this.setState({
                routeIndex: updateRouteIndex
            });

            this.props.navigator.jumpBack();
        }

        if (this.state.newRoute) {
            this.props.navigator.props.updateRoute();
        }
    }

    getTitle() {
        return this.state.routes[this.state.routeIndex].toUpperCase();
    }

    getForwardTitle() {
        const updateRouteIndex = this.state.routeIndex + 1;

        if (updateRouteIndex <= this.state.routes.length - 1) {
            return this.state.routes[updateRouteIndex];
        }
        return null;
    }

    getBackTitle() {
        const updateRouteIndex = this.state.routeIndex - 1;

        if (updateRouteIndex >= 0) {
            return this.state.routes[updateRouteIndex];
        }

        if (this.state.newRoute) {
            return '< Back';
        }

        return null;
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={this.goBack}>
                    <Text style={[styles.navBarButton, styles.navBarLeftButton]}> {this.getBackTitle()} </Text>
                </TouchableOpacity>
                <Text style={styles.navBarTitleText}>{this.getTitle()}</Text>
                <TouchableOpacity onPress={this.goForward}>
                    <Text style={[styles.navBarButton, styles.navBarRightButton]}> {this.getForwardTitle()} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

CustomNavigationBar.propTypes = {
    navState: PropTypes.object,
    navigator: PropTypes.object
};
