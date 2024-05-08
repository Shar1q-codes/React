import UserDetails from "./Components/UserDetails";

export default function App() {
  const mockUsers = [
    {
      id: 1,
      username: "anson",
      email: "anson@ansonthedev.com",
    },
    {
      id: 2,
      username: "mike",
      email: "mike@mikethedev.com",
    },
  ];

  return (
    <>
      {mockUsers.map((user) => {
        return <UserDetails key={user.id} user={user} />;
      })}
    </>
  );
}
