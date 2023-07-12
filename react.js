import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform sign-up logic here
    console.log('Signing up...');
    console.log('Email:', email);
    console.log('Password:', password);
    // You can replace the console.log statements with actual sign-up logic
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default SignUpPage;
