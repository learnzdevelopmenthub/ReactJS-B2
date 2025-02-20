import { useState } from "react"

const UserProfile = () => {

    const [ user, setUser] = useState({name: "Raja", age: 25})

    const updateName = () => {
        setUser((prevUser) => {
            return {...prevUser, name: "Priya"}
        })
    }

    return(
        <>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={updateName}>Update Name</button>
        </>
    )
}

export default UserProfile