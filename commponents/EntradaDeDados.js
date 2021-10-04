import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function EntradaDeDados({adicionaItens}) {
  const [descricao, setDescricao] = useState('')
  const [fabricante, setFabricante] = useState('')

  const capturarDescricao = (text)=>{
    setDescricao(text)
  }

  const capturarFabricante = (text)=>{
    setFabricante(text)
  }

  return (
    <>
    <TextInput 
        style={styles.textInputStyle}
        placeholder="Descrição"
        onChangeText={capturarDescricao}
        value={descricao}
      />
      <TextInput 
        style={styles.textInputStyle}
        placeholder="Fabricante"
        onChangeText={capturarFabricante}
        value={fabricante}

      />

      <TouchableOpacity onPress={()=>adicionaItens(descricao, fabricante, setDescricao, setFabricante)} 
                        activeOpacity={0.7} style={styles.button} >
        <Text style={styles.buttonText}> Cadastrar Item </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 7,
    marginTop: 12
  },
  button: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  }
});

