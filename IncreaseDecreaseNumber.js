import { Text, View, StyleSheet, Button } from "react-native";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    number: 0,
  };

  onPressIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  onPresssDecrease = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.txt}>
          <Text style={{ fontSize: 100 }}>{this.state.number}</Text>
        </View>

        <View style={styles.btn}>
          <Button title="Arttır" color="#000" onPress={this.onPressIncrease} />
          <Button title="Azalt" color="#000" onPress={this.onPresssDecrease} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFEB3B",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    margin: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  btn: {
    flexDirection: "row",
  },
});
