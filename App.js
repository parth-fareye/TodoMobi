import React from "react";
//import { Text, Button, SafeAreaView, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

const AppNavigator = createStackNavigator(
    {
        Home: HomePage,
        Login: LoginPage,
        Signup: SignupPage,
    }
);

const Navigator = createAppContainer(AppNavigator);

const App = () => {
    return (
        <Navigator>
            <HomePage/>
        </Navigator>
    )
}

// const App = () => {

//     render() {
//         return (
//             <NavigationContainer>
//                 <stack.Navigator>
//                     <stack.Screen
//                         name="HomePage"
//                         component={HomePage}
//                     />
//                     <stack.Screen
//                         name="LoginPage"
//                         component={LoginPage}
//                     />
//                     <stack.Screen
//                         name="SignupPage"
//                         component={SignupPage}
//                     />
//                 </stack.Navigator>
//             </NavigationContainer>
//         )
//     };

//     // return (
//     //     <Text> adjfkja
//     //     </Text>
//     // )
// };

// const styles = StyleSheet.create({

// });

export default App;