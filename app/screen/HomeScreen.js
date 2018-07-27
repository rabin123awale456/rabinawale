import React from 'react';
import {
    StyleSheet, Text, View, Button,
    ActivityIndicator,

} from 'react-native';
import Buttons from '../component/Button';
import ListItems from '../component/ListItem';

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true
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
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    {this.state.loading === true ?
                        < ActivityIndicator
                            size="large"
                            color="red"
                            animating={this.state.loading}
                        /> :
                        null
                    }
                </View>
                <View>
                    <ListItems
                        data={this.state.data}
                    />
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        height: 200
    },

});
