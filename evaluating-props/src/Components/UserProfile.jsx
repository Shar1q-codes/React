import UserUserName from "./UserUserName";

export default function UserProfile(props){
    console.log(props)
    return(
        <div id="user-profile">
            <UserUserName username="bob"/>
            <b>Age: </b><span>{props.age}</span>
            {String(props.isLoggedIn)}
        </div>
    )
}