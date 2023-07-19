import React, { useState, useEffect } from "react";
import axios from 'axios'

const Monsters = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const apiUrl = 'http://localhost:3001/monsters';
  
      axios.get(apiUrl)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <div>
        <h1>Monsters :)</h1>
          {data.map(monster => (
            <h1 key={monster.id}>{monster.name} :)</h1>
          ))}
      </div>
    );
  };

export default Monsters