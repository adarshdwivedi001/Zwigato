import React from "react"
import UserClass from "./UserClass"
import User from "./User"

class About extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <h1>About</h1>
                <h2>This is Zwigato</h2>
                <UserClass/>
                <User/>
            </div>
        )
    }
}

export default About