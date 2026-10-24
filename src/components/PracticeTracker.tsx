import { Button, StyleSheet, Text, View } from "react-native";

type PracticeTrackerProps = {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
};

export default function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Practice Tracker</Text>
      <Text style={styles.counter}>Problems Solved: {solved}</Text>
      {solved >= 5 && (
        <Text style={styles.congrats}>
          Congratulations! You've solved 5 problems!
        </Text>
      )}
      <Button title="Solve +1" onPress={onSolve} />
      <Button title="Reset" onPress={onReset} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  counter: {
    fontSize: 18,
    marginBottom: 10,
  },
  congrats: {
    color: "green",
    fontWeight: "bold",
  },
});
