import { SafeAreaView, Text } from 'react-native';
// import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

const Home = () => {
  return (
      <SafeAreaView >
          <Text>You are Signed in</Text>
        <Text>You are Signed out</Text>
      </SafeAreaView>
  )
}

export default Home;