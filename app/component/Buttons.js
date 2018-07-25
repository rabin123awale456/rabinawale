import React from 'react';
import { Button } from 'react-native';

const Buttons = (props) => (
    <Button
        title={props.title}
        color={props.color}
        onPress={props.onPress}
    />
)
export default Buttons;