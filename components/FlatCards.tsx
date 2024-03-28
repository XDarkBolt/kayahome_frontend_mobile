import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'https://picsum.photos/seed/696/3000/2000' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
    },
    image: {
        width: '100%',
        height: 100,
        backgroundColor: '#0553',
        borderRadius: 10
    },
})