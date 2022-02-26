import React, { useEffect, useState } from 'react';

const Tempapp =() => {
    const [city , setCity] = useState(null);
    const [search , setSearch] = useState("Mumbai");
    
    useEffect ( () => {
            const fetchApi = async () =>{
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cf1712ef571582de83b74e62256d47d8`
                const response = await fetch(url);
                const resJson = await response.json();
                setCity(resJson.main);
                console.log("resJson is" , resJson);
    
            }
            fetchApi();
        
    },[ search ])
    return(
        <>
        <div className="ox">
            <div className="temp">
                <input type="text"  onChange={(event) => {setSearch(event.target.value)}}/>
            </div>
            
            {!city ? 
            (<p>no data</p>)
            :(<div className="info">
                <h2 className="location">
                    <i className="fas fa-street-view"></i>{search}
                </h2>
                <h1 className="tem">{city.temp}</h1>
                <h3 className="temp-max">MIN 26 : Max 40</h3>
                </div>
            )
            }
            
            </div>     
        </>
    )
}

export default  Tempapp;