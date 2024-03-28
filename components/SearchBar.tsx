import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SearchBar() {
    return (
        <View style={styles.searchbar}>
            <Text>SearchBar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    searchbar:{
        height: 50,
        marginTop: 50
    }
})