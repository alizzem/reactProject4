import React, { useState } from "react";
import { ReactDOM } from "react";
import './style2.css'

function App(){
    const [value, setNameValue] = useState( [
        {"id":1,name:"Frodo Baggins","department":"Management","role":"CEO"},
        {"id":2,name:"Samwise Gamgee","department":"Management","role":"CTO"},
        {"id":3,name:"Gandalf the Gray","department":"Recruitment","role":"Lead-recruiter"},
        {"id":4,name:"Aragorn","department":"Security","role":"Security officer"},
        {"id":5,name:"Legolas","department":"Management","role":"Office manager"}
    ])

    return(
        <div>
        {value.map((item) => {
            return(
                <div className="maindiv">
                <h1>Name: {item.name}</h1>
                <h1>Department: {item.department}</h1>
            </div>
            )
        })}
        </div>
    )
}

export default App