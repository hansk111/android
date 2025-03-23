import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "../store/hooks";
import {
  useGetUserAvatarQuery,
  useLogoutMutation,
  useRetrieveUserQuery,
} from "@/app/store/auth/authApiSlice";

export default function Page() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      {isAuthenticated ? (
        <>
          <Text>Hello {user?.first_name || "User"}</Text>
          <Link href="">
            <Text>Profile</Text>
          </Link>
        </>
      ) : (
        <>
          <Text>Please sign in or sign up.</Text>
          <Link href="/(auth)/sign-in">
            <Text>Sign in</Text>
          </Link>
          <Link href="/(auth)/sign-up">
            <Text>Sign up</Text>
          </Link>
        </>
      )}
    </SafeAreaView>
  );
}
