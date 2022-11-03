import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Text, View } from "react-native";

const LoginPage = (props) => {
  //const [text, onChangeText] = React.useState("Useless Text");
  const [email, setEmail] = React.useState();
  const [emailError, setEmailError] = React.useState();
  const [password, setPassword] = React.useState();
  // const [number, onChangeNumber] = React.useState(null);

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

  const handleSubmit = () => {
    console.log("submitting");
  }

  // const signUp = () => {
  //   console.log("signing up");
  // }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.header}>Todo App</Text>
      <View style={styles.container}>
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
      <TextInput
        style={styles.input}
        onChangeText={(password) => setPassword(password)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button
        style={styles.button}
        title="Login"
        onPress={handleSubmit}
        color='#8a2be2'
      />
      <Text style={styles.footing}>
        New User?
        <Button
        title="Sign-up"
        onPress={() => props.navigation.navigate('Signup')}
        />
      </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
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
    backgroundColor: 'beige'
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
  heading: {

  },
  footing: {
    
  }

});

export default LoginPage;