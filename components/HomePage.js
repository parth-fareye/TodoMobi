import React from "react";
import { Text, Button, SafeAreaView, StyleSheet, View } from "react-native";

const HomePage = (props) => {
    return (
        <SafeAreaView style={{ flex : 1 }} >
            <Text style={styles.header}>Welcome to Todo App</Text>
            <View style={styles.container}>
            <Button 
                style={styles.button}
                title="Login"
                onPress={() => props.navigation.navigate('Login')}
                style={styles.btn}
                color='#8a2be2'
            />
            <Button 
                style={styles.button}
                title="Sign Up"
                onPress={() => props.navigation.navigate('Signup')}
                style={styles.btn}
                color='#8a2be2'
            />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
        number: 30,
        fontWeight: "bold",
        backgroundColor: 'purple',
    },
    container: {
        flex: 2,
        backgroundColor: 'beige',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 10,
        elevation: 4,
        backgroundColor: 'purple',
    },
});

export default HomePage;