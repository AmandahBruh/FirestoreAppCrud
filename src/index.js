import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateUser from "./screen/CreateUser";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CreateUser" component={CreateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}