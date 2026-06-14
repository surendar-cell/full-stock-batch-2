import React, {usestate} from 'react'
const State = () => {
    //variable (variablename, setter fucntion) = usestate()
    const {count, setcount} = usestate (0) ;
  return (
    <div>
        <p>count ; (count)</p>
        <button onclick >{()=>(setcount(count+1))}Increment</button>
    </div>
  )
}

export default State