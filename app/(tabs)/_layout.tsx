import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, Navigator, useNavigation, router, usePathname } from "expo-router";
import { Pressable, View, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          // height: 100,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Friends",
          tabBarIcon: ({ color, focused }) => <FontAwesome5 name="user-astronaut" size={18} color={focused ? "blue" : "black"} />,
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: "Groups",
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "people" : "people-outline"} size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="addExpense"
        options={{
          tabBarIcon: ({ color, focused }) => <Ionicons name="add-circle" size={48} color={focused ? "green" : "rgba(38, 194, 129, 1);"} />,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? "light"].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-friends" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-friends" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
