import { useState } from 'react'
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
        jokes.map((joke, index) => {
          return (
            <div key={joke.id}>
              <h2>{joke.title}</h2>
              <p>{joke.joke}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
