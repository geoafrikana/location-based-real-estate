import React, {useEffect, useState} from 'react'

function Testing() {
    const [count, setCount] = useState(1)
    //useEffect(()=>{
    //     console.log('This is my first use effect')
    // },[])
    useEffect(()=>{
        console.log(count)
    },[count])

    const increaseCount = ()=> setCount(count+1)
    const decreaseCount = ()=> setCount(count-1)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default Testing