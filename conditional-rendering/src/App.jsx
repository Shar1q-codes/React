export default function App() {
  const USER_STATUS = "NOT_VERIFIED";

  switch (USER_STATUS) {
    case "NOT_VERIFIED":
      return (
        <div>
          <span>
            You are not verified. Please verify your Email or Mobile Number.
          </span>
        </div>
      );
    case "VERIFIED":
      return (
        <div>
          <span>
            You are verified. Congrats! Click here to Access your Dashboard.
          </span>
        </div>
      );
    case "ACCOUNT_DISABLED":
      return (
        <div>
          <span>Your account is disabled</span>
        </div>
      );
    default:
      return (
        <div>
          <span>Please contact accounts admin.</span>
        </div>
      );
  }

  // if (USER_STATUS === "NOT_VERIFIED") {
  //   return (
  //     <div>
  //       <span>
  //         You are not verified. Please verify your Email or Mobile Number.
  //       </span>
  //     </div>
  //   );
  // } else if (USER_STATUS === "VERIFIED") {
  //   return (
  //     <div>
  //       <span>
  //         You are verified. Congrats! Click here to Access your Dashboard.
  //       </span>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <span>Your account is disabled</span>
  //     </div>
  //   );
  // }
}
