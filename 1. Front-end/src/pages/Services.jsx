import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Services = () => {
  const [name, setName] = useLocalStorage("name", "");

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div>
      <h1>My name is {name}</h1>
      Services <button onClick={() => setName("Lukas")}>Click</button>
    </div>
  );
};

export default Services;