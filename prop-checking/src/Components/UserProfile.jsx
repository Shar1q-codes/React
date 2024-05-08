import UserUserName from "./UserUserName";
import PropTypes from "prop-types";

export default function UserProfile(props) {
  console.log(props);
  props.callme();
  return (
    <div id="user-profile">
      <UserUserName username={props.username} />
      <b>Age: </b>
      <span>{props.age}</span>
    </div>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callme: PropTypes.func.isRequired,
  isLoggedin: PropTypes.bool,
  favouriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
