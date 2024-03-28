import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
    const CompArray = ['First Name', 'Last Name', 'Phone', 'Email', 'Etc']
    const cardElevetadComponents = CompArray.map(type => <View style={[styles.card, styles.cardElevetad]}><Text>{type}</Text></View>)
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCards</Text>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.container}>
            <>{cardElevetadComponents}</>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding: 8
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 8,
        color: '#000000'
    },
    cardElevetad: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 2
    },
})