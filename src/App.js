import React from "react"
import ContactCard from "./ContactCard"
function App()
{
    return(
        <div className="contacts"> 
            <ContactCard 
            name="Mr. Suleman Butt" 
            url="http://placekitten.com/300/250"
            phone="0323123542"
            email="a1@gmail.com"
            />
            <hr/>
            <ContactCard 
            name="Mr. Asad Butt" 
            url="http://placekitten.com/400/250"
            phone="0323199942"
            email="b2@gmail.com"
            />
            <hr/>
            <ContactCard 
            name="Mr. Shaban Khawar" 
            url="http://placekitten.com/300/300"
            phone="0323112542"
            email="c3@gmail.com"
            />
            <hr/>
            <ContactCard 
            name="Mr. Hamza Tariq" 
            url="http://placekitten.com/300/150"
            phone="0323122542"
            email="d4@gmail.com"
            />
        </div>

        //Another way of props:
        /*
            contacts={{name: "name",url="url",email="email",phone="phone"}}
        */
    )
}

export default App