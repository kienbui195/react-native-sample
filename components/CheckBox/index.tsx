import * as React from "react";
import { TouchableOpacity, View } from "react-native";

interface TCheckboxProps {
  isChecked: boolean;
  onPress: (val: boolean) => void;
}

const Checkbox: React.FC<TCheckboxProps> = ({ isChecked = false, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 2,
        backgroundColor: isChecked ? "green" : "white",
      }}
      onPress={() => onPress && onPress(!isChecked)}
    ></TouchableOpacity>
  );
};

export default Checkbox;
