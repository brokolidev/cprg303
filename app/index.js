import { Component } from "react";
import React, { View, Text } from "react-native";

class Index extends Component {
  render() {
    return (
        <View style={{
            flex: 0.3, 
            fontSize: 40,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
             }}
             >
            
            <Text style={{
                color: 'white',
                fontSize: 40,
            }}>Hello world</Text>
        </View>
    );
  }
}

export default Index;