import { Stack } from 'expo-router';
import React from 'react';

const PublicLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#27b03e'
        },
        headerTintColor: '#fff',
        headerBackTitle: 'Back',
        contentStyle: {
          backgroundColor: '#f5edda'
        }
      }}
    >
      <Stack.Screen
        name="Login"
        options={{
          headerTitle: 'Farmstand'
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="SignUp"
        options={{
          headerTitle: 'Create Account'
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default PublicLayout;
