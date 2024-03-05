import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const UserTextInput = ({ placeholder, isPass, setStateValue }) => {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleTextChanged = (text) => {
    setValue(text);
    setStateValue(value);
  };

  return (
    <View
      className={`border rounded-2xl px-4 py-6 flex-row items-center justify-between space-x-4 my-2 border-gray-200`}
    >
      <MaterialIcons name="person" size={24} color={"#6c6c83"} />
      <TextInput
        className="flex-1 text-base text-primaryText font-semibold -mt-1"
        placeholder={placeholder}
        value={value}
        onChange={handleTextChanged}
        secureTextEntry={isPass && !showPass}
        autoCapitalize="none"
      />

      {isPass && (
        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
          <MaterialIcons
            name={`${showPass ? "visibility" : "visibility-off"}`}
            size={24}
            color={"#6c6c83"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserTextInput;
