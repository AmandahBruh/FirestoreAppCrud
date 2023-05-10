import { collection } from "firebase/firestore";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../config/firebase";
import { useEffect } from "react";



export default function BuscarUsuarioScreen({ navigation }) {

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User is logged in:', user);
            } else {
                console.log('User is logged out');
            }
        });

    });

    async function handleBuscaUsuario() {
        

        try {
            console.log("Buscar Usuario")
            const collectionRef = collection(db, "usuarios");
            const query = query(collectionRef, where("nome", "==", "João"));
            const querySnapshot = await getDocs(query);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        } catch (error) {
            console.log("Erro ao buscar usuário: ", error)
        }
    }


    return (
        <View>
            <Text>Buscar Usuario</Text>
            <TextInput
                label="Buscar Usuario"
                mode="outlined"
                style={{ margin: 10 }}
            >
            </TextInput>
            <Button onPress={handleBuscaUsuario}>AAAAAAAAA</Button>

        </View>
    )
}