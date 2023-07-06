import React, { useEffect, useState } from 'react'
import Card from './Card'

const Explore = () => {

    const [data, setData] = useState([]);
    const URL = ''; //the api URL

    //fuction to fetch the data from the api and set it to data state
    useEffect(() => {
        async function getData() {
            const response = await fetch(URL);
            const dataApi = await response.json();
            setData(dataApi)
        }
        getData()
    }, [])


    return (
        <div>
            {data === undefined || data === null}? <h1>data is Loading</h1> :(
            {data.map((item) => <Card name={data}/>)}

            )

        </div>
    )
}

export default Explore