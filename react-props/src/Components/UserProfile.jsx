import UserName from "./UserName";

export default function UserProfile(){
    return(
        <div id="user-profile">
            <UserName username="bob" />
            <div>
                <span>Email:</span>
                <span>Example@email.com</span>
            </div>
        </div>
    )
}