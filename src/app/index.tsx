import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text } from "react-native";

import PracticeTracker from ".././components/PracticeTracker";
import Stopwatch from ".././components/Stopwatch";
import useStopwatch from ".././hooks/useStopwatch";

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lab Timer & Practice Tracker</Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch seconds={seconds} isRunning={isRunning} />

      <Button title="Start" onPress={handleStart} />
      <Text style={styles.space} />
      <Button title="Stop" onPress={handleStop} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  space: {
    height: 10,
  },
});
