import React, {useEffect} from 'react'
import { useState } from 'react'

export const App = () => {
    const [count, setCount] = useState(1)
    useEffect(()=>console.log(count),[count])
    return (
        <div>
        <button onClick={()=>setCount(count+1)}> Change </button>
        </div>
    )
}
export default App;