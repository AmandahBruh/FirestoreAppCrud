import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";

export default function CreateUser() {
  return (
    <View style={styles.container}>
      <Text>Cadastrar Pessoa</Text>
      <View>
        <TextInput label={"Nome"} mode="outlined">
        Nome
        </TextInput>
        <Button>a
        </Button>
      </View> 
    </View>
  );
}
