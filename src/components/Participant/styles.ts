import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
    name: {
        color: "#FFF",
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    },
    button: {
        borderRadius: 5,
        width: 56,
        height: 56,
        backgroundColor: '#E23C44',
        alignItems: "center",
        justifyContent: "center"
      },
      buttonText: {
        color: "#FFF",
        fontSize: 24
      }
});