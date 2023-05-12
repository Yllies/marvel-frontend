import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Character = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { name } = useParams();

  console.log(name);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/characters?name=${name}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);
};

export default Character;
