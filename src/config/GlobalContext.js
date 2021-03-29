import React, { createContext, useState } from "react";

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [ethnicity, setEthnicity] = useState([]);
  const [gender, setGender] = useState([]);
  const [race, setRace] = useState([]);

  const value = {
    state: {
      ethnicity,
      gender,
      race,
    },
    actions: {
      setEthnicity,
      setGender,
      setRace,
    },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const { Consumer: GlobalConsumer } = GlobalContext;

export { GlobalProvider, GlobalConsumer };

export default GlobalContext;
