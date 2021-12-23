import axios from 'axios'
import { useState, useEffect } from 'react'

export default function HomePage(props) {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    getJoke()
    .then((data) => setJoke(data))
    .catch(err => {
      console.log("get joke failed");
    })
  }, [])

  const getJoke = async () => {
    const res = await axios.get('https://api.chucknorris.io/jokes/random');
    return res.data.value;
  }

  return (    
    <>
    <h1>Home page</h1>
    <p>Value CSR: {joke}</p>
    <p>Value SSR: {props.value}</p>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get('https://api.chucknorris.io/jokes/random')

  return {
    props: {
      value: res.data.value
    }
  }
}