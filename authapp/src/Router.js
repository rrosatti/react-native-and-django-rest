import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import { StyleSheet, StatusBar } from 'react-native';

const RouterComponent = () => {
  return (
    <Router>
      <Stack hideNavBar key="root">
        <Stack
          key="auth"
          type="reset"
          navigationBarStyle={style.navBarStyle}
          titleStyle={style.titleStyle}
        >
        </Stack>
        <Stack
          key="main"
          type="reset"
          navigationBarStyle={style.navBarStyle}
          titleStyle={style.titleStyle}
        >
        </Stack>
      </Stack>
    </Router>
  )
};

const style = StyleSheet.create({
  navBarStyle: {
    top: StatusBar.currentHeight
  },
  titleStyle: {
    flexDirection: 'row',
    width: 200
  }
});

export default RouterComponent;
