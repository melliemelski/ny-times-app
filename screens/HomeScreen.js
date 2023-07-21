import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Story from '../components/Story';
import axios from "axios";


const HomeScreen = () => {
    const [stories, setStories] = useState([]);
    const getStories = () => {
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey')
        .then( (response ) =>{
        // handle success
        console.log(response.data);
        setStories(response.data.stories)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
    }
    useEffect(() => {
        getStories()
    });
    return(<SafeAreaView style={styles.container}>
        <ScrollView>
            <Story/>
            
        </ScrollView>
       
    </SafeAreaView>)
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
       
    },
});