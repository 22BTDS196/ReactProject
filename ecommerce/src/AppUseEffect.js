import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const AppUseEffect = () => {

    const [username, setUsername] = useState("")
    const changeHandler=e=>
    {
        setUsername(e.target.value)
    }

    useEffect(()=>{console.log("i am clicked")},[username])

  return (
    <div>
       
        <input type = "text" name = "username" vaue = {username} onChange={changeHandler}/>
        <h1>{username}</h1>

    </div>
  )
}
export default App;