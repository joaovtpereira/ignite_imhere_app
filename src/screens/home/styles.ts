import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: "#FDFCFE",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 48,
    },
    eventDate: {
      color: "#6B6B6B",
      fontSize: 16,
    },
    input: {
        backgroundColor: "#1F1E25",
        height: 56,
        borderRadius: 5,
        color: "#FFF",
        padding: 16,
        fontSize: 16
    },
    button: {
      borderRadius: 5,
      width: 56,
      height: 56,
      backgroundColor: '#31CF67',
      alignItems: "center",
      justifyContent: "center"
    },
    buttonText: {
      color: "#FFF",
      fontSize: 24
    }
  });