import { SafeAreaView, Text } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

const Home = () => {
  return (
    <ClerkProvider>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
        <Text>You are Signed out</Text>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  )
}

export default Home;