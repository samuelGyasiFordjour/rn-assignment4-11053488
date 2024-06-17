import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.user}>Jobizz</Text>
      <Text style={styles.greet}> Welcome Back👋</Text>
      <Text style={styles.subtitle}> Let’s log in. Apply to jobs!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FAFAFD',
    paddingHorizontal: 30,
  },
  user: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#356899',
    alignSelf: 'left',
  },
  greet: {
    fontSize: 24,
    marginBottom: 10,
    color: '#0D0D26',
    fontWeight: 'bold',
    alignSelf: 'left',
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 25,
    alignSelf: 'left',
    color: "#AFB0B6",
  },
  
});
