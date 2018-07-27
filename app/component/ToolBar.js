import React from 'react';
import { View, Text, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class ToolBar extends React.Component {
    constructor() {
        super();
        this.state = {
            showHideINputText: false,
            loading: true
        }
    }
    onPressshowHide = () => {

        this.setState({ showHideINputText: !false })
        // this.state.showHideINputText === false ?
        //     this.setState({ showHideINputText: true })
        //     :
        //     this.setState({ showHideINputText: false })
    }
    render() {
        return (

            <View style={{ width: '100%' }}>

                <View style={styles.design}>
                    <View style={{ flex: 1 }}>

                        {this.state.showHideINputText === false ?
                            <Text style={{ color: '#ffffff' }}>
                                <Icon name='menu' size={30} color='#ffffff' />
                            </Text> :
                            <Text style={{ color: '#ffffff' }}>
                                <Icon name='chevron-left' size={30} color='#ffffff'
                                    onPress={() => this.setState({ showHideINputText: false })}
                                />
                            </Text>
                        }




                    </View>

                    <View style={{ flex: 6 }}>
                        {this.state.showHideINputText === false ?
                            <Text style={{ color: '#ffffff' }}>
                                Home
                            </Text>
                            :
                            <Text style={{ color: '#ffffff' }}>
                                serarchbar
                            </Text>
                        }

                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ color: '#ffffff' }}>
                            <Icon name='search' size={30} color='#ffffff'
                                onPress={() => this.onPressshowHide()} />
                        </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ color: '#ffffff' }}>
                            <Icon name='notifications' size={30} color='#ffffff' />
                        </Text>
                    </View>

                </View>
            </View>
        )
    }
}


const styles = EStyleSheet.create({
    design: {
        backgroundColor: '$primaryColor',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',

        paddingLeft: 15
    }
})