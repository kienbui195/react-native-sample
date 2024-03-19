import * as React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { MyContext } from "../hook";
import Checkbox from "../components/CheckBox";

const Notes = ({ navigation }) => {
  const [notes, setNotes] = React.useState([]);
  const { note, handleSetNote } = React.useContext(MyContext);

  React.useEffect(() => {
    if (note.trim() !== "") {
      let updateData = [...notes];
      updateData.push({
        content: note.trim(),
        is_done: false,
      });
      setNotes(updateData);
      handleSetNote("");
    }
  }, [note]);

  return (
    <View style={styles.container}>
      <Text style={styles.title2}>Notes</Text>
      <TouchableOpacity
        style={styles["btn-add"]}
        onPress={() => {
          navigation.navigate("Create");
        }}
      >
        <Text style={styles.title}>+</Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "stretch",
        }}
      >
        {notes.map((_i, idx) => (
          <View key={idx} style={styles["note-card"]}>
            <Text
              style={{
                textDecorationLine: _i.is_done ? "line-through" : "", color: 'white'
              }}
            >
              {`${idx + 1}. ${_i.content}`}
            </Text>
            <View style={{ display: "flex", gap: 8, alignItems: "center", flexDirection: 'row' }}>
              <Checkbox
                isChecked={_i.is_done}
                onPress={(val) => {
                  const updateData = [...notes];
                  updateData[idx].is_done = val;
                  setNotes(updateData);
                }}
              />
              <TouchableOpacity
                style={{
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,
                  elevation: 8,
                  backgroundColor: "wheat",
                  padding: 2
                }}
                onPress={() => {
                  let updateData = [...notes];
                  updateData.splice(idx, 1);
                  setNotes(updateData);
                }}
              >
                <Text style={{...styles.title, color: 'black'}}>Del</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    position: "relative",
  },
  "btn-add": {
    backgroundColor: "green",
    borderRadius: 10,
    padding: 12,
    position: "absolute",
    right: 16,
    bottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  title: {
    color: "white",
    fontWeight: "700",
  },
  title2: {
    color: "black",
    fontWeight: "700",
  },
  "note-card": {
    padding: 8,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: 'blue',
    opacity: 0.3
  },
});
