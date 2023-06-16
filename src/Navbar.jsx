import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div>
                <Link to="/">
                <h2>home</h2>
                </Link>
                <Link to="/about">
                    <h2>about</h2> 
                </Link>
                <Link to="/contact">
                    <h2>contact</h2>
                </Link>
            </div>
        </header>
    )
}

export default Navbar