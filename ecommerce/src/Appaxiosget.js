import React, { useEffect, useState} from 'react'
import axios from 'axios'
const App = () => 
    {
    const [data, setData] = useState([]);
    useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/todos").then
    (response =>setData( response.data))},[])
  return
   (
    <div>
        <ol>
        {data.map((item,index)=><li>{item.tille}</li>)}
        </ol>
    </div>
  )
}
export default App;
//npm install axios