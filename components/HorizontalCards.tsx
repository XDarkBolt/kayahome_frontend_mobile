import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMoviesFromApi } from '../services/apiservice';

export default function ElevatedCards() {
    const CompArray = ['First Name', 'Last Name', 'Phone', 'Email', 'Etc']
    const CompArray2 = ['1996', '1997', '1998', '1999', '2000']

    let [movielist, setMovielist] = useState<Movie[]>([]);

    const fetchData = async () => {
        movielist = await getMoviesFromApi();
        setMovielist(movielist);
    };

    useEffect(() => {
        fetchData();
    }, []);

    var cardElevetadComponents = movielist.map((item, index) => (
        <View key={item.id} style={[cards.card, cards.shadow]}>
            <Text style={cards.title} adjustsFontSizeToFit={true} numberOfLines={1}>{item.title}</Text>
            <Text style={cards.date}>{item.releaseYear}</Text>
        </View>
    ))

    return (
        <View>
            <Text style={styles.headingText}>Movies List</Text>
            <ScrollView
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.container}>
                {cardElevetadComponents}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        color: 'rgb(229, 229, 234)',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        padding: 8
    },
})

const cards = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 8,
        color: '#000000'
    },
    shadow: {
        backgroundColor: 'rgb(58, 58, 60)',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 4
    },
    title: {
        color: 'rgb(229, 229, 234)',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    date: {
        color: 'rgb(174, 174, 178)',
        fontSize: 10,
        fontWeight: 'normal',
        textAlign: 'left'
    },
})