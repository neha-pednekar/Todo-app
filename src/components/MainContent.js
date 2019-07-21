import React from "react"

function MainContent()
{
    const firstName = "Neha";
    const lastName = "Pednekar";
    const sisFName = "Tejal";
    const sisLName = "Pednekar";

    return(
        <div>
            <p>This is the maincontent section</p>
            <p>My name is {firstName + " " + lastName}</p>
            <p>Another way of writing my name is {`${sisFName} ${sisLName}`}</p>
        </div>
        
    )
}

export default MainContent