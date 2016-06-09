import React, { Component } from 'react-native';
import * as config from '../configuration';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import CustomNavigationBar from './CustomNavigationBar';

const {View, Navigator, StyleSheet } = React;
const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        backgroundColor: '#EF6C00',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default class Container extends Component {
    constructor() {
        super();
    }

    renderScene(route, nav) {
        switch (route.name) {
        case 'page1' :
            return <Page1 />;

        case 'page2' :
            return <Page2 navigator={nav} />;

        case 'page3' :
            return <Page3 />;

        default :
            return <Page1 />;
        }
    }

    configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig;
        }

        return {
            ...Navigator.SceneConfigs.HorizontalSwipeJump,
            gestures: null
        };
    }

  render() {
    return (
            <Navigator
              globalNav={this.props.globalNav}
              configureScene={this.configureScene}
              initialRoute={config.routes.default[1]}
              initialRouteStack={config.routes.default}
              renderScene={this.renderScene}
              navigationBar={<CustomNavigationBar />} />
    );
  }
};
