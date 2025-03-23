import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {};

  // Handle submission of verification form
  const onVerifyPress = async () => {};

  if (pendingVerification) {
    return (
      <>
        <Text>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <TouchableOpacity onPress={onVerifyPress}>
          <Text>Verify</Text>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <SafeAreaView>
      <View className="flex flex-1 justify-center items-center mt-10">
        <Text className="text-3xl">Sign up</Text>
        <Text className="text-2xl mt-5">Create Account</Text>
      </View>

      <View className="flex flex-1 justify-left items-left ml-5 mr-5 mt-5">
        <Text className="">Email address</Text>
        <TextInput
          className="border-2 text-xl text-gray-400 border-gray-300 rounded-md p-2 my-2"
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter your email"
          onChangeText={(email) => setEmailAddress(email)}
        />
      </View>
      <View className="flex flex-1 justify-left items-left ml-5 mr-5 mt-5">
        <Text className="">Password</Text>
        <TextInput
          className="border-2 text-xl text-gray-400 border-gray-300 rounded-md p-2 my-2"
          value={password}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity
        className="bg-blue-500 justify-center items-center rounded-md p-2 my-5 ml-5 mr-5"
        onPress={onSignUpPress}
      >
        <Text className="text-xl">Create an Account</Text>
      </TouchableOpacity>

      <View className="flex flex-row justify-center items-center">
        <Text>Already have an account?</Text>
        <Link href="/sign-in">
          <Text className="text-sm text-blue-500 underline"> Sign in</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
