import 'dotenv/config'; // This line is needed if you're using dotenv to manage your environment variables

export default {
  expo: {
    name: 'farmstand',
    slug: 'farmstand',
    scheme: 'farmstand',
    web: {
      bundler: 'metro',
    },
    plugins: [
      'expo-router',
      'expo-secure-store'
    ],
    extra: {
      clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    }
  }
};