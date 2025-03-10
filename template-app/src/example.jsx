import { createRoot } from "react-dom/client"
import React from "react";

const root = createRoot(document.getElementById("root"))
root.render(
    <main>
   <TemporaryName/>
   <PageComponent/>
   </main>
)



function PageComponent() {
    return    ( 
    <main>
    <h1>Fun Facts About Love</h1>
    <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
    )
}

function TemporaryName() {
    return    ( 
    <main>
    <h1>Fun Facts About Barry</h1>
    <ul>
            <li>Was first release in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
    )
}