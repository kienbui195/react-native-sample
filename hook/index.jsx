import * as React from "react";

export const MyContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [note, setNote] = React.useState("");
  const handleSetNote = (str = "") => {
    setNote(str);
  };

  return <MyContext.Provider value={{ note, handleSetNote }}>{children}</MyContext.Provider>;
};

export default ContextProvider
