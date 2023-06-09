import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";


export default function CreateUser({ navigation }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  function cadastrarPessoa() {
    console.log(nome);
    console.log(telefone);

    const docRef = addDoc(collection(db, "pessoas"), {
      nomeDaPessoa: nome,
      telefoneDaPessoa: telefone,
    });
    
  }

  return (
    <View>
      <Text>Cadastrar Pessoa</Text>
      <View>
        <TextInput
          label={"nome"}
          mode="outlined"
          placeholder="Digite seu nome..."
          onChangeText={setNome}
          value={nome}
        />
        <TextInput
          label={"telefone"}
          mode="outlined"
          placeholder="Digite seu telefone..."
          onChangeText={setTelefone}
          value={telefone}
        />
        <Button onPress={cadastrarPessoa}>Cadastrar</Button>
      </View>
    </View>
  );
}
