import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";


export default function CriarProduto({ navigation }) {
  const [produtoNome, setProdutoNome] = useState("");
  const [descricao, setdescricao] = useState("");

  function cadastrarProduto() {
    console.log(produtoNome);
    console.log(descricao);

    const docRef = addDoc(collection(db, "Produtos"), {
      nomeDoProduto: produtoNome,
      descricaoDoProduto: descricao,
    });
    
  }

  return (
    <View>
      <Text>Cadastrar Produto</Text>
      <View>
        <TextInput
          label={"produtoNome"}
          mode="outlined"
          placeholder="Digite o nome..."
          onChangeText={setProdutoNome}
          value={produtoNome}
        />
        <TextInput
          label={"descricao"}
          mode="outlined"
          placeholder="Digite a descricao..."
          onChangeText={setdescricao}
          value={descricao}
        />
        <Button onPress={cadastrarProduto}>Cadastrar</Button>
      </View>
    </View>
  );
}
