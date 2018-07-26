import React from 'react';
import { View, Text, TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class ToolBar extends React.Component {
    constructor() {
        super();
        this.state = {
            search: false,
            searchText: ''
        }
    }
    onPressSearch = () => {
        this.setState({ search: !false ? true : false })
        // if (this.state.search === false) {
        //     this.setState({ search: true })

        //     // alert('true')
        // } else {

        //     this.setState({ search: false })
        // }
    }
    render() {
        return (

            <View style={{ flex: 1, width: '100%' }}>
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        {this.state.search === false ?
                            <Icon name="menu" size={30} color="#FFFFFF" />
                            :
                            <Icon name="chevron-left" size={30} color="#FFFFFF"
                                onPress={() => this.setState({ search: false })} />
                        }
                    </View>

                    <View style={{ flex: 6 }}>
                        {this.state.search === false ?
                            <Text>
                                HOME
                     </Text> :
                            <TextInput
                                placeholder="search the item"
                                onChangeText={(e) => this.setState({ searchText: e })}
                                value={this.state.searchText}
                            />

                        }
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text>

                            <Icon name="search" size={30} color="#FFFFFF"
                                onPress={() => this.onPressSearch()} />
                        </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text>
                            <Icon name="notifications" size={30} color="#FFFFFF" />
                        </Text>
                    </View>
                </View>

            </View>
        )
    }
}
const styles = EStyleSheet.create({
    container: {
        backgroundColor: '$primaryColor',
        height: 55,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    items: {

    }
})