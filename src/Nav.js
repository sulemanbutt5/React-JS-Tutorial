import React from "react"
import {Link} from "react-router-dom"
function Nav()
{
    const st={color:"white", textDecoration:"none"};
    return(
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={st} to="/about">
                    <li>About</li>
                </Link>
                <Link style={st} to="/mg">
                    <li>Meme Generator</li>
                </Link>
                <Link style={st} to="/todo">
                    <li>Todo List</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav