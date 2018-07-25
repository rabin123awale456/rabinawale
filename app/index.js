/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';
import HomeScreen from './screen/HomeSceen';
import ToolBar from './component/ToolBar';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const APPBARHEIGHT = Platform === 'ios' ? null : 20;
export default class Apps extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='red'
                    height={APPBARHEIGHT}
                />
                <ToolBar />
                <HomeScreen />

            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}
