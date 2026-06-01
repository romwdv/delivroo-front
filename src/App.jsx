import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";

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

  // console.log(data);

  const { name, description, picture } = data.restaurant;

  return isLoading ? <span>loading</span> : name;
}

export default App;
