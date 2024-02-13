import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
           userInfo: {
            avatar_url: "classy Avartar",
            name: "classy Name",
            login: "classy Id"
           },
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/adarshdwivedi001");
        const json = await data.json();
    
        this.setState({
            userInfo: json,
        });
    }
    
    render(){

        const { avatar_url, name, login } = this.state.userInfo;

        return<div className="user-card">
            <img height={200} width={200} src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>UserName: {login}</h3>
    </div>
    }
}

export default UserClass;