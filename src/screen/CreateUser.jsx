import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";

export default function CreateUser() {
  const [nome, setNome] = useState("");

  function cadastrarPessoa(){
    console.log(nome);
  }

  return (
    <View style={styles.container}>
      <Text>Cadastrar Pessoa</Text>
      <View>
        <TextInput
          label={"nome"}
          mode="outlined"
          placeholder="Digite seu nome..."
          onChangeText={setNome}
          value={nome}
        />
        <Button onPress={cadastrarPessoa}>Cadastrar</Button>
      </View>
    </View>
  );
}
