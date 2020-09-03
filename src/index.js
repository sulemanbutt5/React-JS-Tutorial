import React from "react"
import ReactDom from "react-dom"

function App()
{
    const fn="Suleman"
    const ln="Butt"
    const date=new Date();

    return(
        <div>
            <h1>
                Hello {fn + " " + ln}!
            </h1>
            <h2>
                Hello {`${fn} ${ln}`}!
            </h2>
            <h3>
                Currently, it is {date.getHours} o' clock
            </h3>
        </div>

    )
}


ReactDom.render(<App />,document.getElementById("root"))