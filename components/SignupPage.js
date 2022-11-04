import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View, TouchableOpacity, ScrollView } from "react-native";

const SignupPage = (props) => {
  //const [text, onChangeText] = React.useState("Useless Text");
  const [email, setEmail] = React.useState();
  const [emailError, setEmailError] = React.useState();
  const [password, setPassword] = React.useState();
  const [passwordError, setPasswordError] = React.useState();
  const [name, setName] = React.useState();
  // const [number, onChangeNumber] = React.useState(null);

  const handleSubmit = () => {
    console.log("submitting");
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

  const passwordValidator = (password) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;
    //min 8, max 32, atleast one uppercase, one lower case, one number, one special character
    if(password.length === 0){
      setPasswordError('enter password');
    }else if(regex.test(password) === false){
      setPasswordError('enter a valid password');
    }else if(regex.test(password) === true){
      setPasswordError('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Todo App</Text>
        <View style={styles.formContainer}>
        <ScrollView>
            <Text style={styles.heading}>Sign Up</Text>
        {/* <Text>Name</Text> */}
    <TextInput
        style={styles.input}
        onChangeText={(name) => setName(name)}
        value={name}
        placeholder="Name"
    />
        
        {/* <Text>Email address</Text> */}
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
      <TextInput
        style={styles.input}
        onChangeText={(password) => {
            setPassword(password);
            passwordValidator(password);
        }}
        value={password}
        placeholder="Password"
      />
      {passwordError ? <Text>{passwordError}</Text> : null}
      {/* <Button
        style={styles.button}
        title="Sign Up"
        onPress={handleSubmit}
        color='#8a2be2'
      /> */}
      <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
        >
            <Text>Signup</Text>
        </TouchableOpacity>
        <View style={styles.footing}>
            <Text>
            Already have an account?
            {/* <Button
            title="Login"
            onPress={() => props.navigation.navigate('Login')}
            /> */}
            </Text>
            <Text onPress={() => props.navigation.navigate('Login')} style={styles.footingbtn}>Login</Text>
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
        margin: 22
    },
    footing: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    footingbtn: {
        margin: 10,
    },
    
});

export default SignupPage;