import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Buttons from '../component/Button';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.fetchapi();
    }
    fetchapi = () => {
        const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2a5edf88e76845559a0c7016de7150ee";
        fetch(url, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => this.setState({ data: data.articles, loading: false }))
            .catch((error) => console.log('error', error))
    }


    render() {


        return (
            <View style={styles.container} >
                <View>

                    <FlatList
                        data={this.state.data}
                        renderItem={(item) => {
                            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                                <Text>
                                    {item.name}
                                </Text>
                            </View>
                        }}
                    />
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        height: 200
    },

});
