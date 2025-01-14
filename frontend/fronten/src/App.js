import './App.css';
import React, {useEffect, useState} from 'react';


function App() {
    const [names, setNames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/names')
            .then((response) => response.json())
            .then((data) =>  {console.log(data); setNames(data); })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1>Names from Backend:</h1>
            <ul>
                {names.map((name, i) => (
                    <li key={i}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
