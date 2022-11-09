import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import AddTodo from './AddTodo.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoList = ({navigation}) => {
    
    const [todoList, setTodoList] = React.useState([]);
    const [page, setPage] = React.useState("Todo");
    const email = navigation.getParam('email');
    //console.log(email);

    React.useEffect(() => {
        getItems();
    }, [todoList]);


    const getItems = async () => {
        try {
            const todoListJSON = await AsyncStorage.getItem(JSON.stringify(email));
            if(todoListJSON!=null){
                setTodoList(JSON.parse(todoListJSON));
            }
            console.log(todoList);
        } catch (error) {
            console.log(error);
        }
    };

    const updateItems = async () => {
        try {
            await AsyncStorage.removeItem(JSON.stringify(email));
            await AsyncStorage.setItem(JSON.stringify(email), JSON.stringify(todoList));
            getItems();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const clearAsync = async () => {
        try {
            await AsyncStorage.removeItem(JSON.stringify(email));
            setTodoList([]);
            getItems();
        } catch (error) {
            console.log(error);
        }
    }

    const Item = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    item.status = !item.status;
                    updateItems()}}
                    style={(page==="Todo") ? styles.todoItem : styles.doneItem}
            >
                <Image
                    style={styles.icon}
                    source={
                        item.type==='Work'
                        ? require("../assets/work.png")
                        : require("../assets/personal.png")
                    }
                />
                <Text style={styles.listItem}>{item.title}</Text>
                <Text style={styles.listItem}>{item.dueDate}</Text>
            </TouchableOpacity>
        )
    }

    const handleEmpty = () => {
        return (
            <Text>Nothing to show!</Text>
        )
    }

    // const handleAdd = () => {
    //     console.log("go to add form")
    // }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text>Hello {JSON.stringify(email)}!</Text>
            </View>
            <View style={styles.navBar}>
                <TouchableOpacity
                    onPress={() => {setPage("Todo")}}
                    style={styles.navBarBtn}
                >
                    <Text>Todo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {setPage("Done")}}
                    style={styles.navBarBtn}
                >
                    <Text>Done</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listContainer}>
                {/* {() => getItems()} */}
                {/* <Text onPress={getItems}>Show List</Text> */}
                <FlatList
                    data={(page==="Todo") ? todoList.filter(e => e.status===false) : todoList.filter((e) => e.status===true) }
                    //data={todoList}
                    renderItem={Item}
                    ListEmptyComponent={handleEmpty}
                    style={styles.list}
                />
                <TouchableOpacity
                    onPress={async () => navigation.navigate('AddTodo', {email: email})}
                    //onPress={clearAsync}
                    style={styles.addTodoBtn}
                >
                    <Text>Add Todo</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContainer: {
        flex: 10,
    },
    navBar: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
    navBarBtn: {
        flex : 1,
        alignItems: 'center',
        backgroundColor: 'magenta',
        padding: 10,
        justifyContent: 'center',
        margin: 10,
    },
    addTodoBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: 'magenta',
        padding: 10,
        borderRadius: 10,
    },
    todoItem: {
        flexDirection: 'row',
        margin: 5,
        backgroundColor: 'lightcyan',
        justifyContent: 'center',
        height: 40,
        alignItems: 'center',
    },
    doneItem: {
        flexDirection: 'row',
        margin: 5,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        height: 40,
        alignItems: 'center',
    },
    list: {
        flex: 9,
    },
    listItem: {
        flex: 1,
    },
    icon: {
        flex: 1,
        resizeMode: 'contain',
        height: 35,
        justifyContent: 'center',
    }
})

export default TodoList;