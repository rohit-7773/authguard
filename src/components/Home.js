import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/login'>login</Link></li>
                <li><Link to='/protected'>protected page</Link></li>
            </ul>
        </>
    )
}

export default Home;