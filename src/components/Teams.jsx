import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:3333/teams')
    .then(response => {
        setTeams(response.data);
    })
    .catch(error => {
        console.log('There was an error fetching the teams!', error)
    })
  }, [])
  
    return (
    <div className="bg-white">
        <h1 className="p-4">Teams List</h1>
        <ul className="p-4">
            {teams.map((team, index) => (
                <li key={index}> {team.TeamName} - {team.Country}</li>
            ))}
        </ul>
    </div>
  );
};

export default Teams