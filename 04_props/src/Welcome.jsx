
const Welcome = ({name = "Guest", age = 0}) => {

    return (
        <>
            <h1>Hello, {name}</h1>
            <h2>Your age is {age}</h2>
        </>
    )
}

export default Welcome