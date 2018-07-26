import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import ToolBar from './component/Toolbar';

import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({
    $primaryColor: 'black',
    $secondaryColor: '#FFFFFF',
    $outline: 1
})

const APPBARHIGHT = Platform.OS === 'ios' ? 20 : 20;

export default class App extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor='red'
                />
                <ToolBar />
                <HomeScreen />
            </View>
        );
    }
}

