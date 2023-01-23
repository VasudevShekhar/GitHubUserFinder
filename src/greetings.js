import { useState, useEffect } from "react"

const Greetings = () => {

  const [randomNum, setRandomNum] = useState(
  Math.floor(Math.random()*5) + 1
)
  const [greeting, setGreeting] = useState('')
  useEffect(() => {
    console.log('Random greeting');
  })
  useEffect(() => {
    
  },[randomNum])

  return (
    <div>Greetings</div>
  )
}

export default Greetings