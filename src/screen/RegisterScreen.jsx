import { View } from "react-native";
import { Button, Dialog, Portal, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function RegisterScreen({ navigation }) {
    // Aqui definimos nome e setNome como um objeto
    // assim podemos utilizar dentro de uma variável 
    // o valor e o erro
    const [nome, setNome] = useState({
        value: "",
        erro: false
    })
    const [telefone, setTelefone] = useState({
        value: "",
        erro: false
    })
    const [email, setEmail] = useState({
        value: "",
        erro: false
    })
    const [password, setPassword] = useState({
        value: "",
        erro: false
    })
    const [confirmPassword, setConfirmPassword] = useState('')

    const [dialog, setDialog] = useState({
        visible: false,
        errorMessage: ""
    })

    function handleRegister() {
        if (password.value !== confirmPassword) {
            setPassword({
                value: password.value,
                erro: true
            })
            setDialog({
                visible: true,
                errorMessage: "As senhas não conferem"
            })
            return
        }
        if (nome.value === '') {
            setNome({
                value: nome.value,
                erro: true
            })
            setDialog({
                visible: true,
                errorMessage: "Você precisa preencher seu nome"
            })
            return
        }
        if (telefone.value === '') {
            setTelefone({
                value: telefone.value,
                erro: true
            })
            setDialog({
                visible: true,
                errorMessage: "Você não preencheu o telefone"
            })
            return
        }
        if (email.value === '') {
            setEmail({
                value: email.value,
                erro: true
            })
            setDialog({
                visible: true,
                errorMessage: "Não preencheu seu e-mail"
            })
            return
        }
        if (password.value === '') {
            setPassword({
                value: password.value,
                erro: true
            })
            return
        }
        
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                const userUID = user.uid;
                
                const collectionRef = collection(db, 'usuarios');
                
                const dadosAInserir = {
                    nome: nome.value,
                    telefone: telefone.value,
                    email: email.value,
                    userUID: userUID
                }

                const docRef = addDoc(collectionRef, dadosAInserir)
                    .then((docRef) => {
                        console.log(docRef)
                        navigation.navigate('LoginScreen')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            })
            .catch((error) => {
                console.log(error)
            })

    }

    function hideDialog() {
        setDialog({
            visible: false,
            errorMessage: ""
        })
    }

    return (
        <View>
            <Text>Faça seu registro</Text>
            <TextInput
                label="Nome"
                
                value={nome.value}
                
                onChangeText={(textoInserido) => setNome(
                    {
                        value: textoInserido,
                        erro: false
                    }
                )}
            />
            <TextInput
                label="Telefone"
                value={telefone.value}
                onChangeText={(textoInserido) => setTelefone(
                    {
                        value: textoInserido,
                        erro: false
                    }
                )}
            />
            <TextInput
                label="Email"
                value={email.value}
                onChangeText={(textoInserido) => setEmail(
                    {
                        value: textoInserido,
                        erro: false
                    }
                )}
            />
            <TextInput
                label="Senha"
                value={password.value}
                onChangeText={(textoInserido) => setPassword(
                    {
                        value: textoInserido,
                        erro: false
                    }
                )}
                secureTextEntry={true}
                error={password.erro}
            />
            <TextInput
                label="Confirme sua senha"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
            />
            <Button
                onPress={handleRegister}
            >Fazer registro</Button>
            <Portal>
                <Dialog visible={dialog.visible} onDismiss={hideDialog}>
                    <Dialog.Title>Alert</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">{dialog.errorMessage}</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}