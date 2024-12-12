import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { Link, useNavigation } from "expo-router";

const Index = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [activeAvatar, setActiveAvatar] = useState("avatar1");
  const [userName, setUserName] = useState("");

  const selectAvatar = (id) => {
    setActiveAvatar(id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>MyStudyLife</Text>
        <Text style={styles.subtitle}>Select your profile</Text>

        {/* Name Input Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Type your name here"
            value={userName}
            onChangeText={setUserName}
          />
        </View>

        {/* Avatar Selection Section */}
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarLabel}>Choose Avatar</Text>
          <View style={styles.avatarList}>
            {["avatar1", "avatar2", "avatar3", "avatar4"].map((id, index) => (
              <TouchableOpacity key={id} onPress={() => selectAvatar(id)} style={styles.avatarWrapper}>
                <Image
                  style={[
                    styles.avatar,
                    activeAvatar === id && styles.activeAvatar
                  ]}
                  source={{
                    uri: [
                      "https://plus.unsplash.com/premium_photo-1731404830883-67fffdba8339?w=500&auto=format&fit=crop&q=60",
                      "https://images.unsplash.com/photo-1615946027884-5b6623222bf4?w=500&auto=format&fit=crop&q=60",
                      "https://plus.unsplash.com/premium_photo-1732333561909-a1643049dd4a?w=500&auto=format&fit=crop&q=60",
                      "https://images.unsplash.com/photo-1558624232-75ee22af7e67?w=500&auto=format&fit=crop&q=60",
                    ][index],
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Navigation Button */}
        <Link href={{ pathname: "(tabs)" }} asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Let's Get Started</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#f9fafb",
  },
  section: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#4f46e5",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: "500",
    color: "#1f2937",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 24,
    width: "100%",
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: "#374151",
  },
  input: {
    marginTop: 8,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderColor: "#d1d5db",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  avatarContainer: {
    marginTop: 32,
    width: "100%",
  },
  avatarLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 16,
    textAlign: "center",
  },
  avatarList: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: "transparent",
  },
  activeAvatar: {
    borderColor: "#4f46e5",
  },
  button: {
    marginTop: 32,
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Index;