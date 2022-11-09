import React from "react";
import { Text, Button, SafeAreaView, StyleSheet, View, TouchableOpacity } from "react-native";

const HomePage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.header}>Welcome to Todo App</Text>
            <View style={styles.formContainer}>
                {/* <Button 
                    style={styles.button}
                    title="Login"
                    onPress={() => props.navigation.navigate('Login')}
                /> */}
                {/* <Button 
                    style={styles.button}
                    title="Sign Up"
                    onPress={() => props.navigation.navigate('Signup')}
                /> */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text>Signup</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1
    },
    header: {
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
        number: 30,
        fontWeight: "bold",
        backgroundColor: 'gray',
    },
    formContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 6,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 30,
        elevation: 4,
        backgroundColor: 'magenta',
    },
});

export default HomePage;