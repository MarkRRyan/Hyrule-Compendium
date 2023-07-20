import React, { useState, useEffect } from "react";
import axios from 'axios'

const Monsters = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const apiUrl = 'http://localhost:3001/monsters';
  
      axios.get(apiUrl)
        .then(res => {
          setData(res.data);
          console.log(res.data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <div>
        <h1>Monsters :)</h1>
          {data.map(monster => (
            <div >
                <h1 key={monster.id}>{monster.name} :)</h1>
                <h3>Compendium ID: {monster.compendiumId}</h3>
                <img src={monster.image} alt="compendium monster" />
                <p>{monster.description}</p>
                <ul>
                    <h4>Drops:</h4>
                    {monster.drops.map(drop => (
                        <li key={drop.id}>{drop}</li>
                    ))}
                </ul>
                <ul>
                    <h4>Commonly Found:</h4>
                    {monster.commonLocations.map(location => (
                        <li key={location.id}>{location}</li>
                    ))}
                </ul>
            </div>
            
          ))}
      </div>
    );
  };

export default Monsters