import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateUser from "./screen/CreateUser";
import BuscarUsuarioScreen from "./screen/BuscarUser";
import LoginScreen from "./screen/LoginScreen";
import RegisterUsuario from "./screen/RegistroUser";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CreateUser" component={CreateUser} />
        <Stack.Screen name="CreateUser" component={BuscarUsuarioScreen} />
        <Stack.Screen name="CreateUser" component={LoginScreen} />
        <Stack.Screen name="CreateUser" component={RegisterUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}