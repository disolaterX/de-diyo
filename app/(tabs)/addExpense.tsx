import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useUserStore } from "../../store/user";

export default function AddExpenseScreen() {
  const countFromStore = useUserStore(state => state.count);
  console.log(countFromStore);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Add Expense</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      <Button title="Increase count" onPress={() => useUserStore.getState().increaseCount()} />
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
