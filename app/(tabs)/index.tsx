import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useUserStore } from "../../store/user";
import { useCallback } from "react";
import { useFocusEffect } from "expo-router";

export default function FriendsScreen() {
  const userStore = useUserStore();
  // TODO: useFocusEffect stop doing useeffect / useCallback when the screen is not focused
  useFocusEffect(
    useCallback(() => {
      console.log("Something changed in the store");
      return () => {
        console.log("Cleanup");
      };
    }, [userStore]),
  );

  if (!userStore._hasHydrated) {
    return (
      <View>
        <Text>Loading !!!!!!!!!!!!!!!</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Friends {userStore.count}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
