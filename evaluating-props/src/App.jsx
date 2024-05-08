import UserProfile from "./Components/UserProfile";

export default function App(){

  const callMe=()=>{
    console.log("Hello")
  }

  return(
    <>
    <h1>Hello</h1>
    <UserProfile age={20} isLoggedIn={true} 
     favouriteFoods={[{
      name: "sushi",
     }]} callMe={callMe}/>

    </>
  )
}