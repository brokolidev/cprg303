import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function History() {
  const [timeRange, setTimeRange] = useState("Today"); 

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        {/* Header */}
        <Text style={styles.header}>History</Text>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          {["Today", "This Week", "This Month"].map((range) => (
            <TouchableOpacity
              key={range}
              style={[
                styles.tab,
                timeRange === range && styles.activeTab, 
              ]}
              onPress={() => setTimeRange(range)} 
            >
              <Text
                style={[
                  styles.tabText,
                  timeRange === range && styles.activeTabText, 
                ]}
              >
                {range}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Progress Circles */}
        <View style={styles.progressContainer}>
          <View style={styles.progressCard}>
            <Text style={styles.progressText}>25/30</Text>
            <Text style={styles.progressLabel}>Tasks Done</Text>
          </View>
          <View style={styles.progressCard}>
            <Text style={styles.progressText}>90%</Text>
            <Text style={styles.progressLabel}>Attendance Rate</Text>
          </View>
        </View>

        {/* Total Time and Longest Session */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Total Time</Text>
          <Text style={styles.infoText}>
            {timeRange === "Today" && "2h 25m"}
            {timeRange === "This Week" && "24h 25m"}
            {timeRange === "This Month" && "92h 15m"}
          </Text>
          <Text style={styles.infoTitle}>Longest Session</Text>
          <Text style={styles.infoText}>
            {timeRange === "Today" && "1h 32m"}
            {timeRange === "This Week" && "7h 32m"}
            {timeRange === "This Month" && "10h 45m"}
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#e5e7eb",
    marginHorizontal: 10,
  },
  activeTab: {
    backgroundColor: "#3b82f6",
  },
  tabText: {
    color: "#000",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#fff",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 50,
	marginVertical: 30,
  },
  progressCard: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e0f2fe",
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  progressLabel: {
    fontSize: 12,
    color: "#6b7280",
  },
  infoContainer: {
    backgroundColor: "#f3f4f6",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#374151",
	marginBottom:20,
  },
});
