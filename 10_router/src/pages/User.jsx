import { useParams } from "react-router-dom";

const User = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>User Profile</h1>
            <p>User Id: {id}</p>
        </div>
    )
}

export default User;