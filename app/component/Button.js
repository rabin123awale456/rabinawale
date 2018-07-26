import React from 'react';
import { Button, View } from 'react-native';
const Buttons = (props) => (
    <View>
        <Button
            title={props.title}
            onPress={props.onPress}
            color={props.color}
        />
    </View>


);
export default Buttons;