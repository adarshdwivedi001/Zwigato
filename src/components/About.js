import React from "react"
import UserClass from "./UserClass"
import User from "./User"
import useOnlineStatus from "../utils/useOnlineStatus"

const About = () => {
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return(
            <h1>Looks like you're offline!! Please check you Internet Connection</h1>
        )
    }

    return(
        <div>
            <h1>About</h1>
            <h2>This is Zwigato</h2>
            <UserClass />
            <User />
        </div>
    )
}

export default About