import React, {useState, useEffect} from "react";
import axios from 'axios';
import './App.css';

const App = () => {
  const [hello, setHello] = useState('');

  const getHello = async () => {
    try {
      const response = await axios.get('/index');
      console.log(response)
      if (response.status === 200) {
        setHello(response.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {getHello()}, [])

  return (
    <div>{hello}</div>
  )
}

export default App;