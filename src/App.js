import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"



export default function App() {
   
    return (
        <div>
            
            <Navbar />
            <Hero />
            <Card 
                img="katie-zaferes.png"
                rating="5.0"
                review={6}
                country="USA"
                title="Life Lessons with Katie Zarefes"
                price={136}
            />        
        </div>
    )
}