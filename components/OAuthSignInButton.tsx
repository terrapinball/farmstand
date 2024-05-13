import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Image, ImageSourcePropType, Pressable, Text, StyleSheet } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

interface SignInParams {
  provider: string;
  icon: ImageSourcePropType;
}

type OAuthStrategy =
  | "oauth_google"
  | "oauth_microsoft"
  | "oauth_apple";

WebBrowser.maybeCompleteAuthSession();

const OAuthSignInButton = ({ provider, icon }: SignInParams) => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: `oauth_${provider}` as OAuthStrategy });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId && setActive) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <Pressable onPress={onPress} style={styles.iconButton} >
      <Image source={icon} style={styles.iconImage}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconImage: {
    width: 40,
    height: 40,
  },
  iconButton: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  }
});

export default OAuthSignInButton;