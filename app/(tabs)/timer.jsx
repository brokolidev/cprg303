import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Timer() {
  const [time, setTime] = useState(1800); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(1800);
  };

  // Add or subtract time by 10 minutes
  const addTime = () => setTime((prevTime) => prevTime + 600); 
  const subtractTime = () => setTime((prevTime) => (prevTime > 600 ? prevTime - 600 : 0));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus Session</Text>
      <View style={styles.timerOuter}>
        <View style={styles.timerInner}>
          <Text style={styles.timerDisplay}>{formatTime(time)}</Text>
          <View style={styles.divider} />
          <Text style={styles.subtitle}>Study Time</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.startButton]}
              onPress={handleStart}
            >
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.pauseButton]}
              onPress={handlePause}
            >
              <Text style={styles.buttonText}>Pause</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.resetButton]}
              onPress={handleReset}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.adjustTimeContainer}>
        <TouchableOpacity style={[styles.button, styles.adjustButton]} onPress={subtractTime}>
          <Text style={styles.buttonText}>-10 min</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.adjustButton]} onPress={addTime}>
          <Text style={styles.buttonText}>+10 min</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.encouragement}>
        "You’re doing great, keep it going!"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: "center",
	  alignItems: "center",
	  backgroundColor: "#f9fafb",
	},
	title: {
	  fontSize: 40,
	  fontWeight: "800",
	  textAlign: "center",
	  backgroundColor: "transparent",
	  backgroundImage: "linear-gradient(to right, #a78bfa, #4f44e3)",
	  color: "transparent",
	  WebkitBackgroundClip: "text",
	  marginBottom: 24,
	},
	timerOuter: {
	  width: 288,
	  height: 288,
	  borderRadius: 144,
	  justifyContent: "center",
	  alignItems: "center",
	  padding: 5,
	  backgroundImage: "linear-gradient(to right, #fb7185, #a78bfa)",
	  shadowColor: "#000",
	  shadowOpacity: 0.3,
	  shadowRadius: 10,
	},
	timerInner: {
	  width: "100%",
	  height: "100%",
	  borderRadius: 144,
	  backgroundColor: "#ffffff",
	  justifyContent: "center",
	  alignItems: "center",
	},
	timerDisplay: {
	  fontSize: 48,
	  fontFamily: "monospace",
	  fontWeight: "600",
	  color: "#4b5563",
	},
	divider: {
	  width: 80,
	  height: 4,
	  borderRadius: 2,
	  backgroundImage: "linear-gradient(to right, #a78bfa, #60a5fa)",
	  marginVertical: 16,
	},
	subtitle: {
	  fontSize: 14,
	  fontWeight: "500",
	  color: "#6b7280",
	},
	buttonsContainer: {
	  flexDirection: "row",
	  marginTop: 20,
	  gap: 10,
	},
	button: {
	  paddingHorizontal: 20,
	  paddingVertical: 10,
	  borderRadius: 20,
	  justifyContent: "center",
	  alignItems: "center",
	  shadowColor: "#000",
	  shadowOpacity: 0.2,
	  shadowRadius: 5,
	},
	startButton: {
	  backgroundColor: "#34d399",
	},
	pauseButton: {
	  backgroundColor: "#fbbf24",
	},
	resetButton: {
	  backgroundColor: "#f87171",
	},
	adjustButton: {
	  backgroundColor: "#a78bfa",
	},
	adjustTimeContainer: {
	  flexDirection: "row",
	  justifyContent: "space-between",
	  width: "50%", 
	  marginTop: 20,
	},
	buttonText: {
	  fontSize: 16,
	  color: "#fff",
	  fontWeight: "500",
	},
	encouragement: {
	  marginTop: 20,
	  fontSize: 18,
	  fontWeight: "500",
	  color: "#e43f57",
	  textAlign: "center",
	},
});
