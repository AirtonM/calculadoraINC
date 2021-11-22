import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function App() {
  const [peso, setPeso] = useState(''); // armazena o peso
  const [altura, setAltura] = useState(''); // armazena a altura

  function executarCalculos(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    alert(imc.toFixed(2));
  }
  return (
    <View style={estilo.container}>
      <Text style={estilo.title}> Calcule seu IMC</Text>
      
      <TextInput 
        style={estilo.input} 
        value={peso} // valor dentro do componente
        onChangeText={ (peso) => setPeso(peso) } // toda vez que o campo mudar ele é salvo
        placeholder="Peso (Kg)"
        keyboardType="numeric"
      />

      <TextInput 
        style={estilo.input} 
        value={altura} // valor dentro do componente
        onChangeText={ (altura) => setAltura(altura) } // toda vez que o campo mudar ele é salvo
        placeholder="Altura (Cm)"
        keyboardType="numeric"
      />
      <TouchableOpacity style={estilo.botao}
      onPress={executarCalculos}>
        <Text style={estilo.textoBotao}>
          Calcular
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    color: "#4b3621"
  },
  input: {
    backgroundColor: '#a29488',
    borderRadius:10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23,
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#4b3621',
    padding: 10,
    borderRadius: 10,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 25,
  },
});