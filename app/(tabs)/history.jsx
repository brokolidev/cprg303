import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import {
  VictoryPie,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
} from "victory-native";
import { View, SafeAreaView, Text } from "react-native";
import React, { useState } from "react";

const History = () => {
  const [view, setView] = useState("today");
  const dataToday = [
    { x: "Completed", y: 15 },
    { x: "In progress", y: 5 },
    { x: "Uncompleted", y: 5 },
  ];

  const dataWeekly = [
    { x: "Completed", y: 30 },
    { x: "In progress", y: 4 },
    { x: "Uncompleted", y: 6 },
  ];

  const dataMonthly = [
    { x: "Completed", y: 50 },
    { x: "In progress", y: 5 },
    { x: "Uncompleted", y: 7 },
  ];

  const attendanceWeekly = [
    { x: "Attendance", y: 20 },
    { x: "Absence", y: 5 },
  ];

  const attendanceMonthly = [
    { x: "Attendance", y: 40 },
    { x: "Absence", y: 6 },
  ];

  const studyHoursWeekly = [
    { x: undefined, y: 0 },
    { x: "Monday", y: 3 },
    { x: "Tuesday", y: 4 },
    { x: "Wednesday", y: 2 },
    { x: "Thursday", y: 5 },
    { x: "Friday", y: 6 },
    { x: "Saturday", y: 7 },
    { x: "Sunday", y: 7.3 },
    { x: undefined, y: 8 },
  ];

  const studyHoursMonthly = [
    { x: undefined, y: 10 },
    { x: "Week 1", y: 20 },
    { x: "Week 2", y: 25 },
    { x: "Week 3", y: 22 },
    { x: "Week 4", y: 28 },
    { x: undefined, y: 30 },
  ];

  const [timeRange, setTimeRange] = useState("Today");

  const handleButtonPress = (newView) => {
    setView(newView);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Header */}
        <Text style={styles.header}>History</Text>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            key={"today"}
            style={[styles.tab, timeRange === "Today" && styles.activeTab]}
            onPress={() => {
              handleButtonPress("today");
              setTimeRange("Today");
            }}
          >
            <Text
              style={[
                styles.tabText,
                timeRange === "Today" && styles.activeTabText,
              ]}
            >
              Today
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={"weekly"}
            style={[styles.tab, timeRange === "This Week" && styles.activeTab]}
            onPress={() => {
              handleButtonPress("weekly");
              setTimeRange("This Week");
            }}
          >
            <Text
              style={[
                styles.tabText,
                timeRange === "This Week" && styles.activeTabText,
              ]}
            >
              Weekly
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            key={"monthly"}
            style={[styles.tab, timeRange === "This Month" && styles.activeTab]}
            onPress={() => {
              handleButtonPress("monthly");
              setTimeRange("This Month");
            }}
          >
            <Text
              style={[
                styles.tabText,
                timeRange === "This Month" && styles.activeTabText,
              ]}
            >
              Monthly
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",

            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
            >
              Tasks Progress
            </Text>
            <VictoryPie
              data={
                view === "today"
                  ? dataToday
                  : view === "weekly"
                  ? dataWeekly
                  : dataMonthly
              }
              colorScale={["#0A3981", "#D4EBF8", "#FADA7A"]}
              labels={({ datum }) => `${datum.x}: ${datum.y}`}
              style={{
                labels: { fill: "blue", fontWeight: "bold", fontSize: 12 },
              }}
              width={400}
              height={400}
              padding={{ left: 100, right: 100, top: 40, bottom: 40 }}
              innerRadius={60}
              theme={VictoryTheme.clean}
            />
          </View>

          {view !== "today" && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Attendance Rate
              </Text>
              <VictoryPie
                data={view === "weekly" ? attendanceWeekly : attendanceMonthly}
                colorScale={["#399918", "#EE4E4E"]}
                labels={({ datum }) => {
                  const attendanceData =
                    view === "weekly" ? attendanceWeekly : attendanceMonthly;
                  const total = attendanceData.reduce(
                    (sum, item) => sum + item.y,
                    0
                  );
                  return `${datum.x}\n(${((datum.y / total) * 100).toFixed(
                    2
                  )}%)`;
                }}
                style={{
                  labels: { fill: "blue", fontWeight: "bold", fontSize: 12 },
                }}
                width={400}
                height={300}
                padding={{ left: 80, right: 80, top: 40, bottom: 40 }}
                innerRadius={60}
                theme={VictoryTheme.clean}
              />
            </View>
          )}

          {view !== "today" && (
            <View style={{ marginTop: 12 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Study Hours
              </Text>
              <VictoryChart
                theme={VictoryTheme.material}
                width={400}
                height={400}
              >
                <VictoryLine
                  data={
                    view === "weekly" ? studyHoursWeekly : studyHoursMonthly
                  }
                  style={{
                    data: { stroke: "#0A3981" },
                    parent: { border: "1px solid #ccc" },
                  }}
                  interpolation={"catmullRom"}
                />
              </VictoryChart>
            </View>
          )}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "linear-gradient(to top, #f3f4f6, #ffffff)",
  },
  header: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    marginVertical: 20,
    letterSpacing: 0.5,
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
  infoContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 20,
  },
});
