import * as React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MyContext } from "../hook";

const CreateNote = ({ navigation }: any) => {
  const [todo, setTodo] = React.useState("");
  const { handleSetNote } = React.useContext(MyContext);
  // const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type something..." value={todo} onChangeText={setTodo} autoFocus />
      <TouchableOpacity style={styles.btn}>
        <Text
          style={styles.title}
          onPress={() => {
            handleSetNote(todo);
            navigation.navigate("Home");
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 8,
  },
  input: {
    paddingHorizontal: 4,
    paddingVertical: 6,
    borderColor: "black",
    borderRadius: 4,
    borderBlockColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    shadowRadius: 4,
    shadowColor: "gray",
    shadowOpacity: 0.7,
  },
  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: "green",
    padding: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "700",
  },
});
