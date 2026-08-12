import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error);

      })
  })

  return (
    <>
      <h1>hello welcome to jokes</h1>
      <p> Total number of Jokes: {jokes.length}</p>
      {
        jokes.map((jokes, index) => {
          return (
            <div key={jokes.id}>
              <h2>{jokes.title}</h2>
              <p>{jokes.joke}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
