import React, { useState, useEffect } from 'react';
import { View, Text, Button, Pressable, GestureResponderEvent } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { getMoviesFromApi } from '../services/apiservice';
import { styles } from '../styles/styles';

const HomeScreen = () => {
    const [title, setTitle] = useState("Button First State");
    const [data, setData] = useState('null'); // Initialize data state
    const isFocused = useIsFocused();

    const fetchData = async () => {
        const jsonMovies: Movie[] = await getMoviesFromApi();
        console.log(jsonMovies);
        setData(JSON.stringify(jsonMovies));
    };

    // Fetch data when the component mounts
    useEffect(() => {
        if (isFocused) {
            fetchData();
            setTitle('Button!');
        }
    }, [isFocused]); // Empty dependency array ensures it runs only once on mount

    async function onPress() {
        try {
            const jsonMovies: Movie[] = await getMoviesFromApi();
            jsonMovies.map(type => console.log(type));
            setTitle('Button Pressed!');
            return;
        } catch (error) {
            throw new Error('Function not implemented.');
        }
    }

    return (
        <View style={styles.container}>
            {data ? (
                <Text>Data received: {data}</Text>
            ) : (
                <Text>Loading data...</Text>
            )}
            <Button title="Refresh" onPress={fetchData} />

            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    );
};

export default HomeScreen;