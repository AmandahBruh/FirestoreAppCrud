import { NavigationContainer } from "@react-navigation/native";
import CreateUser from "./screen/CreateUser";
import BuscarUsuarioScreen from "./screen/BuscarUser";
import LoginScreen from "./screen/LoginScreen";
import RegisterUsuario from "./screen/RegistroUser";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CriarProduto from "./screen/CriarProduto";


const Stack = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CreateUser" component={CreateUser} />
        <Stack.Screen name="BuscarUsuarioScreen" component={BuscarUsuarioScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterUsuario" component={RegisterUsuario} />
        <Stack.Screen name="CriarProduto" component={CriarProduto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}