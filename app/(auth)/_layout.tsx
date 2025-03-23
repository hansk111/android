import { Redirect, Stack } from "expo-router";

export default function UnAuthenticatedLayout() {
  if (false) {
    return <Redirect href={"/"} />;
  }

  return <Stack />;
}
