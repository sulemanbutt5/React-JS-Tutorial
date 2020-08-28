import React from "react"
import ReactDom from "react-dom"

function MyInfo()
{
    return (
        <div>
            <h1>
                MUHAMMAD SULEMAN BUTT
            </h1>
            <p>
                My name is M. Suleman Butt. I am a boy.
                I am 21 years old. I am becoming a Software Engineer.
                I want to become a businessman as well. This is my webpage.
                I want to visit these cities:
            </p>
            <ul>
                <li>Paris</li>
                <li>Islamabad</li>
                <li>Istanbul</li>
            </ul>
        </div>
    )
}

ReactDom.render(<MyInfo/>,document.getElementById("root"))