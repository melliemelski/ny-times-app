import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

const Story = () => {
    return(<SafeAreaView style={styles.container}>
        <Image source= {{
            url: "data.url"
        }}
        style={styles.image}
        />
            <View style={{padding: 10}}>
                {/*  title*/}
                <Text style={styles.title}>Story Title Using React Native</Text>
                {/*  description*/}
                <Text style={styles.description}>Story Description Using React Native</Text>
            </View>
    </SafeAreaView>)
}

export default Story;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#fff",
        marginTop: 20,
    },
    image:{
        height: 200,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10,
    }
}
)