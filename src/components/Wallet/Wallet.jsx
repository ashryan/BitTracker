import React, {useEffect, useState} from "react"
import {db, auth} from "../../firebase"

let response = ''

const Wallet = () => {

    const [loading, setLoading] = useState(false)

    

    useEffect(()=>{
        db.collection('value').doc(auth.currentUser.uid).get().then((res)=>{
            
          response = res.data()
          console.log(response)
           
            

        })

    },[])
  
    console.log(response)

    return (
        <div>
            {loading && <h1></h1>}
        </div>
    )
}

export default Wallet
