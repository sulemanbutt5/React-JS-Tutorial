import React from "react"
import ReactDom from "react-dom"

function App()
{
    const fn="Suleman"
    const ln="Butt"
    const date=new Date();
    var h = date.getHours()
    let timeofday
    if (h<12) {
        timeofday="Morning"
    }
    else if(h>=12 && h<18)
    {
        timeofday="Afternoon"
    }
    else
    {
        timeofday="Night"
    }

    return(
        <div>
            <h1>
                Hello {fn + " " + ln}!
            </h1>
            <h2>
                Hello {`${fn} ${ln}`}!
            </h2>
            <h3>
                Good {timeofday + " " + fn + " " + ln} 
            </h3>
        </div>

    )
}


ReactDom.render(<App />,document.getElementById("root"))