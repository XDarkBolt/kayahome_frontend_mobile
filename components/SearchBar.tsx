import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function SearchBar() {
    //const [text, onChangeText] = React.useState('Useless Text');

    return (
        <View style={styles.searchbar}>
            <SafeAreaView >
                <TextInput
                style={searchbar.textinput}
                    //onChangeText={onChangeText}
                    //value={text}
                    inlineImageLeft='search_icon'
                    placeholder='Search'
                    clearTextOnFocus={true}
                    clearButtonMode = 'while-editing'
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    searchbar: {
        paddingTop: 50,
        backgroundColor: 'rgb(28, 28, 30)',
    }
})

const searchbar = StyleSheet.create({
    textinput: {
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'rgb(28, 28, 30)',
        backgroundColor: 'rgb(229, 229, 234)',
        borderRadius: 50,
    }
})