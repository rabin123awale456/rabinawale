import React from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';


const ToolBar = () => {
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <View style={styles.subcontainer}>

                <View>
                    <Text>
                        navbar
                </Text>
                </View>

                <View>
                    <Text>
                        Home
                </Text>
                </View>
                <View>
                    <Text>
                        bail
                </Text>
                </View>
                <View>
                    <Text>
                        search
                </Text>
                </View>

                <View>
                </View>
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    subcontainer: {
        backgroundColor: 'grey',
        height: 55,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
export default ToolBar;