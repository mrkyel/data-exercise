import "antd/dist/antd.css";
import CustomTable from "./Component/Table/CustomTable";
import "./App.css";
import { useContext, useEffect } from "react";
import { getEthnicityList, getGenderList, getRaceList } from "apis/CommonApis";
import GlobalContext, { GlobalProvider } from "config/GlobalContext";

function App() {
  const globalContext = useContext(GlobalContext);
  console.log(globalContext);

  useEffect(() => {
    initCommonData();
  });

  const initCommonData = async () => {
    try {
      const resEthnicityList = await getEthnicityList();
      const resGenderList = await getGenderList();
      const resRaceList = await getRaceList();
      // globalContext.actions.setEthnicity(resEthnicityList);
      // globalContext.actions.setGender(resGenderList);
      // globalContext.actions.setRace(resRaceList);
      console.log(resEthnicityList);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <GlobalProvider>
      <CustomTable />
    </GlobalProvider>
  );
}

export default App;
