import React, { Component } from 'react-native';
import * as config from './configuration';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import CustomNavigationBar from './components/CustomNavigationBar';

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

        this.state = {
            profileShown: false
        }
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
      console.log('re render', this.state.profileShown);

    return (
            <Navigator
              configureScene={this.configureScene}
              initialRoute={config.routes[1]}
              initialRouteStack={config.routes}
              renderScene={this.renderScene}
              updateNavBar={() => {console.log('yo'); this.setState({profileShown: true})}}
              showProfile={this.state.profileShown}
              navigationBar={<CustomNavigationBar />} />
    );
  }
};

AppRegistry.registerComponent('graphRoutes', () => graphRoutes);
