import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./Data"

const App = () => {
  const cardData = Data.map(item => {
    return (
      <Card
        key = {item.id} 
        {...item} 
      />
    )
  })
  return (
    <div>
      <Navbar />
      <div className="container">
        {cardData}
      </div>
    </div>
  )
}

export default App