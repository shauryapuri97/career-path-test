import { useMemo, useState, useEffect } from "react";
import "./App.css";
import { UserContext } from "./UserContext";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import MainApp from "./components/MainApp/MainApp";
import { useSearchParams } from "react-router-dom";
import Result from "./components/Result/Result";
import axios from "axios";
import { BASE_URL } from "./constants/MockData";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const user = useMemo(() => searchParams.get("user"), [searchParams]);
  const [latestSubmission, setLatestSubmission] = useState();

  useEffect(() => {
    if (user) {
      axios
        .get(`${BASE_URL}/submissions`, { params: { user } })
        .then((res) => setLatestSubmission(res.data.latestSubmission))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, setLatestSubmission]);

  return (
    <UserContext.Provider value={user}>
      {!latestSubmission ? (
        <>
          <Header />
          <Description />
          <MainApp />
        </>
      ) : (
        <Result latestSubmission={latestSubmission} />
      )}
    </UserContext.Provider>
  );
}

export default App;
