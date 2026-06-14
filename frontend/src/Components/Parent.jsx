import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
       < Child name = "udhay" 
       age = {19}
       isActive= {true}
       mark= {[99,99,99,99,99]}
       address = {{
        pincode: 641653,
        email:"sk767@gmail.com",
        mobile: 102938456
        }} />
       <child name = "ragnarlothbrok"
        age = {50}
        isActive={true}
        mark= {[99,99,99,99,99]}
       address = {{
        pincode:  641653,
        email:"sk767@gmail.com",
        mobile: 102938475
        }} />

    </div>
  )
}

export default Parent