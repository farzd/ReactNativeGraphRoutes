import React, { Component } from 'react-native';
import Container from './components/Container';
import Page4 from './components/Page4';
import Page5 from './components/Page5';

const { AppRegistry, View, Navigator, StyleSheet } = React;
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

class graphRoutes extends Component {
    constructor() {
        super();
    }

    renderScene(route, nav) {
        switch (route.name) {
        case 'page4' :
            return <Page4 globalNav={nav} />;

        case 'page5' :
            return <Page5 globalNav={nav} />;

        default :
            return <Container globalNav={nav} />;
        }
    }

    configureScene(route) {
        if (route.sceneConfig) {
            return route.sceneConfig;
        }

        return {
            ...Navigator.SceneConfigs.FloatFromBottom,
            gestures: null
        };
    }

  render() {
    return (
        <Navigator
          configureScene={this.configureScene}
          initialRoute={{}}
          renderScene={this.renderScene} />
    );
  }
};

AppRegistry.registerComponent('graphRoutes', () => graphRoutes);
