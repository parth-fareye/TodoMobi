import React from 'react';
import {  SafeAreaView, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddTodo = ({navigation}) => {
    const [title, setTitle] = React.useState();
    const [date, setDate] = React.useState(new Date())
    const [open, setOpen] = React.useState(false);
    const [dateSet, isDateSet] = React.useState(false);
    const [dateString, setDateString] = React.useState();
    const email = navigation.getParam('email');
    const [type, setType] = React.useState('Personal');
    //const [todo, setTodo] = React.useState();

    React.useEffect(() => {
        setDateString(date.toLocaleString());
    }, [date]);

    const handleSubmit = async () => {
        console.log("submitting todo");
        var todoDetails = {title: title, dueDate: dateString, status: false, type: type}
        //title and dueDate validate
        try {
            var jsonTodo = JSON.stringify(todoDetails);
            var tempData = await AsyncStorage.getItem(JSON.stringify(email));
            var userData;
            if(tempData != null){
                userData = JSON.parse(tempData);
            }else{
                userData = [];
            }
            userData.push(todoDetails);
            await AsyncStorage.setItem(JSON.stringify(email), JSON.stringify(userData));
            console.log(userData);
            //navigation.navigate('Todo', {email: email});
        } catch (error) {
            console.log(error);
        }
    }

    const handleType = () => {
        if(type==='Personal'){
            setType('Work');
        }else if(type==='Work'){
            setType('Personal');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                value={title}
                placeholder="Task"
                onChangeText={(title) =>{
                    setTitle(title);
                }}
                multiline={true}
                style={styles.input}
            />
            <TouchableOpacity 
                onPress={() => {
                    setOpen(true)
                    isDateSet(true)
                }}
            
            >
            {dateSet ? <Text style={styles.input}>{dateString}</Text> : <Text style={styles.input}>Due Date</Text>}
                {/* <Text>Due Date</Text> */}
            </TouchableOpacity>
            <DatePicker
                modal
                open={open}
                date={date}
                //onDateChange={setDate}
                minimumDate={new Date()}
                onConfirm={(date) => {
                    setOpen(false);
                    setDate(date);
                }}
                onCancel={() => setOpen(false)}
            />
            <TouchableOpacity
                onPress={handleType}
                style={styles.button}
            >
                <Text>Category: {type}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            // style={styles.button}
                onPress={handleSubmit}
                style={styles.button}
            >
                <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Todo', {email: email})}
                style={styles.button}
            >
                <Text>Cancel</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'space-evenly',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: 'black',
        padding: 10,
        color: 'black',
        //flex: 3,
    },
    dateInput:{
        height: 20,
        margin: 12,
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: 'black',
        padding: 10,
        color: 'black',
        //flex: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 30,
        elevation: 4,
        backgroundColor: 'magenta',
    }
});

export default AddTodo;