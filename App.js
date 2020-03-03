import React, { Component } from "react";

import {
  StyleSheet,
  Platform,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      altura: 0,
      massa: 0,
      resultado: 0,
      resultadoText: ""
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    let altura = this.state.altura;

    let imc = (this.state.massa / (altura * altura)).toFixed(2);
    let imcText = "";

    if (imc) {
      if (imc < 16) {
        imcText = "Magreza grave";
      } else if (imc < 17) {
        imcText = "Magreza moderada";
      } else if (imc < 18.5) {
        imcText = "Magreza Leve";
      } else if (imc < 25) {
        imcText = "Saudável";
      } else if (imc < 30) {
        imcText = "Sobrepeso";
      } else if (imc < 35) {
        imcText = "Obesidade Grau I";
      } else if (imc < 40) {
        imcText = "Obesidade Grau I";
      } else {
        imcText = "Obesidade Grau III";
      }
    }
    // < 16 Magreza grave
    // 16 a < 17 Magreza moderada
    // 17 a < 18,5 Magreza Leve
    // 18,5 a < 25 Saudável
    // 25 a < 30 Sobrepeso
    // 30 a < 35 Obesidade Grau I
    // 35 a < 40 Obesidade Grau II (severa)
    // > 40 Obesidade Grau III (mórbida)

    this.setState(() => {
      return { resultado: imc, resultadoText: imcText };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput
            placeholder="Massa"
            keyboardType={
              Platform.OS == "ios" ? "numbers-and-punctuation" : "numeric"
            }
            style={styles.input}
            onChangeText={massa => {
              this.setState({ massa });
            }}
          />
          <TextInput
            placeholder="Altura"
            keyboardType={
              Platform.OS == "ios" ? "numbers-and-punctuation" : "numeric"
            }
            style={styles.input}
            onChangeText={altura => {
              this.setState({ altura });
            }}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <Text style={styles.resultado}>{this.state.resultado}</Text>
        <Text style={[styles.resultado, { fontSize: 35 }]}>
          {this.state.resultadoText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  entradas: {
    flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color: "grey"
  },
  button: {
    backgroundColor: "lightgreen"
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  },
  resultado: {
    alignSelf: "center",
    color: "lightgray",
    fontSize: 65,
    padding: 15
  }
});
