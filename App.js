import React from "react";
//import { Text, Button, SafeAreaView, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "react-navigation-native";
import { createStackNavigator } from "react-navigation-stack";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import TodoList from './components/TodoList.js';
import AddTodo from './components/AddTodo.js';

const AppNavigator = createStackNavigator(
    {
        Home: HomePage,
        Login: LoginPage,
        Signup: SignupPage,
        Todo: {
            screen: TodoList,
            navigationOptions: {
                headerLeft: ()=> null,
            },
        },
        AddTodo: {
            screen: AddTodo,
            navigationOptions: {
                headerLeft: ()=> null,
            },
        },
    }
);

const Navigator = createAppContainer(AppNavigator);

export default App = () => {
    return (
        <Navigator>
            <HomePage/>
        </Navigator>
    )
    // return (
    //     <AddTodo/>
    // )
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


// const Stack = createStackNavigator();
// const [isLoggedIn, setIsLoggedIn] = React.useState(false);

// export default App = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator 
//                 initialRouteName="HomePage"
//             >
//                 <Stack.Screen name="Home" component={HomePage}/>
//                 <Stack.Screen name="Todo" component={todoList} options={{headerShown:false}}/>
//                 <Stack.Screen name="AddTodo" component={AddTodo} options={{headerShown:false}}/>
//                 <Stack.Screen name="Login" component={LoginPage}/>
//                 <Stack.Screen name="Signup" component={SignupPage}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

//export default App;