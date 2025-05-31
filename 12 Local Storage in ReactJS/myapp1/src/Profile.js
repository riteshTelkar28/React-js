import { useLocation } from "react-router-dom";


function Profile(){
    const location = useLocation();
    return(<>
        <h2>profile page </h2>
        <h3>Welcome {location.state.email}</h3>
        <h3>Your password is  {location.state.password}</h3>
        <h3>and your status is {(location.state.status).toString()}</h3>

    </>)
}

export default Profile;