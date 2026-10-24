import { StyleSheet, Text, View } from "react-native";

type StopwatchProps = {
  seconds: number;
  isRunning: boolean;
};

export default function Stopwatch({ seconds, isRunning }: StopwatchProps) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const time =
    String(minutes).padStart(2, "0") +
    ":" +
    String(remainingSeconds).padStart(2, "0");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Lab Stopwatch</Text>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.status}>{isRunning ? "Running..." : "Paused"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  time: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  status: {
    fontSize: 18,
  },
});
