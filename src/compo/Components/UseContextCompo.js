import { createContext } from "react";

const userDetails = [
  { name: "John", age: 22 },
  { name: "Doe", age: 25 },
];
const UseContextCompo = createContext(userDetails);

export default UseContextCompo;
