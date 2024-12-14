import {Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Link} from "expo-router";

const Index = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View>
        <Text style={styles.text}>Test</Text>
        <Link href="/(tabs)">
          <Text>Go to tab index</Text>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default Index;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
