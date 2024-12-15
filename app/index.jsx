import React, {useCallback, useEffect, useState} from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import * as SQLite from 'expo-sqlite';
import {createTables} from "./db/db";

const Index = () => {

  const [activeAvatar, setActiveAvatar] = useState("avatar1");
  const [userName, setUserName] = useState("");
  const [prefId, setPrefId] = useState("");
  const [db, setDb] = useState(null);

  const selectAvatar = async (id) => {
    setActiveAvatar(id);
    try {
      // save set avatar to db
      await db.runAsync('UPDATE UserPreferences SET defaultAvatar = ? WHERE id = ?', id, prefId);
    } catch (error) {
      console.log(error);
    }
  };

  const saveUserName = async (userName) => {
    setUserName(userName);
    console.log('new user name : ', userName);
    if(userName == '') {
      userName = 'John';
    }
    try {
      await db.runAsync('UPDATE UserPreferences SET userName = ? WHERE id = ?', userName, prefId);
    } catch (error) {
      console.log(error);
    }
  }

  const loadData = useCallback(async () => {
    try {
      const db = await SQLite.openDatabaseAsync('cprg303');
      setDb(db);
      await createTables(db);
      const firstRow = await db.getFirstAsync('SELECT * FROM UserPreferences');
      setUserName(firstRow.userName);
      setActiveAvatar(firstRow.defaultAvatar);
      setPrefId(firstRow.id)
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])



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
            onChangeText={(text) => saveUserName(text)}
            value={userName}
        />
        </View>

        {/* Avatar Selection Section */}
        <View style={styles.avatarContainer}>
        <Text style={styles.inputLabel}>Choose Avatar</Text>
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
        <Link style={styles.button} href={'/(tabs)'}>
            <Text style={styles.buttonText}>Let's Get Started</Text>
        </Link>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 60,
    backgroundColor: "#f9fafb",
  },
  section: {
    alignItems: "center",
    marginHorizontal: "auto",
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4f46e5",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 26,
    fontWeight: "600",
    color: "#1f2937",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 24,
    width: "100%",
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "600",
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
  avatarList: {
    paddingHorizontal: 40,
    marginTop: 24,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-around",
    columnGap: '15%',
    rowGap: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "transparent",
  },
  activeAvatar: {
    borderColor: "#6366f1",
  },
  button: {
    marginTop: 42,
    backgroundColor: "#2363eb",
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 16,
    textAlign: "center",
    width: "100%",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default Index;
