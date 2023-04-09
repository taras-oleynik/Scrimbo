import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data"


export default function App() {
    
    const mainContent = data.map(item => {
        return (
             <Main
             key={item}
             item={item}
              />
        )
    })
    
    return (
        <>
            <Navbar />
           {mainContent}
        </>
    )
}