import React from 'react';
import { FlatList, TouchableOpacity, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';



const ListItems = ({ data }) => (
    <FlatList
        data={data}
        numColumns={2}

        renderItem={({ item }) => (
            <TouchableOpacity style={{ flex: 1 }}>
                <View style={{ height: 200, borderWidth: 2 }}>
                    <Image
                        source={{ uri: item.urlToImage }}
                        style={{ height: 50, width: '100%' }}
                    />
                    <Text>
                        {item.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index}
    />
)
ListItems.propTypes = {
    data: PropTypes.object,
}
export default ListItems;