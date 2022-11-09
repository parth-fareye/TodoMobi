import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View, TouchableOpacity, ScrollView, ToastAndroid } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation}) => {
  //const [text, onChangeText] = React.useState("Useless Text");
  const [email, setEmail] = React.useState();
  const [emailError, setEmailError] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordVisibility, setPasswordVisibility] = React.useState(true);
  const [hideShowText, setHideShowText] = React.useState('Show');
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const [number, onChangeNumber] = React.useState(null);
  const dummy = {
    email: 'dummy@gmail.com',
    password: 'dummy'
  }

  const emailValidator = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if(email.length === 0){
      setEmailError('enter email addres');
    }else if(regex.test(email) === false){
      setEmailError('enter a valid email address');
    }else if(regex.test(email) === true){
      setEmailError('');
    }
  };

  const handleSubmit = async () => {
    console.log("submitting");
    if(email === dummy.email && password === dummy.password){
      navigation.navigate('Todo', {email: email});
      // setIsLoggedIn(true);
      // await AsyncStorage.setItem('logged', isLoggedIn);
      console.log(email);
      setEmail('');
      setPassword('');
    }else{
      alert("Bad Credentials");
    }
  }

  const handlePasswordVisibility = () => {
    if(hideShowText === 'Show'){
      setHideShowText('Hide');
      setPasswordVisibility(!passwordVisibility);
    }else if(hideShowText === 'Hide'){
      setHideShowText('Show');
      setPasswordVisibility(!passwordVisibility);
    }
  }

  // const signUp = () => {
  //   console.log("signing up");
  // }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Todo App</Text>
      <View style={styles.formContainer}>
        <ScrollView>
        <Text style={styles.heading}>Login</Text>
      {/* <Text style={styles.}>Email address</Text> */}
      <TextInput
        style={styles.input}
        onChangeText={(email) => {
          setEmail(email);
          emailValidator(email);
        }}
        value={email}
        placeholder="Email Id"
        keyboardType="email-address"
      />
      {emailError ? <Text>{emailError}</Text> : null}
      {/* <Text>Password</Text> */}
      <View style={styles.passwordField}>
        <TextInput
          style={styles.passInput}
          onChangeText={(password) => setPassword(password)}
          value={password}
          placeholder="Password"
          secureTextEntry={passwordVisibility}
        />
        <Text onPress={handlePasswordVisibility}>{hideShowText}</Text>
      </View>
      {/* <Button
        style={styles.button}
        title="Login"
        onPress={handleSubmit}
        color='#8a2be2'
      /> */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <View style={styles.footing}>
        <Text>
          New User?
          {/* <Button
          title="Sign-up"
          onPress={() => props.navigation.navigate('Signup')}
          /> */}
        </Text>
        <Text onPress={() => navigation.navigate('Signup')} style={styles.footingbtn}>Sign Up</Text>
      </View>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: 'white',
      borderBottomColor: 'black',
      padding: 10,
      color: 'black',
    },
  container: {
      flex : 1,
      backgroundColor: 'gray'
  },
  header: {
      flex: 1,
      textAlign: "center",
      textAlignVertical: "center",
      number: 30,
      fontWeight: "bold",
      //backgroundColor: 'gray',
  },
  formContainer: {
      flex: 2,
      backgroundColor: 'white',
      padding: 20,
      //flexDirection: 'row',
      //justifyContent: 'space-evenly',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      elevation: 6,
      //alignItems: 'center',
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
  heading: {
    margin: 22,
  },
  footing: {
      alignItems: 'center',
      flexDirection: 'row',
  },
  footingbtn: {
      margin: 10,
  },
  passwordField: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
  },
  passInput: {
    height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: 'white',
      borderBottomColor: 'black',
      padding: 10,
      color: 'black',
      width: '80%',
  }
});

export default LoginPage;