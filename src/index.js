import React from "react"
import ReactDom from "react-dom"

function App()
{
    const fn="Suleman"
    const ln="Butt"
    const date=new Date();
    var h = date.getHours()
    let timeofday
    var styles ={
        fontSize: "35px",
        backgroundColor: "lightGreen"
    }
    if (h<12) {
        timeofday="Morning"
        styles.color= "Blue"
    }
    else if(h>=12 && h<18)
    {
        timeofday="Afternoon"
        styles.color="Orange"
    }
    else
    {
        timeofday="Night"
        styles.color="purple"

    }

    return(
        <div>
            <h1 style={styles}>
                Hello {fn + " " + ln}!
            </h1>
            <h2 style={styles}>
                Hello {`${fn} ${ln}`}!
            </h2>
            <h3 style={styles}>
                Good {timeofday + " " + fn + " " + ln} 
            </h3>
        </div>

    )
}


ReactDom.render(<App />,document.getElementById("root"))