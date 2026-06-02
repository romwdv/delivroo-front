import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Car from "./Components/Car";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/data`);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(cart);

  if (isLoading) return <p>loading</p>;
  // const { name, description, picture } = data.restaurant; // ← data est dispo ici
  return (
    <>
      <Header data={data} />
      <div className="content">
        <div className="content-container">
          <Content data={data} cart={cart} setCart={setCart} />
          <Car cart={cart} setCart={setCart} />
        </div>
      </div>
    </>
  );
}
export default App;
