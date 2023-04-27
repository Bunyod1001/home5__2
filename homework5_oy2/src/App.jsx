import { useState } from 'react';
import { Form } from './components/Form';
import { Table } from './components/Table';
import moduleStyle from "./App.module.css";
import "./App.css";

let Data = [
  {
    id: 1,
    company: "Alfreds Futterkiste",
    name: "Maria Anders",
    address: "Germany",
  },
  {
    id: 2,
    company: "Centro comercial Moctezuma",
    name: "Francisco Chang",
    address: "Mexico",
  },
  {
    id: 3,
    company: "Ernst Handel",
    name: "Roland Mendel",
    address: "Austria",
  },
  {
    id: 4,
    company: "Island Trading",
    name: "Helen Bennett",
    address: "UK",
  },
  {
    id: 5,
    company: "Laughing Bacchus Winecellars",
    name: "Yoshi Tannamuri",
    address: "Canada",
  }
]


function App() {
  let [userData, setUserData] = useState(Data);

  const removeUser = (index) => {
    let newData = userData.filter((user, i) => i !== index);
    setUserData(newData);
  }

  return (
      <>
      <Form userData={userData} setData={setUserData}/>
      <Table userData={userData} removeUser={removeUser} />
      {/* <h1 className="moduleStyle.color"> Salom takrorlash un kk</h1> */}
    </>
  );
}

export default App;
