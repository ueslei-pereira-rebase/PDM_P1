import React, {useState} from 'react';
import { StyleSheet, View , Text} from 'react-native';
import EntradaDeDados from './commponents/EntradaDeDados'
import ExibeItens from './commponents/ExibeItens'

export default function App() {

  const [itens, setItens] = useState([])

  function adicionaItens(descricao, fabricante, setDescricao, setFabricante){
    if (descricao.length == 0 || fabricante.length == 0){
      return alert('Por favor, complete todos os campos.');
    }
    const item = {descricao, fabricante}
    setItens([...itens, item])
    setDescricao('')
    setFabricante('')
    
  }

  return (
    <View style={styles.MainContainer}>
      <Text> Prova de PDM P1</Text>
      <EntradaDeDados adicionaItens={adicionaItens}/>
      <ExibeItens lista={itens} />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2,
    paddingVertical: 30,
    backgroundColor: '#ededed'
  },
});
