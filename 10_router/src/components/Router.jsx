import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import User from "../pages/User"
import Post from "../pages/Post"


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/users/:id' element={<User />} />
            <Route path='/posts/:id' element={<Post />} />
        </Routes>
    )
}

export default Router;