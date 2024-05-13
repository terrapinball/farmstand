import { useSignIn } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import OAuthSignInButton from '../../components/OAuthSignInButton';
import google from '../../assets/google_icon.png';
import apple from '../../assets/apple_icon.png';
import microsoft from '../../assets/microsoft_icon.png';

function alert(message: any) {
  throw new Error('Function not implemented.');
}

const Login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password
      });

      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Spinner visible={loading} />

      <View style={styles.signInButtonContainer}>
        <OAuthSignInButton provider="google" icon={google} />
        <OAuthSignInButton provider="apple" icon={apple} />
        <OAuthSignInButton provider="microsoft" icon={microsoft} />
      </View>

      <TextInput
        autoCapitalize="none"
        placeholder="Email"
        value={emailAddress}
        onChangeText={setEmailAddress}
        style={styles.inputField}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputField}
      />

      <Button onPress={onSignInPress} title="Login" color={'#27b03e'}></Button>

      <Link href="/reset" asChild>
        <Pressable style={styles.button}>
          <Text>Forgot password?</Text>
        </Pressable>
      </Link>
      <Link href="/SignUp" asChild>
        <Pressable style={styles.button}>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#27b03e',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff'
  },
  iconButton: {
    height: '10%',
    width: '10%'
  },
  button: {
    margin: 8,
    alignItems: 'center'
  },
  signInButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '60%',
    // marginTop: 20
  }
});

export default Login;
