import { useEffect, useState } from "react"

const User = () => {

    const[ git, setGit ] = useState(
        {
            avatar_url: "functional Avartar",
            name: "functional Name",
            login: "functional Id",
        }
    );

    useEffect(() => {
        getData();
    },[])

    const getData = async() => {
        const data = await fetch("https://api.github.com/users/adarshdwivedi001");
        const json = await data.json();
        setGit(json);
    }

    const { name, avatar_url, login} = git;

    return<div className="user-card">
        <img height={200} width={200} src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>UserName: {login}</h3>
    </div>
}

export default User