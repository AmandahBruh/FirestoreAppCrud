import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";

export default function CreateUser() {
  const [Nome, setNome] = useState("");

  return (
    <View style={styles.container}>
      <Text>Cadastrar Pessoa</Text>
      <View>
        <TextInput
          label={"Nome"}
          mode="outlined"
          placeholder="Digite seu nome..."
          onChangeText={setNome}
        />
        <Button>Cadastrar</Button>
      </View>
    </View>
  );
}
