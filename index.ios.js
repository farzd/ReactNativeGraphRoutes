import React, { Component } from 'react-native';
import * as config from './configuration';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import CustomNavigationBar from './components/CustomNavigationBar';

const {
  AppRegistry,
  Navigator
} = React;

class graphRoutes extends Component {
    renderScene(route, nav) {
        switch (route.name) {
        case 'page1' :
            return <Page1 />;

        case 'page2' :
            return <Page2 />;

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
          configureScene={this.configureScene}
          initialRoute={config.routes[1]}
          initialRouteStack={config.routes}
          renderScene={this.renderScene}
          navigationBar={<CustomNavigationBar />} />
    );
  }
};

AppRegistry.registerComponent('graphRoutes', () => graphRoutes);
