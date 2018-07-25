import React from 'react';
import {
    View, Text
} from 'react-native';

import Buttons from '../component/Buttons';


export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0

        }
    }

    subNumber = () => {
        this.setState({ count: this.state.count - 1 })
    }
    AddNumber = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.subcontainer} >
                    <Buttons
                        title='sub'
                        color='blue'
                        onPress={() => this.subNumber()}
                    />

                    <Text>
                        {this.state.count}
                    </Text>



                </ View>

            </ View>
        );
    };
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    subcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',

        width: '100%'
    }
}