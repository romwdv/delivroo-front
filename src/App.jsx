import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Content from "./Components/Content";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/data");
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <span>loading</span>;
  // const { name, description, picture } = data.restaurant; // ← data est dispo ici
  return (
    <>
      <Header data={data} />
      <Content data={data} />
    </>
  );
}
export default App;
