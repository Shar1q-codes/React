import UserFavouriteFooda from "./UserFavouriteFoods";

export default function UserProfile() {
    return (
        <div>
            <h1>Hello User</h1>
            <p>User Name: BOB</p>
            <div>
                <span>Email:</span>
                <span>example@email.com</span>
            </div>
            <UserFavouriteFooda/>
            <br />
        </div>
    )
}