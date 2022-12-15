import React from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import * as AppleAuthentication from 'expo-apple-authentication';

export default function AppleAuth() {
    return (
        <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
            cornerRadius={5}
            style={{ width: 40, height: 40 }}
            onPress={async () => {
                try {
                    const credential = await AppleAuthentication.signInAsync({
                        /*requestedScopes: [
                            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                            AppleAuthentication.AppleAuthenticationScope.EMAIL,
                        ],*/
                    });
                    console.log(credential)
                    // signed in
                } catch (e) {
                    if (e.code === 'ERR_CANCELED') {
                        console.log("e canceled")
                        // handle that the user canceled the sign-in flow
                    } else {
                        console.log(e)
                        // handle other errors
                    }
                }
            }}
        />
    );
}