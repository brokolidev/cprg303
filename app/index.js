import React, {Component} from 'react';
import {Button, Pressable, Text, View} from 'react-native';

const Index = () => {
    const handleTouch = () => {
        alert("Button Clicked");
    };

    return (
        <View style={{ flex: 0.5 }}>
            <View style={{flex: 1, backgroundColor: "red"}}></View>
            <View style={{flex: 2, backgroundColor: "green"}}></View>
            <View style={{flex: 3, backgroundColor: "blue"}}></View>
            <Text style={{fontSize: 40}}>Hello World</Text>

            <View style={{ margin: 10 }}>
                <Button title="Click Me" color="orange" onPress={handleTouch}></Button>
            </View>
            <View style={{ margin: 20 }}>
                <Button title="Click Me" color="blue" onPress={handleTouch}></Button>
            </View>
            <View style={{ margin: 30 }}>
                <Button title="Click Me" color="green" onPress={handleTouch}></Button>
            </View>

            <Pressable onPress={handleTouch}>
                <Text style={{fontSize: 40}} onPress={handleTouch}>Pressable Button</Text>
            </Pressable>
        </View>
    );
}

export default Index;
