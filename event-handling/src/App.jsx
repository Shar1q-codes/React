import LoginForm from "./Components/LoginForm";

export default function App() {
  window.addEventListener("resize", () => {
    console.log(window.innerHeight);
  });
  return (
    <div>
      <LoginForm />
    </div>
  );
}
