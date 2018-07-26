import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class ToolBar extends React.Component {
    state = {
        home: "Home",
        loading: true

    }

    search = () => {
        this.setState({ home: "about" });

    }
    render() {
        return (
            <View style={{ width: '100%', }}>
                <View style={styles.subcontainer}>

                    <View style={{ flex: 1 }}>
                        <Text>
                            <Icon name="bars" size={30} color="#900" />
                        </Text>
                    </View>

                    <View style={{ flex: 4 }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>
                            {this.state.home}
                        </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text>

                            <Icon name="search" size={30} color="#900" onPress={() => this.search()} />
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>
                            <Icon name="bell" size={30} color="#900" />
                        </Text>
                    </View>




                </View >
            </View >
        )
    }
}


const styles = StyleSheet.create({
    subcontainer: {
        padding: 9,
        height: 55,
        flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'grey',
    }
})